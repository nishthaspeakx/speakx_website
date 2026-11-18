// Google Play review + metadata collector for the SpeakX review-comparison research.
// Usage: node collect-play.mjs   (run inside research/reviews/, needs `npm install`)
// Fetches app details and up to 300 NEWEST + 300 MOST_RELEVANT reviews per app
// (lang=en, country=in), dedupes by review id, and writes play-<slug>.json.
import gplay from 'google-play-scraper';
import { writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const APPS = [
  { slug: 'speakx',    appId: 'yellowclass.kids.live' },
  { slug: 'supernova', appId: 'live.gosupernova.app' },
  { slug: 'mysivi',    appId: 'com.practice.ninja_study' },
  { slug: 'duolingo',  appId: 'com.duolingo' },
  { slug: 'stimuler',  appId: 'com.stimuler' },
  // Task brief gave com.elsaspeak.app, which returns 404 on Play. Verified via
  // gplay.search('ELSA Speak', country=in) on 2026-10-13: developer "ELSA Speak".
  { slug: 'elsa-speak', appId: 'us.nobarriers.elsa', idNote: 'Brief said com.elsaspeak.app (404); corrected to us.nobarriers.elsa via Play search' },
  { slug: 'speak',     appId: 'com.selabs.speak' },
];

const LANG = 'en', COUNTRY = 'in', PER_SORT = 300;
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function fetchReviews(appId, sort) {
  // Paginate until we have PER_SORT or the token runs out.
  const out = [];
  let token;
  while (out.length < PER_SORT) {
    const num = Math.min(150, PER_SORT - out.length);
    const res = await gplay.reviews({ appId, lang: LANG, country: COUNTRY, sort, num, paginate: true, nextPaginationToken: token });
    out.push(...res.data);
    token = res.nextPaginationToken;
    if (!token || res.data.length === 0) break;
    await sleep(800);
  }
  return out.slice(0, PER_SORT);
}

// Fallback: parse the public Play page for score / ratings / histogram.
function fallbackHtml(appId) {
  const url = `https://play.google.com/store/apps/details?id=${appId}&hl=en&gl=in`;
  const html = execFileSync('curl', ['-sL', '-A', 'Mozilla/5.0', url], { maxBuffer: 50 * 1024 * 1024 }).toString();
  const out = { url, fetched: new Date().toISOString() };
  const score = html.match(/<div class="jILTFe">([\d.]+)<\/div>/);
  const ratings = html.match(/<div class="g1rdde">([\d.,KM]+) reviews<\/div>/);
  const downloads = html.match(/<div class="ClM7O">([\d.,KM+]+)<\/div>\s*<div class="g1rdde">Downloads/);
  out.score = score ? Number(score[1]) : null;
  out.ratingsDisplayed = ratings ? ratings[1] : null;
  out.downloadsDisplayed = downloads ? downloads[1] : null;
  // Histogram is rendered via aria-labels like "Rated 5 stars out of five stars" with widths; capture any "RJfYMc" widths.
  const hist = [...html.matchAll(/<div class="RJfYMc" style="width: ([\d.]+)%"/g)].map(m => Number(m[1]));
  out.histogramPercentWidths = hist.length === 5 ? hist : null;
  out.note = 'Parsed from Play HTML; class names may change. Treat as approximate.';
  return out;
}

const collectedAt = new Date().toISOString();
for (const app of APPS) {
  const file = `play-${app.slug}.json`;
  const result = { slug: app.slug, appId: app.appId, idNote: app.idNote, store: 'google_play', lang: LANG, country: COUNTRY, collectedAt, errors: [] };
  console.log(`\n== ${app.slug} (${app.appId})`);
  try {
    const d = await gplay.app({ appId: app.appId, lang: LANG, country: COUNTRY });
    result.details = {
      title: d.title, developer: d.developer, score: d.score, scoreText: d.scoreText,
      ratings: d.ratings, reviews: d.reviews, installs: d.installs, minInstalls: d.minInstalls, maxInstalls: d.maxInstalls,
      histogram: d.histogram, updated: d.updated ? new Date(d.updated).toISOString() : null, version: d.version,
      released: d.released, price: d.price, free: d.free, offersIAP: d.offersIAP, IAPRange: d.IAPRange, genre: d.genre, url: d.url,
    };
    console.log(`details: ${d.title} | score ${d.score} | ratings ${d.ratings} | reviews ${d.reviews} | installs ${d.installs} | v${d.version}`);
  } catch (e) {
    result.errors.push({ stage: 'details', message: String(e.message || e) });
    console.log('details ERROR', e.message);
    try { result.fallbackHtml = fallbackHtml(app.appId); console.log('fallback html', JSON.stringify(result.fallbackHtml)); }
    catch (e2) { result.errors.push({ stage: 'fallbackHtml', message: String(e2.message || e2) }); }
  }
  const byId = new Map();
  const counts = {};
  for (const [name, sort] of [['newest', gplay.sort.NEWEST], ['most_relevant', gplay.sort.HELPFULNESS]]) {
    try {
      const rs = await fetchReviews(app.appId, sort);
      counts[name] = rs.length;
      for (const r of rs) if (!byId.has(r.id)) byId.set(r.id, { ...r, _sort: name });
      console.log(`reviews ${name}: ${rs.length}`);
    } catch (e) {
      counts[name] = 0;
      result.errors.push({ stage: `reviews_${name}`, message: String(e.message || e) });
      console.log(`reviews ${name} ERROR`, e.message);
    }
    await sleep(1000);
  }
  result.reviewCounts = { ...counts, dedupedTotal: byId.size };
  result.reviews = [...byId.values()].map(r => ({
    id: r.id, score: r.score, date: r.date ? new Date(r.date).toISOString() : null, title: r.title || null, text: r.text,
    thumbsUp: r.thumbsUp, version: r.version || null, replyDate: r.replyDate ? new Date(r.replyDate).toISOString() : null,
    replyText: r.replyText || null, sortBucket: r._sort,
  }));
  writeFileSync(file, JSON.stringify(result, null, 2));
  console.log(`wrote ${file}: ${byId.size} unique reviews, ${result.errors.length} errors`);
  await sleep(1500);
}
