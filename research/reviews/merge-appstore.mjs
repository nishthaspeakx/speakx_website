// Merge raw App Store lookup + RSS pages (fetched by collect-appstore.sh / retry loop) into appstore-<slug>.json
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
const T = process.argv[2];
const APPS = [['speakx','6756059415'],['supernova','6447939054'],['mysivi','1644736135'],['duolingo','570060128'],['stimuler','1627501632'],['elsa-speak','1083804886'],['speak','1286609883']];
const collectedAt = new Date().toISOString();
for (const [slug, id] of APPS) {
  const dir = `${T}/${slug}`;
  const out = { slug, appStoreId: id, store: 'app_store', storefront: 'in', collectedAt, errors: [], sources: {
    lookup: `https://itunes.apple.com/in/lookup?id=${id}`,
    rss: `https://itunes.apple.com/in/rss/customerreviews/page=N/id=${id}/sortby={mostrecent|mosthelpful}/json (N=1..10, stopped at first empty page, 3 attempts per page)`,
  } };
  try {
    const j = JSON.parse(readFileSync(`${dir}/lookup.json`, 'utf8'));
    const r = j.results[0];
    if (!r) throw new Error('lookup returned 0 results');
    out.lookup = { trackName: r.trackName, sellerName: r.sellerName, averageUserRating: r.averageUserRating, userRatingCount: r.userRatingCount,
      averageUserRatingForCurrentVersion: r.averageUserRatingForCurrentVersion, userRatingCountForCurrentVersion: r.userRatingCountForCurrentVersion,
      version: r.version, releaseDate: r.releaseDate, currentVersionReleaseDate: r.currentVersionReleaseDate, price: r.price, formattedPrice: r.formattedPrice,
      currency: r.currency, contentAdvisoryRating: r.contentAdvisoryRating, primaryGenreName: r.primaryGenreName, trackViewUrl: r.trackViewUrl };
  } catch (e) { out.errors.push({ stage: 'lookup', message: String(e.message || e) }); }
  const byId = new Map(); const pages = {};
  for (const f of readdirSync(dir).filter(f => /^(mostrecent|mosthelpful)_page\d+\.json$/.test(f)).sort()) {
    const sort = f.split('_')[0];
    try {
      const j = JSON.parse(readFileSync(`${dir}/${f}`, 'utf8'));
      let e = j.feed && j.feed.entry; if (!e) e = []; if (!Array.isArray(e)) e = [e];
      pages[f] = e.length;
      for (const x of e) {
        const rid = x.id?.label; if (!rid || byId.has(rid)) continue;
        byId.set(rid, { id: rid, score: Number(x['im:rating']?.label), date: x.updated?.label || null, title: x.title?.label || null,
          text: x.content?.label || '', version: x['im:version']?.label || null, voteCount: Number(x['im:voteCount']?.label || 0), sortBucket: sort });
      }
    } catch (e) { out.errors.push({ stage: `rss_${f}`, message: String(e.message || e) }); }
  }
  out.rssPages = pages;
  out.reviewCount = byId.size;
  out.reviews = [...byId.values()];
  if (byId.size === 0) out.errors.push({ stage: 'rss', message: 'RSS customerreviews feed returned HTTP 200 with an empty feed (no <entry>) for every page/sort tried on the IN storefront (3 attempts each). Also empty on US storefront. No review text available from the public feed for this app.' });
  out.developerResponses = 'not available (App Store RSS does not expose developer responses)';
  out.histogramNote = byId.size ? 'Store-wide star histogram is not exposed by lookup/RSS; sample histogram computed from RSS reviews in analysis.' : 'Store-wide star histogram not available (not exposed by lookup/RSS; apps.apple.com page is client-rendered).';
  writeFileSync(`appstore-${slug}.json`, JSON.stringify(out, null, 2));
  console.log(slug, 'lookup', out.lookup ? `${out.lookup.averageUserRating} / ${out.lookup.userRatingCount} v${out.lookup.version}` : 'ERR', '| reviews', byId.size, '| pages', JSON.stringify(pages), '| errors', out.errors.length);
}
