# Measurement plan: 28 days after publishing

## Baseline (capture before publishing)
From Google Search Console, last 28 days, page = the article URL:
- Clicks, impressions, CTR, average position (page total)
- The same four metrics for each query in the tracking set below
- GA4: sessions and engaged sessions on the article; clicks to the SpeakX app link (`cta_click`)
Known baseline so far: query "100 daily use english sentences with hindi meaning pdf" first appeared in the 26 Oct export at average position 1 with 2 clicks / 16 impressions (tiny sample; do not treat position 1 as stable).

## Query tracking set
daily use english sentences pdf · 100 daily use english sentences with hindi meaning pdf · 100 daily use english sentences · daily use english sentences with hindi meaning · daily use english sentences pdf free download · daily use english sentences in english and hindi · 100 english sentences for daily use · simple english sentences for daily use · daily spoken english sentences · english speaking sentences with hindi meaning · common english sentences for beginners · daily conversation english sentences · english sentences for daily use at home · english sentences for office use · daily use english sentences for beginners

## Metrics, in priority order
1. Clicks and impressions for PDF-related queries (contains "pdf")
2. Organic CTR for the page (title change should move this first)
3. Average position for the tracking set (expect noise for 2–3 weeks after a title change)
4. `pdf_download` events, total and by `cta_position` (top / middle / end); download rate = events ÷ article sessions
5. Organic sessions to the article
6. Engagement: scroll depth to sentence 50 and 100 (add GA4 scroll milestones if not present), average engagement time
7. `cta_click` to the SpeakX install link from the article, and installs attributed via the Singular link's UTM (`utm_campaign=100-daily-use-sentences`)

## Checkpoints
- Day 3: PDF URL indexed? It should NOT be (noindex). Article re-crawled (GSC "last crawl")?
- Day 7: first look at impressions for "pdf" queries and download rate by CTA position; fix any CTA with near-zero clicks.
- Day 14: compare CTR and position against baseline; check for cannibalisation (the PDF or another SpeakX page appearing for the tracking queries).
- Day 28: full before/after table. Attribute changes carefully: a title change, the PDF and normal seasonality all land together, so compare against the page's own prior 28 days and against the rest of the blog as a control.

## What success looks like at day 28 (directional, not guaranteed)
- Impressions for "pdf" queries up, with the article (not the PDF) as the ranking URL
- Page CTR up versus baseline
- Download rate of 10–20% of article sessions, with the top CTA taking most downloads
- No loss of clicks on the queries the page already ranked for ("simple english sentences for daily use" cluster)
