# Publish: How to Learn English Fast

URL to create: https://speakx.ai/blog/how-to-learn-english-fast (currently 404)

1. Create the post with slug `how-to-learn-english-fast`. Author: Deepank Agarwal (author page /blog/author/deepank-agarwal is live).
2. Paste `article-body.html` as the body (H1 included; drop the `<h1>` line if the CMS renders the title field as H1).
3. Metadata from `seo-metadata.json`: title tag, meta description, canonical (non-www), robots index/follow, OG title/description. Add a visible "Updated: <date>" line and the author bio.
4. Add `structured-data.jsonld` as the page JSON-LD (Article + BreadcrumbList + HowTo + FAQPage). Set `datePublished` and `dateModified`. FAQ and HowTo text already match the page.
5. Add `article-styles.css` to the blog stylesheet (tables, "Do this today" callouts, CTA button with forced white text).
6. Images: see `seo-metadata.json` → images (hero, 30-day plan graphic, 10-steps checklist; adults only).
7. Deferred link: when /blog/ai-se-english-kaise-sikhe goes live, add under Step 8: "Prefer reading in Hindi? → AI se English kaise sikhe". Do not add before (404 today). Do not add hreflang.
8. After publishing: add the inbound links in `seo-metadata.json` → internal_links_in, request indexing in Search Console, confirm the sitemap entry.

`article-full-page.html` is a standalone preview. `article.md` is the copy in Markdown. `brief.txt` is the original brief.
