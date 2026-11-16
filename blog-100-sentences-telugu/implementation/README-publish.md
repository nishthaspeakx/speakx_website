# Publish: 100 Daily Use English Sentences with Telugu Meaning

URL to create: https://speakx.ai/blog/100-simple-english-sentences-for-daily-use-with-telugu-meaning (404 today)

**Before anything else:** a native Telugu speaker must verify every Telugu meaning and transliteration in `data/sentences.json` and the mistakes table in the article (brief §11). Edit the JSON, then re-run `python3 article/build-article.py` and `python3 pdf/build-pdf.py` so the page and PDF stay identical. Remove the editorial note above the mistakes table once verified.

1. Create the post with the slug above. Author: Deepank Agarwal. Page `lang="en-IN"`; Telugu spans already carry `lang="te"`. No page-level hreflang.
2. Paste `article/article-body.html` as the body (H1 included).
3. Metadata from `implementation/seo-metadata.json` (title 51 chars, meta 155, canonical non-www, robots index).
4. Add `implementation/structured-data.jsonld` (Article + LearningResource + BreadcrumbList + FAQPage); set the two dates.
5. Host the PDF on speakx.ai at the article path: `/blog/100-simple-english-sentences-for-daily-use-with-telugu-meaning/100-daily-use-english-sentences-with-telugu-meaning.pdf` (NOT image.speakx.ai). Headers: `Content-Type: application/pdf`, `Content-Disposition: inline`, `X-Robots-Tag: noindex`, `Cache-Control: public, max-age=86400`. Keep it out of the sitemap. All three CTAs already point to this path.
6. Add `implementation/download-cta.css` (same as the Hindi page plus the transliteration column) to the blog stylesheet, and the shared `analytics.js` if not already live.
7. Images: see `seo-metadata.json` → images (adults only).
8. After publishing: add the inbound links in `backlink-plan.md` §A, including the switcher link from the Hindi page; request indexing in Search Console.
