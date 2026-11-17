# SpeakX: English Spelling Rules and Practice (revision package)

Revises the existing post at https://speakx.ai/blog/english-spelling-practice (URL unchanged). Start with `implementation/README-publish.md`.

| Folder | What is in it |
|---|---|
| `article/article-body.html` | Paste this as the post body (H1 included). Image src prefix to update: see README-publish step 6. |
| `article/article-full-page.html` | Complete standalone page (head, metadata, schema, CSS, analytics) for reference or QA. |
| `article/article-shared.html` | Preview copy; PDF and images point at test paths. Not for publishing. |
| `article/article.md` | Markdown copy for review. |
| `images/` | Five images (hero, 10-rules card, notebook photo, practice-sheet preview, app screenshot). Alt text and sizes in `implementation/seo-metadata.json`. |
| `pdf/english-spelling-practice-sheet.pdf` | Free 2-page practice sheet. Host at the article path, noindex, out of the sitemap. |
| `implementation/seo-metadata.json` | Title, meta description, canonical, OG, keyword map, images, inbound and outbound links. |
| `implementation/structured-data.jsonld` | Article + BreadcrumbList + FAQPage. Set dateModified on publish. |
| `implementation/download-cta.css` | Styles for tables, figures, PDF box and app CTA. |
| `implementation/analytics.js` | Click tracking (same script as the 100-sentences posts; skip if already live). |
| `implementation/backlink-plan.md` | Inbound links to add after publishing plus external outreach targets. |
| `research/` | Previous article text and SERP research summary. |

Build scripts (`article/build.py`, `article/build-full-page.py`, `pdf/build-pdf.py`) regenerate everything from the data inside them; they are not needed to publish.
