# Publish: English Spelling Rules and Practice (revision of an existing post)

URL (unchanged): https://speakx.ai/blog/english-spelling-practice — do NOT change the slug; the page has existing impressions and links.

What changes: title, H1, meta, the whole body, the schema. What stays: URL, author (Supriya Manchanda), datePublished.

1. Open the existing post and replace the body with `article/article-body.html` (H1 included). The old body is kept in `research/article.html` for reference.
2. Set the metadata from `implementation/seo-metadata.json`: title tag 59 chars, meta description 158, canonical `https://speakx.ai/blog/english-spelling-practice` (non-www), robots index/follow, OG title and description.
3. Replace the page's JSON-LD with `implementation/structured-data.jsonld` (Article + BreadcrumbList + FAQPage). Keep `datePublished` as it is; set `dateModified` to the publish timestamp. The FAQ text in the schema matches the visible FAQ word for word; if the FAQ copy is edited, edit both.
4. Host the PDF `pdf/english-spelling-practice-sheet.pdf` on speakx.ai at `/blog/english-spelling-practice/english-spelling-practice-sheet.pdf` (NOT image.speakx.ai). Headers: `Content-Type: application/pdf`, `Content-Disposition: inline`, `X-Robots-Tag: noindex`, `Cache-Control: public, max-age=86400`. Keep it out of the sitemap. The in-article button already points to this path.
5. Add `implementation/download-cta.css` to the blog stylesheet (misspelled-words table, plan table, PDF and app CTAs; the CTA rules are identical to the 100-sentences posts, so skip duplicates). Add `implementation/analytics.js` only if the shared click tracker is not already live.
6. Images: three, see `seo-metadata.json` → images. Adults in work settings only.
7. After publishing: add the six inbound links in `backlink-plan.md` §A, remove the old `/blog/english-speaking-fluency` link anywhere it still appears (it 301s), and request indexing in Search Console.
8. Measurement: GSC page filter = this URL. Watch "english spelling rules", "practice spelling", "practicing spelling", "difficult spellings in english", "english spelling practice", "how to write correct spelling in english". Baseline (week before revision): 1,419 impressions, avg position 8; "practice spelling" 0 clicks / 109 impr; "practicing spelling" 0 / 115. Review at 14 and 28 days.

Preview of the finished page: `article/article-shared.html` (PDF button points to a test copy). Markdown copy for review: `article/article.md`.

Why the previous version lost impressions: the body repeated the exact phrase "English spelling practice" about thirty times, had no spelling rules, no misspelled-word list and nothing to practise with, so it could not satisfy "practice spelling" or "english spelling rules" queries. It also carried unsourced statistics (British Council 60/67/74%, National Literacy Trust 40/43%, "10,000+ learners", "40% faster"); these were removed, not re-sourced.
