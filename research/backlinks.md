# SpeakX backlink acquisition - strategy write-up

Checked: 2026-10-12 (IST). Companion files: `backlinks.json` (81 opportunities, strict JSON) and `backlinks.csv` (same rows, 14 columns).
Scope rules followed: SHARED-CONTEXT.md (audience rule, never-claim list, evidence standard). Excluded by policy: paid links, PBNs, mass directory spam, reciprocal schemes, fake reviews, paid-wire listicles (VMPL/PNN), competitor-owned roundups.

## 0. Headline findings

1. **Zero editorial links today.** Of 28 editorial pages that mention SpeakX and could be fetched (HTTP 200), none hyperlinks speakx.ai. Links exist only on investor portfolio pages (Elevation, WestBridge, India Quotient), startupintros.com and the Google Play developer page. The 1,334 referring domains in Semrush are therefore mostly company-profile databases, as the plan says. Unlinked-mention recovery is the cheapest, most legitimate lever available.
2. **Two owned-property fixes outrank any outreach.** (a) `speakx.in` and `speakx.com` serve full duplicate copies of the site (HTTP 200, canonical to www.speakx.ai, which 308-redirects to speakx.ai); they should 301 to speakx.ai before the /vs hub launches. (b) `ivypods.com` (the legal entity's site, the name users see on billing) mentions SpeakX but does not link to it.
3. **Accuracy problems travel with the links.** Inc42 Datalabs, CB Insights, Graphiq and the Crunchbase snippet still describe SpeakX as a kids' product via "ivykids" (audience-rule conflict); Capterra's snippet shows "Rs 19/user/month, no free trial"; Elevation Capital's podcast page calls the founder "Arpit Agarwal". Profile claims and correction requests should be bundled with link requests.
4. **Competitor gap.** EdTechReview's "Best English Speaking Apps in 2026" (2026-08-10) lists ELSA, Duolingo, Cambly, Speak, Preply and EngVarta but no India-made AI speaking app; the same publication covered SpeakX's 2024 study without a link. One email, two asks.
5. **Award organiser pages are missing.** None of the seven award claims could be verified on an organiser-owned page; they remain partially-verified (company site + PR). Treat them as open questions, not link targets, until URLs are found.

Counts: 81 opportunities - P1 14, P2 16, P3 30, P4 21. By type: unlinked-mention 26, directory-profile 18, roundup-inclusion 6, old-domain-link 5, podcast 5, existing-backlink-to-keep 5, guest-post 4, award-organiser 4, misattribution 2, founder-interview 2, research-citation 2, broken-link 1, investor-portfolio 1. Link status: mentions-no-link 35, no-mention 38, links-to-speakx.ai 6, broken 2.

## 1. Unlinked-brand-mention recovery strategy

### 1.1 Find
- Weekly queries (Google + news tab, 7-day filter): `"SpeakX"`, `"SpeakX.ai"`, `"Arpit Mittal" SpeakX`, `"Ivypods"`, `"Muh Khol" English Bol`, `Dhoni SpeakX`. Add Hindi/vernacular variants (स्पीकएक्स) once the regional campaigns run.
- Set Google Alerts and a Semrush/Ahrefs "brand mentions" (unlinked) report for `speakx`, `speakx.ai`, `ivypods`.
- Watch the three sources that generated most 2025-26 mentions: funding news (Oct 2025), the Dhoni announcement (1-7 Sept 2026) and founder interviews. Every future press release must include a hyperlinked `https://speakx.ai` in the body so wire copies carry it (webnewswire copy did not).
- Check syndication tails (Dailyhunt, Whalesbook language mirrors) only for tracking; do not outreach to them.

### 1.2 Verify (what this audit did; repeat it)
- Fetch the page HTML (curl with a normal desktop UA), save it, and grep for `href=` containing `speakx.ai` (double and single quotes). Count brand mentions, founder mentions, old-brand strings and Play/App Store links. A page is "mentions-no-link" only if the saved HTML has zero speakx.ai hrefs.
- Cross-check with a second reader (WebFetch or a browser) for JS-rendered sites. 15 sites block automated fetches (403): yourstory, bwdisrupt, crunchbase, tracxn, capterra, alternativeto, theresanaiforthat, producthunt, myprivatetutor, seedtable, peerlist, pitchbook, dealroom, arabfounders. Verify these in a browser before contacting anyone.
- Record date published, author, whether it is staff editorial, contributed, branded/sponsored or wire copy. Only staff editorial and contributed pieces go to P1/P2.
- Note factual errors (founder name, kids positioning, pricing) so the request can lead with reader value.

### 1.3 Contact
- One email per publication, not per article (Inc42: 4 pages; Entrackr: 2; BW Disrupt: 3; YourStory: 2 + author profile).
- Address the journalist who wrote the piece when a byline exists (StartupTalky: Muskaan Kapoor; Indian Startup Times: Arushi Agarwal; Inc42 feature: Ankush Das; EdTechReview study: Shalini Pathak). Otherwise the desk address (Inc42: editor@inc42.com from the plan).
- Ask for exactly one thing: hyperlink the first "SpeakX" to `https://speakx.ai`. Offer something editorial in return (updated figure, fresh quote, campaign asset, embargoed data). Never offer payment, reciprocal links or reviews.
- Prefer brand/URL anchors ("SpeakX", "speakx.ai", "SpeakX.ai"). Do not request keyword anchors; it reads as SEO and fails. The five anchors reserved in the existing plan were not supplied to this audit - the content team must cross-check `suggested_anchor` before sending.
- Timing: within 30 days of publication the hit rate is highest (Indian Startup Times, 2026-09-21; the Dhoni batch, 1-7 Sept 2026). Older pieces (Oct 2025 funding) go in the same email as a secondary ask.
- Two follow-ups max (day 7, day 21), then mark dropped.

### 1.4 Track
- Log every row in `/workspace/backlinks/tracker.csv` (schema in section 4) with status `to-check` on discovery, `vetted` after HTML verification, then the outreach states.
- Re-crawl every `accepted` URL weekly until `link-verified` (href present, resolves 200, not nofollow/sponsored/UGC, points to the intended target).
- Monthly: compare Semrush referring-domain list against the tracker to catch links placed without telling us and links to speakx.in/.com that should be redirected.

## 2. Outreach drafts - top 5 P1 opportunities

All five are **DRAFT - NOT SENT - NEEDS APPROVAL** (comms lead + founder sign-off). Each is under 150 words. Replace bracketed items; keep all claims inside the verified-facts list.

### Draft 1 - Inc42 (bundle: Dhoni exclusive, pivot feature, funding story, Datalabs profile) - DRAFT, NOT SENT, needs approval
To: editor@inc42.com
Subject: Small fix on your SpeakX coverage + Datalabs profile update

Hi [Editor],

Thank you for the Dhoni exclusive (1 Sept) and Ankush's pivot feature in January - both were widely shared by our learners.

Two quick requests:
1. Could the first "SpeakX" in those two pieces (and the Oct-2025 funding update) link to https://speakx.ai? Readers currently land on the Inc42 profile only.
2. The Datalabs profile still describes us as "interactive learning experiences for children through ivykids". SpeakX today is an AI English-speaking app for students, job-seekers and working professionals, with explanations in seven Indian languages. Happy to send a 40-word boilerplate.

Separately, Arpit would like to contribute a column on why spoken English is a jobs problem rather than a school subject - I will send the .docx per your guidelines.

Best,
[Name], SpeakX

### Draft 2 - Entrepreneur India (textual "SpeakX.ai" with no link) - DRAFT, NOT SENT, needs approval
To: [Entrepreneur India news desk]
Subject: Hyperlink request - "SpeakX.ai Raises USD 16 Mn" (15 Oct 2025)

Hi [Name],

Thanks again for covering our Pre-Series B last October. One small thing: the article writes "SpeakX.ai" five times as plain text but none of them links. Could the first mention point to https://speakx.ai so readers can reach the app?

If useful for a follow-up, Arpit Mittal can share how the regional-language rollout (Hindi, Marathi, Bengali, Telugu, Tamil, Kannada, Malayalam explanations) has gone since the raise, and what MS Dhoni's involvement as investor and ambassador has changed for learner trust.

Many thanks,
[Name], SpeakX

### Draft 3 - NITI Aayog Frontier Tech Hub impact story - DRAFT, NOT SENT, needs approval
To: [Frontier Tech Hub programme contact / "Share Your Story" form]
Subject: Thank you for the SpeakX impact story - one addition

Dear [Name],

Thank you for featuring SpeakX on the Frontier Tech Hub ("AI-Native Platform Enables 10 Million Indians to Learn Spoken English"). We would be grateful if the story could link the name "SpeakX" to https://speakx.ai and to our Google Play listing, so citizens who read it can find the app directly.

We can also supply updated, verifiable figures for the page (10 million+ downloads on Google Play; seven Indian-language explanations; about 15 minutes of practice a day) and a short learner story from a Tier-2 city, if helpful.

With thanks,
[Name], Ivypods Technology (SpeakX)

### Draft 4 - Elevation Capital podcast page (name correction + link) - DRAFT, NOT SENT, needs approval
To: [Manish Advani / Elevation comms]
Subject: Two small edits on the SpeakX podcast page

Hi Manish,

Thanks again for the conversation - we still get listener messages about it. Two small fixes on https://www.elevationcapital.com/perspectives/speakx-building-india-largest-ai-language-learning-app:

1. The body copy says "Arpit Agarwal" in two places; it should be Arpit Mittal.
2. Could the episode description link to https://speakx.ai? The portfolio page does, but the episode page does not.

If the episode is on Spotify or YouTube, please send the links - we would like to share them with Inc42 and YourStory, who are covering the Dhoni partnership.

Best,
[Name], SpeakX

### Draft 5 - EdTechReview (roundup inclusion + 2024 study link) - DRAFT, NOT SENT, needs approval
To: [EdTechReview editorial]
Subject: An India-made option for your "Best English Speaking Apps in 2026" list

Hi [Editor],

Your August roundup is a useful read, but every app listed is built outside India. SpeakX may be worth adding: learners talk to an AI partner (Sia) on voice calls, get explanations in seven Indian languages, and practise about 15 minutes a day. It is free to start on Google Play (10 million+ downloads; 4.5 stars from about 93K reviews), with Premium at Rs 299/month after a Rs 2 three-day trial (as of today, India).

If you add it, https://speakx.ai is the right link. Could you also link that URL in your 16 Apr 2024 piece on our English-proficiency study? Happy to share fresh study data for a follow-up.

Thanks,
[Name], SpeakX

## 3. Prioritisation rationale

Scoring (applied qualitatively per row; see `priority` and `editorial_relevance`):
- **Authenticity first.** Staff editorial or contributed journalism > investor/government pages > event organiser pages > databases > wire/aggregators. Anything pay-to-play is excluded, not down-ranked.
- **Effort-to-win.** A mention that already exists, a factual error we can help fix, or an existing relationship (interviewer, investor, event organiser) beats a cold pitch. This is why Elevation (misnamed founder), NITI (gov.in story), StartupTalky and Indian Startup Times (recent interviews) are P1 while equally authoritative cold targets are P2/P3.
- **Topical fit with the /vs hub.** Roundups and alternatives directories that carry "best English speaking app / alternative to ELSA, Stimuler" intent (EdTechReview, AlternativeTo) are P1 because they are the pages a /vs reader actually visits. Investor databases are P3/P4 regardless of domain strength: nofollow, low intent.
- **Owned fixes before asks.** `speakx.in/.com` redirects and `ivypods.com` are P1 because they cost one ticket and protect every other link we earn.
- **Freshness.** Pieces under 60 days old (Dhoni batch, Indian Startup Times) are escalated; 2021 Yellow Class articles are P4 and only kept as an audit record (the audience rule forbids promoting the former name).
- **P-levels:** P1 = do this month (14); P2 = next 60 days or needs a manual browser check first (16); P3 = opportunistic / bundle with other contact (30); P4 = track only, no dedicated effort (21).

Top 10 to action first: BL-007 speakx.in/.com 301s; BL-006 ivypods.com link; BL-005 Elevation page fix; BL-009 NITI Frontier Tech; BL-014 StartupTalky; BL-013 Indian Startup Times; BL-010/011/002 Inc42 bundle (plus BL-003 guest column); BL-012 Entrepreneur India; BL-008 EdTechReview roundup + study; BL-001 AlternativeTo self-listing; BL-004 YourStory author route (after browser verification).

## 4. Measurement - `/workspace/backlinks/tracker.csv`

Columns: `id,domain,relevant_page,opportunity_type,priority,target_speakx_url,anchor_requested,contact_name,contact_channel,owner,status,status_date,last_action,next_action_date,follow_ups_sent,link_url_live,rel_attributes,verified_date,notes`

Status values (use exactly): `to-check` -> `vetted` -> `drafting` -> `fact-checked` -> `submitted` -> `follow-up-1` -> `follow-up-2` -> `accepted` -> `live` -> `link-verified`; terminal negatives: `rejected`, `no-response`, `dropped`.

Rules:
- `to-check`: found but HTML not yet verified. `vetted`: HTML/browser check done, row in backlinks.csv complete.
- `drafting` -> `fact-checked`: every claim in the email checked against SHARED-CONTEXT (no "free trial", no Rs 199, no "#1/best", no 14 languages, no 4.6+ rating, no kids positioning). Nothing is `submitted` without founder/comms approval logged in `notes`.
- `follow-up-1` at +7 days, `follow-up-2` at +21 days; after +35 days with no reply -> `no-response`.
- `accepted` = editor agreed in writing; `live` = link visible; `link-verified` = re-crawled: href resolves 200 to the intended speakx.ai URL (not speakx.in/.com), no `nofollow`/`sponsored`/`ugc` unless expected (directories), anchor as agreed.
- Monthly KPIs: new link-verified editorial domains; unlinked mentions found vs recovered (%); median days from `submitted` to `live`; share of referring domains that are editorial vs database; Semrush AS trend (baseline 25, 1,334 RDs on 2026-10-12).
- Seed the tracker from `backlinks.csv` (81 rows): P1 rows start at `vetted` where source_checked shows HTTP 200, and at `to-check` where the page was bot-blocked (403/429).

## 5. Exclusions and parked items (do not pursue)
- Paid-wire listicles: Tribune / Punjab Kesari / LatestLY / Eastern Herald "Top 6 New-Age Edtech Startups in India in 2026" (VMPL).
- Competitor-owned roundups: talkdrill.com, talk-easy.com; EngVarta (parked per plan; monitor its "EngVarta vs SpeakX" page for factual errors only). HelloTalk blog parked per plan.
- LingoBright write-for-us: page sells "a high-quality backlink"; recommend dropping unless a manual review of five recent posts shows genuine editorial standards.
- Syndication copies (Dailyhunt, Whalesbook mirrors), press-release wires (webnewswire, pressrelease.cc), scraped app directories (mwm.ai, updatestar).

## 6. Open questions
See `open_questions` in backlinks.json (12 items), notably: reserved anchor list; volume of referring domains pointing at speakx.in/.com; /vs hub still 404; organiser URLs for all seven awards; founder's alma mater; 15 bot-blocked pages needing a browser check; second search pass (Startup India, F6S, G2/GetApp, StartupBlink, Hindi roundups, YouTube creators, ET/Mint/BS coverage) once search budget is available.
