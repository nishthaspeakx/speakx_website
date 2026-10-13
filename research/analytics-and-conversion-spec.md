# Analytics and conversion tracking specification: SpeakX comparison hub

Prepared 12 Oct 2026. Implemented in `speakx-vs/src/lib/analytics.ts`, `TrackedLink.tsx`, `CtaButton.tsx`, `PageView.tsx`, `FaqSection.tsx`, `StickyCta.tsx`.

## 1. Destinations and identifiers (verified from speakx.ai, 12 Oct 2026)

| Item | Value | Source |
|---|---|---|
| Install / onboarding link (all CTAs) | `https://speakx.sng.link/Ed28z/npfq/4alj` (Singular smart link; Android → Google Play with `referrer=singular_click_id`, iOS → App Store) | speakx.ai homepage, /about and comparison article CTAs |
| Google Play | `https://play.google.com/store/apps/details?id=yellowclass.kids.live` | speakx.ai store badge |
| App Store | `https://apps.apple.com/in/app/speakx-english-speaking-app/id6756059415` | speakx.ai store badge |
| GA4 | `G-Z36ZMHENFK` (found in speakx.ai bundle; events there are prefixed `b2c_`) | JS bundle |
| GTM | none on speakx.ai today; the hub supports `NEXT_PUBLIC_GTM_ID` if one is introduced | audit |
| Meta Pixel (b2c) | `1191395792230165` (not loaded by the hub; add via GTM or the site's shared layout on integration) | homepage HTML |

The hub appends `utm_source=speakx_vs`, `utm_medium=<location>`, `utm_campaign=<page_slug>` to the Singular link **without overwriting existing parameters**, so Singular attribution and UTM reporting both work. Nothing in the hub treats a store redirect as an install.

## 2. Event taxonomy (window.dataLayer + gtag)

| Event | When | Parameters |
|---|---|---|
| `vs_page_view` | Every hub, comparison and press page load | `page_slug`, `competitor` |
| `competitor_card_click` | Card on /vs or sibling link on a comparison page | `page_slug`, `competitor`, `destination` |
| `internal_link_click` | Goal links, related guides, Premium links | `page_slug`, `link_text`, `destination` |
| `press_article_click` | Any press card or press link | `page_slug`, `destination`, `link_text` (publication) |
| `cta_click` | Any CTA button | `page_slug`, `competitor`, `cta_label`, `cta_location` (`header`, `hero`, `final`, `sticky_mobile`), `destination` |
| `app_store_redirect` | Fired in addition to `cta_click` when the destination is the Singular link, Play or App Store | `store` (`google_play`, `app_store`, `install_link`), `destination` |
| `faq_expand` | A FAQ `<details>` opens | `page_slug`, `question` |

Naming is snake_case and stable. On integration into speakx.ai, map these to the site's existing `b2c_` GA4 convention by prefixing in GTM or in `analytics.ts`.

## 3. Funnel definitions

1. **Comparison visitor** = `vs_page_view`.
2. **Engaged** = any of `competitor_card_click`, `faq_expand`, `internal_link_click`, scroll past the matrix (add a `matrix_scroll` intersection observer if needed; event name reserved).
3. **CTA click** = `cta_click`.
4. **Store redirect** = `app_store_redirect` (not an install).
5. **Install** = Singular install event attributed to `singular_click_id` from the smart link, joined on the UTM campaign (`page_slug`).
6. **Trial start** = in-app purchase event for the ₹2 three-day trial (Singular/Firebase event, when linkage exists).
7. **Paid** = first ₹299 renewal, where attributable.

Report CTA click rate = `cta_click` / `vs_page_view` per `page_slug`, `cta_location`, device and country. Report install rate only from Singular, never from `app_store_redirect`.

## 4. Baselines

No baseline exists yet: `/vs` and `/press` returned 404 on speakx.ai on 12 Oct 2026 and the comparison article had no GSC rows. Record the first 30 days after launch as the baseline for each metric before setting targets.

## 5. Recommended A/B experiments (run one at a time, 2 weeks minimum, by `page_slug`)

| # | Hypothesis | Variant |
|---|---|---|
| 1 | A goal-led hero headline ("Which app gets you speaking English?") beats the brand-led H1 for CTA clicks | Headline copy |
| 2 | "Practise English with Sia" outperforms "Start Speaking with SpeakX" as the hero CTA label | `cta_label` |
| 3 | Showing the quick comparison matrix above the six cards increases card clicks and time on page | Section order |
| 4 | Trust strip (press + awards) directly under the hero increases CTA click rate on competitor pages | Trust placement |
| 5 | Sticky mobile CTA appearing after the quick answer (rather than 560px) increases mobile store redirects without hurting scroll depth | Sticky trigger |

## 6. Search Console and Bing readiness

- Canonical: every page emits a non-www `https://speakx.ai/...` canonical; sitemap at `/sitemap.xml`; robots at `/robots.txt` referencing it.
- Submit `/sitemap.xml` (or merge the 8 URLs into the production sitemap) in Google Search Console and Bing Webmaster Tools after deployment; verify with URL Inspection that the comparison pages render server-side text.
