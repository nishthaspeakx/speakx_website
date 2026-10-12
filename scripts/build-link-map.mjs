/**
 * Generates research/internal-link-map.csv + .md from the built pages' actual links.
 * Run with the dev/prod server up: node scripts/build-link-map.mjs --base http://localhost:3000
 */
import { writeFileSync } from "node:fs";
const args = process.argv.slice(2);
const base = args.includes("--base") ? args[args.indexOf("--base") + 1] : "http://localhost:3000";
const routes = ["/vs", "/press", "/vs/speakx-vs-supernova", "/vs/speakx-vs-mysivi", "/vs/speakx-vs-duolingo", "/vs/speakx-vs-stimuler", "/vs/speakx-vs-elsa-speak", "/vs/speakx-vs-speak"];
const rows = [["source_page", "destination", "anchor_text", "link_type", "section", "rationale"]];
const strip = (s) => s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").replace(/&#x27;|&apos;/g, "'").replace(/&amp;/g, "&").trim();
for (const r of routes) {
  const html = await (await fetch(base + r)).text();
  const main = html.split('<main id="main"')[1]?.split("</main>")[0] ?? html;
  // Walk sections to label where each link lives.
  const sections = [...main.matchAll(/<section[^>]*?(?:id="([^"]*)")?[^>]*>([\s\S]*?)<\/section>/g)];
  const seen = new Set();
  const push = (dest, text, section) => {
    if (!dest || dest.startsWith("#") || seen.has(dest + "|" + text)) return;
    seen.add(dest + "|" + text);
    const type = dest.startsWith("/") ? "internal (hub)" : dest.includes("speakx.ai") ? "internal (speakx.ai)" : dest.includes("sng.link") || dest.includes("play.google") || dest.includes("apps.apple") ? "install CTA" : "external citation";
    const rationale = type === "internal (hub)" ? "Cross-link between comparison pages / hub" : type === "internal (speakx.ai)" ? "Supporting SpeakX content (blog, premium, about)" : type === "install CTA" ? "Conversion" : "Source / press citation";
    rows.push([r, dest, text.slice(0, 80), type, section, rationale]);
  };
  for (const s of sections) {
    const heading = strip(s[2].match(/<h2[^>]*>([\s\S]*?)<\/h2>/)?.[1] ?? s[1] ?? "section");
    for (const a of s[2].matchAll(/<a[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)) push(a[1], strip(a[2]), heading);
  }
  const heroEnd = main.indexOf("<section");
  const hero = heroEnd > 0 ? main.slice(0, heroEnd) : "";
  for (const a of hero.matchAll(/<a[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)) push(a[1], strip(a[2]), "hero / breadcrumbs");
}
const csv = rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
writeFileSync("../research/internal-link-map.csv", csv);
const internal = rows.slice(1).filter((r) => r[3].startsWith("internal"));
const byPage = {};
for (const r of internal) (byPage[r[0]] ||= []).push(r);
let md = "# Internal linking map (generated from the built pages, " + new Date().toISOString().slice(0, 10) + ")\n\n";
md += "Every comparison page is reachable from the /vs hub (cards, matrix headers, footer) and links back to the hub, to two or more sibling comparisons, to SpeakX Premium, to the long-form apps guide and to topic-matched blog posts. Anchors vary per page to avoid repeated exact-match text.\n\n";
md += "| Source | Destination | Anchor | Section |\n|---|---|---|---|\n";
for (const [page, list] of Object.entries(byPage)) for (const r of list) md += `| ${page} | ${r[1]} | ${r[2]} | ${r[4]} |\n`;
md += "\n## Recommended additions on existing speakx.ai pages (not changed by this build)\n\n";
md += "| Source (existing) | Destination | Suggested anchor | Rationale |\n|---|---|---|---|\n";
md += "| https://speakx.ai/blog/best-english-speaking-apps-india-speakx-vs-competitors | /vs | see our head-to-head comparisons | Hub discovery from the ranking listicle |\n";
for (const s of ["duolingo", "supernova", "stimuler", "elsa-speak", "speak", "mysivi"]) md += `| https://speakx.ai/blog/best-english-speaking-apps-india-speakx-vs-competitors (app row) | /vs/speakx-vs-${s} | full SpeakX vs ${s === "elsa-speak" ? "ELSA Speak" : s === "mysivi" ? "MySivi" : s[0].toUpperCase() + s.slice(1)} comparison | Row-level deep link |\n`;
md += "| https://speakx.ai/ (footer or nav) | /vs | Compare apps | Sitewide discovery |\n| https://speakx.ai/about | /press | Press and awards | Entity and trust signals |\n| https://speakx.ai/blog/interview-questions-answers-english-freshers | /vs/speakx-vs-stimuler | how interview practice apps compare | Topic match (interviews) |\n| https://speakx.ai/blog/english-pronunciation-difficulty | /vs/speakx-vs-elsa-speak | pronunciation drills vs conversation practice | Topic match (pronunciation) |\n| https://speakx.ai/blog/100-simple-english-sentences-for-daily-use-with-hindi-meaning | /vs/speakx-vs-duolingo | apps that explain English in Hindi | Topic match (Hindi-medium beginners) |\n| https://speakx.ai/llms.txt | /vs, /press | Comparisons / Press | AI retrieval discovery |\n";
writeFileSync("../research/internal-link-map.md", md);
console.log(`link map: ${rows.length - 1} links (${internal.length} internal)`);
