# Implementation guide: PDF download on the 100-sentences article

Target page (URL unchanged): https://speakx.ai/blog/100-simple-english-sentences-for-daily-use-with-hindi-meaning
Prepared 27 Oct 2026. No live changes were made to speakx.ai; this folder contains everything needed to publish.

## Files

| File | Purpose |
|---|---|
| `../pdf/100-daily-use-english-sentences-with-hindi-meaning.pdf` | The printable (7 A4 pages, 100 sentences, Hindi in embedded Noto Sans Devanagari, page numbers, 10-day tracker, QR to the SpeakX install link) |
| `../article/article-body.html` | The full revised article body (H1 to FAQ), ready to paste into the CMS / MDX body |
| `../article/article.md` | The same article in Markdown for review |
| `../data/sentences.json` | Single source for the 100 sentences; both the article and the PDF are generated from it |
| `seo-metadata.json` | Title, meta description, H1, OG fields, keyword-to-section map, internal links in/out, PDF indexing decision |
| `structured-data.jsonld` | BlogPosting + BreadcrumbList (replace the page's current Article block; set `dateModified` at publish) |
| `download-cta.css` | Styles for the three download CTAs and the sentence tables |
| `analytics.js` | `pdf_download` and `cta_click` events (dataLayer + gtag) |

## 1. Host the PDF (stable, SpeakX-controlled URL)

Upload the file to the site's static assets so it is served from the canonical host:

```
https://speakx.ai/downloads/100-daily-use-english-sentences-with-hindi-meaning.pdf
```

In the Next.js site this is `public/downloads/100-daily-use-english-sentences-with-hindi-meaning.pdf` (create the `downloads` folder). Keep the filename stable so inbound links and the GSC history stay intact; replace the file in place for future revisions.

Headers to serve with it (next.config headers() or the CDN):

```
Content-Type: application/pdf
Content-Disposition: inline; filename="100-daily-use-english-sentences-with-hindi-meaning.pdf"
X-Robots-Tag: noindex
Cache-Control: public, max-age=86400
```

`inline` lets Android and iOS open it in the browser and offers "save"; the `download` attribute on the button triggers a save on desktop. `noindex` keeps the PDF from competing with the HTML article in search (the article is the destination we want ranked). Do not add the PDF to the sitemap. No login, no email gate.

Example `next.config` headers entry:

```ts
async headers() {
  return [{
    source: "/downloads/:file*.pdf",
    headers: [
      { key: "X-Robots-Tag", value: "noindex" },
      { key: "Cache-Control", value: "public, max-age=86400" },
      { key: "Content-Disposition", value: "inline" },
    ],
  }];
}
```

## 2. Replace the article body

Paste `../article/article-body.html` as the post body. It already contains, in order:

1. H1 `100 Daily Use English Sentences with Hindi Meaning (Free PDF)`
2. Lead paragraph (answers the query in the first 100 words) and **CTA 1** (`data-cta-position="top"`)
3. "Why" section, then the 100 sentences in 10 tables with question-style H3s
4. **CTA 2** after sentence 50 (`data-cta-position="middle"`)
5. "Where can I download…" section with **CTA 3** (`data-cta-position="end"`)
6. Beginner top-10, mistakes table, learning method, stop-translating, 15-minute routine, SpeakX section, FAQ

Keep the existing hero image, author (Deepank Agarwal), publish date and URL. Update `dateModified`.

If the CMS stores the body as MDX, the `<aside class="pdf-cta">` blocks can be turned into a `<PdfDownloadCta position="top" />` component with the same markup.

## 3. Metadata

From `seo-metadata.json`:

- `<title>`: `100 Daily Use English Sentences with Hindi Meaning PDF | SpeakX`
- `<meta name="description">`: see file (155 chars)
- Canonical: unchanged (non-www https://speakx.ai/… ). Note the site-wide canonical bug: canonicals currently point to `www.speakx.ai`, which 308-redirects to `speakx.ai`; fix site-wide so this page's canonical is the final URL.
- Replace the existing `Article` JSON-LD with `structured-data.jsonld` (BlogPosting + BreadcrumbList). No FAQPage schema is added; the FAQ is written for readers and FAQ rich results are no longer shown for this kind of site.

## 4. Styles and analytics

- Append `download-cta.css` to the blog stylesheet (or the post's CSS module).
- Include `analytics.js` once on the blog template (after GA4 loads). It listens for clicks on `a[data-event]`, so no per-button wiring is needed.
- In GA4, mark `pdf_download` as a key event. Suggested parameters are already sent: `article_slug`, `pdf_filename`, `cta_position`, `page_url`.

## 5. Duplicate hosts

The same article is served on speakx.com, www.speakx.com, speakx.in and www.speakx.in with HTTP 200 (verified 12 Oct 2026). They rely on a cross-domain canonical only. Add 301 redirects from those hosts to `https://speakx.ai` so the PDF and the article have one URL each.

## 6. Verification after publishing

1. `curl -I https://speakx.ai/downloads/100-daily-use-english-sentences-with-hindi-meaning.pdf` → 200, `content-type: application/pdf`, `x-robots-tag: noindex`.
2. Open the article on an Android phone, an iPhone and desktop; tap each of the three CTAs; confirm the PDF opens and the `pdf_download` event appears in GA4 DebugView with `cta_position` set to `top`, `middle`, `end`.
3. Google Search Console → URL Inspection → Request indexing for the article URL.
4. Confirm the sitemap entry's `lastmod` updates and that the PDF URL is not in the sitemap.
