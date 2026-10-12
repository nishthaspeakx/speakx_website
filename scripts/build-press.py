"""Builds src/data/press.ts from research/media.json.
Public rules: independent editorial + verified/partially-verified only on the page; sponsored items are kept
but labelled; nothing mentioning the former brand or a kids positioning is published (audience rule)."""
import json, re, pathlib
ROOT = pathlib.Path(__file__).resolve().parents[1]
m = json.load(open(ROOT.parent / "research" / "media.json"))
BAN = re.compile(r"yellow class|ivykids|kids|children", re.I)
PUB_CLEAN = {
    "Times of India - Education Times": "Times of India (Education Times)",
}
def clean_pub(p):
    p = PUB_CLEAN.get(p, p)
    p = re.sub(r"\s*\(.*?\)\s*$", "", p) if p.startswith("ET Entrepreneur") or p.startswith("ET Education") else p
    return p.strip()
def norm_date(d):
    if not d or d == "n.d.": return None
    d = str(d).strip()
    if re.fullmatch(r"\d{4}-\d{2}-\d{2}", d): return d
    if re.fullmatch(r"\d{4}-\d{2}", d): return d
    if re.fullmatch(r"\d{4}", d): return d
    return None
LT = {"independent-editorial":"independent-editorial","sponsored-or-branded":"sponsored-or-branded","company-authored-blog":"company-authored-blog","award-organiser-listing":"award-organiser-listing","investor-or-partner-listing":"investor-or-partner-listing","directory-listing":"directory-listing","video-or-podcast":"video-or-podcast"}
VER = {"verified":"verified","partially-verified":"partially-verified"}
# Summaries rewritten where the source's own wording mentions the former brand (never used in public copy) or
# repeats company-stated subscriber / revenue metrics that the content rules do not allow on the site.
SUMMARY_OVERRIDE = {
    "https://inc42.com/startups/a-timely-pivot-how-genai-allowed-speakx-to-find-a-new-edtech-mission/":
        "Long-form Inc42 profile of SpeakX's pivot to AI spoken English, its Premium pricing of INR 299 a month and how a 20-person team built a profitable product, as reported to Inc42.",
    "https://www.moneycontrol.com/technology/speakx-app-wants-to-make-learning-english-more-useful-than-talking-to-chatgpt-article-14028161.html":
        "Moneycontrol on SpeakX crossing one crore learners, with around half of users in Tier-2 and Tier-3 cities and a focus on first-generation English learners.",
    "https://inc42.com/buzz/exclusive-ms-dhoni-joins-edtech-startup-speakxs-cap-table/":
        "Inc42 exclusive: MS Dhoni joined SpeakX's cap table on undisclosed terms as part of a larger round planned for next year. Inc42 also reported FY26 revenue of INR 45 crore with EBITDA profitability, as stated by the company.",
    "https://entrepreneur.economictimes.indiatimes.com/news/funding/ms-dhoni-backs-ai-based-english-learning-platform-speakx/133677517":
        "ET Entrepreneur reports MS Dhoni's undisclosed investment in SpeakX and the company's statement that it has crossed one crore learners.",
    "https://india.entrepreneur.com/news-and-trends/speakxai-raises-usd-16-mn-to-strengthen-ai-powered-english/498354":
        "Entrepreneur India on SpeakX's USD 16 million round led by WestBridge Capital, with Elevation Capital and Goodwater Capital participating, and the company's statement that it has been EBITDA-positive since April 2025.",
    "https://www.outlookbusiness.com/corporate/speakxai-raises-16-mn-from-westbridge-capital-eyes-regional-language-expansion-amid-profitable-growth":
        "Outlook Business on the WestBridge-led round and SpeakX's plan to expand regional-language support while staying profitable, per the company.",
    "https://www.tice.news/know-this/from-small-town-dreams-to-global-classrooms-how-speakx-is-rewriting-indias-edtech-story-with-ai-11802352":
        "TICE News profile of SpeakX's founder story, its INR 299 a month Premium plan and its investors WestBridge, Elevation, Goodwater and India Quotient.",
    "https://indianstartupnews.com/funding/ai-powered-english-learning-startup-speakxai-raises-rs-142-crore-from-westbridge-others-10560120":
        "Indian Startup News reports the INR 142 crore (USD 16 million) round led by WestBridge Capital and notes that the platform runs on Google Gemini.",
    "https://indianstartupnews.com/funding/indian-cricket-icon-ms-dhoni-invests-in-speakx-says-learning-english-is-not-about-learning-another-subject-12483904":
        "Coverage of MS Dhoni's undisclosed investment in SpeakX, quoting Dhoni on learning English as a life skill, and the company's one crore learners figure.",
    "https://startuptalky.com/arpit-mittal-speakx-shares-insights/":
        "Q&A with founder Arpit Mittal on building SpeakX, its 1 crore+ Google Play downloads and selection for the Google for Startups Accelerator (Apps), as of April 2025.",
    "https://www.indianstartuptimes.com/interviews/building-an-ai-powered-platform-to-help-100-million-indians-find-their-voice-in-english/":
        "Founder interview on SpeakX's goal of helping 100 million Indians speak English, with the company reporting that paid users average about 14 minutes of daily speaking practice.",
    "https://www.elevationcapital.com/perspectives/speakx-building-india-largest-ai-language-learning-app":
        "Investor conversation with Arpit Mittal on growing up in Haridwar, the gap between understanding and speaking English, and how SpeakX's 20-person team builds the product.",
}
# URLs that returned 403/404 to our link checker on 2026-10-12 (bot-blocked or moved): kept in the research register, not rendered.
EXCLUDE_URLS = {
    "https://www.bwdisrupt.com/article/ms-dhoni-invests-in-ai-powered-english-speaking-app-speakx-621764",
    "https://www.bwdisrupt.com/article/speakx-ai-raises-16-mn-to-expand-ai-english-platform-575415",
}
items = []
seen = set()
for it in m["items"]:
    place = it.get("recommended_placement")
    if place not in ("as-seen-in", "in-the-news", "founder"): continue
    lt = LT.get(it.get("link_type")); ver = VER.get(it.get("verification_status"))
    if not lt or not ver: continue
    if it.get("is_syndication_of"): continue
    url = it["url"]
    if url in EXCLUDE_URLS: continue
    claim = SUMMARY_OVERRIDE.get(url, it.get("key_verified_claim") or "")
    if BAN.search((it.get("article_title") or "") + " " + claim): continue
    if url in seen: continue
    seen.add(url)
    title = re.sub(r"\s*\(page title:.*$", "", it["article_title"]).strip()
    items.append({
        "publication": clean_pub(it["publication"]),
        "title": title,
        "url": url,
        "author": (it.get("author") or "").replace("n/a", "") or None,
        "date": norm_date(it.get("date")),
        "category": it.get("category", ""),
        "summary": claim[:260],
        "linkType": lt,
        "verification": ver,
        "placement": place,
    })
    items[-1] = {k: v for k, v in items[-1].items() if v is not None}
items.sort(key=lambda x: x.get("date") or "", reverse=True)
ts = "// GENERATED from research/media.json by scripts/build-press.py. Edit the JSON and re-run.\n"
ts += "// Only independent, verified items are rendered; each keeps its link type so sponsored content is never shown as editorial.\n"
ts += 'import type { PressItem } from "@/lib/types";\n\nexport const pressItems: PressItem[] = ' + json.dumps(items, ensure_ascii=False, indent=2) + ";\n"
(ROOT / "src/data/press.ts").write_text(ts)
print("press items:", len(items))
for i in items: print(" ", i["date"], "|", i["placement"], "|", i["linkType"], "|", i["publication"], "|", i["title"][:60])
