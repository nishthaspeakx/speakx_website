/**
 * Technical QA for the comparison hub.
 * Usage: node scripts/qa.mjs [--base http://localhost:3000] [--external]
 *  - crawls the hub, every /vs/* page and /press from a running server
 *  - checks status, <title> / meta description lengths, canonical, single H1, JSON-LD parses
 *  - checks every internal link resolves (200) and, with --external, every external link (HEAD/GET)
 *  - checks sitemap includes every page and robots references the sitemap
 *  - flags duplicated paragraphs (>= 120 chars) shared across comparison pages
 *  - scans for forbidden claims from the content rules
 */
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);
const base = (args[args.indexOf("--base") + 1] && args.includes("--base")) ? args[args.indexOf("--base") + 1] : "http://localhost:3000";
const checkExternal = args.includes("--external");

const FORBIDDEN = [
  /₹\s?199\/month/i, /14 Indian languages/i, /SpeakX[^.]{0,80}\bfree trial\b|\bfree trial\b[^.]{0,80}SpeakX/i, /SpeakX[^.,]{0,60}4\.6/i,
  /kids'? app|for kids|for children/i, /Yellow Class|Ivykids/i, /2 million monthly/i, /2 lakh/i, /95% (speech|accuracy)/i,
  /\bSpeakEasy\b|English Seekho/, /ai-se-english-kaise-sikhe/i, /SpeakX[^.→]{0,80}\bmost downloaded\b/i, /SpeakX[^.→]{0,80}(\bthe #1\b|\bnumber one\b)/i,
];

const issues = [];
const report = { checked: new Date().toISOString(), base, pages: [], issues };

async function fetchText(url, opts = {}) {
  const res = await fetch(url, { redirect: "manual", ...opts, headers: { "user-agent": "speakx-vs-qa/1.0", ...(opts.headers || {}) } });
  return { res, text: res.ok ? await res.text() : "" };
}

function strip(html) {
  return html.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<style[\s\S]*?<\/style>/g, "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
}

function paragraphs(html) {
  return [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].map((m) => strip(m[1]).trim()).filter((p) => p.length >= 120);
}

async function checkPage(route) {
  const url = base + route;
  const { res, text } = await fetchText(url);
  const entry = { route, status: res.status, internalLinks: 0, externalLinks: 0, problems: [] };
  report.pages.push(entry);
  if (res.status !== 200) { entry.problems.push(`status ${res.status}`); issues.push(`${route}: status ${res.status}`); return { text: "", links: [] }; }

  const title = text.match(/<title[^>]*>([^<]*)<\/title>/)?.[1] ?? "";
  const desc = text.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "";
  const canonical = text.match(/<link rel="canonical" href="([^"]*)"/)?.[1] ?? "";
  const h1s = [...text.matchAll(/<h1[\s>]/g)].length;
  if (!title) entry.problems.push("missing <title>");
  if (title.length > 65) entry.problems.push(`title ${title.length} chars`);
  if (!desc) entry.problems.push("missing meta description");
  if (desc.length > 165) entry.problems.push(`meta description ${desc.length} chars`);
  if (!canonical) entry.problems.push("missing canonical");
  if (h1s !== 1) entry.problems.push(`${h1s} H1 elements`);
  const ld = [...text.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (ld.length === 0) entry.problems.push("no JSON-LD");
  for (const m of ld) { try { JSON.parse(m[1]); } catch { entry.problems.push("invalid JSON-LD"); } }
  const imgsNoAlt = [...text.matchAll(/<img(?![^>]*\balt=)[^>]*>/g)].length;
  if (imgsNoAlt) entry.problems.push(`${imgsNoAlt} <img> without alt`);
  const plain = strip(text);
  for (const re of FORBIDDEN) {
    const m = plain.match(re);
    if (m) entry.problems.push(`forbidden phrase: "${m[0]}"`);
  }
  entry.words = plain.split(" ").filter(Boolean).length;
  entry.title = title; entry.description = desc; entry.canonical = canonical;
  for (const p of entry.problems) issues.push(`${route}: ${p}`);

  const links = [...text.matchAll(/<a[^>]+href="([^"#]+)"/g)].map((m) => m[1]);
  return { text, links };
}

async function headOk(url) {
  try {
    let res = await fetch(url, { method: "HEAD", redirect: "follow", headers: { "user-agent": "Mozilla/5.0 (compatible; speakx-vs-qa/1.0)" } });
    if (res.status === 405 || res.status === 403 || res.status === 404) res = await fetch(url, { method: "GET", redirect: "follow", headers: { "user-agent": "Mozilla/5.0 (compatible; speakx-vs-qa/1.0)" } });
    return res.status;
  } catch (e) { return `ERR ${e.message}`; }
}

async function main() {
  const dataDir = path.join(process.cwd(), "src/data/comparisons");
  const slugs = readdirSync(dataDir).filter((f) => f.startsWith("speakx-vs-") && f.endsWith(".ts")).map((f) => f.replace(".ts", ""));
  const routes = ["/vs", "/press", ...slugs.map((s) => `/vs/${s}`)];
  const seenInternal = new Map();
  const seenExternal = new Set();
  const paraIndex = new Map();

  for (const r of routes) {
    const { text, links } = await checkPage(r);
    if (r.startsWith("/vs/")) for (const p of paragraphs(text)) { const k = p.slice(0, 160); const arr = paraIndex.get(k) || []; arr.push(r); paraIndex.set(k, arr); }
    const entry = report.pages.find((p) => p.route === r);
    for (const l of links) {
      if (l.startsWith("/")) { entry.internalLinks++; if (!seenInternal.has(l)) seenInternal.set(l, []); seenInternal.get(l).push(r); }
      else if (/^https?:/.test(l)) { entry.externalLinks++; seenExternal.add(l); }
    }
  }

  for (const [l] of seenInternal) {
    const { res } = await fetchText(base + l);
    if (res.status !== 200 && res.status !== 308 && res.status !== 307) issues.push(`internal link ${l} -> ${res.status}`);
  }

  // Paragraphs present on EVERY comparison page are template boilerplate (section intros, CTA, sources);
  // flag only copy shared by some pages, which indicates reused writing.
  const vsCount = routes.filter((r) => r.startsWith("/vs/")).length;
  for (const [k, pages] of paraIndex) {
    const uniq = [...new Set(pages)];
    if (uniq.length > 1 && uniq.length < vsCount) issues.push(`duplicated paragraph across ${uniq.join(", ")}: "${k.slice(0, 80)}..."`);
  }

  // sitemap & robots
  const { res: sm, text: smText } = await fetchText(base + "/sitemap.xml");
  if (sm.status !== 200) issues.push("sitemap.xml not 200");
  for (const r of routes) if (!smText.includes(r)) issues.push(`sitemap missing ${r}`);
  const { text: robots } = await fetchText(base + "/robots.txt");
  if (!/sitemap/i.test(robots)) issues.push("robots.txt missing Sitemap line");

  report.externalLinks = [...seenExternal];
  if (checkExternal) {
    report.externalStatus = {};
    for (const l of seenExternal) {
      const s = await headOk(l);
      report.externalStatus[l] = s;
      if (!(typeof s === "number" && s < 400)) issues.push(`external link ${l} -> ${s}`);
    }
  }

  writeFileSync("qa-report.json", JSON.stringify(report, null, 2));
  console.log(`Checked ${routes.length} pages, ${seenInternal.size} internal links, ${seenExternal.size} external links${checkExternal ? " (verified)" : ""}.`);
  for (const p of report.pages) console.log(`  ${p.route}: ${p.status}, ${p.words} words, title ${p.title?.length ?? 0}c, desc ${p.description?.length ?? 0}c${p.problems.length ? " · " + p.problems.join("; ") : ""}`);
  console.log(issues.length ? `\n${issues.length} issue(s):\n- ${issues.join("\n- ")}` : "\nNo issues found.");
  process.exit(issues.length ? 1 : 0);
}

main();
