# Publish: Speech on the Importance of English

URL to create: https://speakx.ai/blog/speech-on-importance-of-english (currently 404)

1. Create the post with slug `speech-on-importance-of-english`. Author: Deepank Agarwal.
2. Paste `article-body.html` as the post body (H1 included). If the CMS adds its own H1 from the title field, remove the `<h1>` line from the file.
3. Set page metadata from `seo-metadata.json`: title tag, meta description, canonical (non-www), robots index/follow, OG title/description.
4. Add `structured-data.jsonld` as the page's JSON-LD (Article + BreadcrumbList + FAQPage). Set `datePublished` and `dateModified` to the publish time. FAQ text already matches the visible FAQ.
5. Add `article-styles.css` to the blog stylesheet (speech blocks, essay, CTA button). The CTA button must keep white text: the rules use `!important` so the blog's link colour does not override it.
6. Images (see `seo-metadata.json` → images): hero with alt "Student giving a speech on the importance of English"; optional 3-reasons graphic; optional SpeakX practice screenshot; optional 60-second video of the 1-minute speech.
7. After publishing: add the inbound links listed in `backlink-plan.md` section A (six existing posts + blog index), request indexing in Search Console, and confirm the URL is in the sitemap.

`article-full-page.html` is a standalone preview of the finished page (open in a browser). `article.md` is the same copy in Markdown. `brief.txt` is the original content brief.
