"""Transforms research/competitors.json into src/data/products.ts and downloads official logos.
Run from the speakx-vs folder: python3 scripts/build-products.py
"""
import json, re, os, urllib.request, pathlib
ROOT = pathlib.Path(__file__).resolve().parents[1]
SRC = ROOT.parent / "research" / "competitors.json"
OUT = ROOT / "src" / "data" / "products.ts"
LOGOS = ROOT / "public" / "logos"
d = json.load(open(SRC))
CHECKED = d["checked"]

KEYMAP = {"tamil_telugu_regional_support": "regional_language_support"}
DIMS = ["suitability_for_indian_learners","support_for_absolute_beginners","support_for_indian_languages","hindi_guidance","regional_language_support","ai_conversation_practice","structured_course_progression","personalised_learning_plans","initial_proficiency_assessment","speaking_practice","real_life_roleplays","job_interview_english","workplace_english","everyday_english","family_social_conversations","education_student_use_cases","travel_english","pronunciation_practice","grammar_guidance","vocabulary_development","ai_feedback","progress_tracking","gamification","free_tier","android","ios"]
VALID = {"yes","partial","no","not-verified"}
SLUG = {"elsa_speak": "elsa-speak"}
LOGO_FILE = {"speakx": "speakx-mark-512.png"}

def verdict(v):
    v = (v or "").strip().lower()
    if v in VALID: return v
    if v.startswith("yes"): return "yes"
    if v.startswith("partial"): return "partial"
    if v.startswith("no") and not v.startswith("not"): return "no"
    return "not-verified"

def hexcolor(s, default="#4a4a5b"):
    m = re.search(r"#[0-9a-fA-F]{6}", s or "")
    return m.group(0) if m else default

def text(v):
    if isinstance(v, dict): return v.get("value") or v.get("evidence") or ""
    return v or ""

# Short, verified pricing labels for tables (India storefronts, checked 2026-10-12). Full evidence stays in details[].
PRICING_SUMMARY = {
    "speakx": "Free to start; Premium ₹2 for a 3-day trial, then ₹299/month (speakx.ai, India)",
    "supernova": "Free to start; no public price list. App Store India in-app purchases ₹99–₹1,999",
    "mysivi": "Free features; App Store India: ₹999/month, ₹1,999/3 months, ₹4,999/year",
    "duolingo": "Free with ads; Super Duolingo price not published for India (Play in-app purchases ₹19–₹19,900)",
    "stimuler": "Free features; no public price page. App Store India monthly ₹199–₹399, annual ₹699–₹1,999",
    "elsa-speak": "Free lessons + 7-day Premium trial; App Store India ₹499/month, ₹3,449/year",
    "speak": "7-day free trial, then subscription; App Store India ₹1,949–₹2,299/month, ₹4,999–₹22,900/year",
}
# Card taglines rewritten where the source wording carries a superlative (we describe, we do not rank).
TAGLINE_OVERRIDE = {
    "duolingo": "Free, gamified lessons in 40+ languages; English courses from Hindi, Bengali, Tamil and Telugu. 500M+ Play downloads.",
}
products = {}
for key, p in d["products"].items():
    slug = SLUG.get(key, key)
    dims = {}
    for k in DIMS:
        srck = next((s for s, t in KEYMAP.items() if t == k), k)
        dv = p["dimensions"].get(srck, {})
        dims[k] = {"value": verdict(dv.get("value")), "note": dv.get("evidence", ""), "source": dv.get("source", "")}
    sub = p["dimensions"].get("subscription_pricing", {})
    free = p["dimensions"].get("free_tier", {})
    pricing_status = "yes" if slug == "speakx" else verdict(sub.get("verification") or ("partial" if "not-verified" not in (sub.get("value") or "").lower() else "not-verified"))
    pl = p.get("play_listing") or {}
    asl = p.get("app_store_listing") or {}
    EXT = {"elsa-speak": "jpg"}  # Speak logo replaced by its Google Play icon (speak.png), downloaded separately
    logo_name = LOGO_FILE.get(slug, f"{slug}.{EXT.get(slug, 'png')}")
    if slug != "speakx" and p.get("logo_url"):
        dest = LOGOS / logo_name
        if not dest.exists() and slug != "speak":
            import subprocess
            subprocess.run(["curl", "-sSL", "-A", "Mozilla/5.0", "-o", str(dest), p["logo_url"]], check=True)
            print("downloaded", logo_name, dest.stat().st_size, "bytes")
    name = p["official_name"].split(" (")[0].split(":")[0].strip()
    NAMES = {"speakx": "SpeakX", "supernova": "Supernova", "mysivi": "MySivi", "duolingo": "Duolingo", "stimuler": "Stimuler", "elsa-speak": "ELSA Speak", "speak": "Speak"}
    name = NAMES.get(slug, name)
    products[slug] = {
        "slug": slug, "name": name, "company": p.get("company", ""), "country": p.get("hq_country", ""),
        "website": p.get("official_website", ""), "logo": f"/logos/{logo_name}", "logoAlt": f"{name} logo",
        "brandColor": {"speakx": "#ff4d00", "mysivi": "#0e9bd8", "elsa-speak": "#1d9bf0", "speak": "#2563eb"}.get(slug) or hexcolor(p.get("brand_color_hex"), "#4a4a5b"),
        "tagline": TAGLINE_OVERRIDE.get(slug, p.get("one_line_card_description", "")), "description": p.get("one_line_official_description", ""),
        "founded": p.get("founded_year", ""),
        "primaryObjective": text(p["dimensions"].get("primary_learning_objective")),
        "targetLearner": text(p["dimensions"].get("target_learner")),
        "teachingMethod": p.get("teaching_method", ""),
        "languagesTaught": text(p["dimensions"].get("languages_taught")),
        "interfaceLanguages": text(p["dimensions"].get("interface_languages")),
        "humanOrAi": text(p["dimensions"].get("human_tutor_or_ai_only")),
        "play": {"rating": pl.get("rating", ""), "reviews": pl.get("review_count", ""), "downloads": pl.get("downloads_tier", ""), "url": p.get("play_url", ""), "checked": pl.get("checked", CHECKED)} if pl else None,
        "appStore": {"rating": asl.get("rating", ""), "reviews": asl.get("review_count", ""), "url": p.get("app_store_url", ""), "checked": asl.get("checked", CHECKED)} if asl else None,
        "pricing": {"summary": PRICING_SUMMARY.get(slug, "Not verified"), "details": [x for x in [text(free), sub.get("evidence", "")] if x], "region": sub.get("region", "India"), "checked": CHECKED, "status": pricing_status if pricing_status in VALID else "partial", "source": sub.get("source", "")},
        "dimensions": dims,
        "strengths": p.get("key_strengths", []), "limitations": p.get("meaningful_limitations", []),
        "bestFit": p.get("best_fit_learner_profile", ""),
        "sources": [{"label": re.sub(r"^https?://(www\.)?", "", u).split("/")[0] + ("/" + "/".join(u.split("/")[3:])[:40] if len(u.split("/")) > 3 else ""), "url": u, "checked": CHECKED} for u in p.get("sources_checked", [])],
    }
    for k in ("play", "appStore"):
        if products[slug][k] is None: del products[slug][k]

order = ["supernova", "mysivi", "duolingo", "stimuler", "elsa-speak", "speak"]
ts = "// GENERATED from research/competitors.json by scripts/build-products.py. Edit the JSON and re-run.\n"
ts += "// Every dimension carries its evidence note and source URL; values are yes | partial | no | not-verified.\n"
ts += 'import type { Product } from "@/lib/types";\n\n'
ts += "export const products: Record<string, Product> = " + json.dumps(products, ensure_ascii=False, indent=2) + " as Record<string, Product>;\n\n"
ts += "export const speakx: Product = products.speakx;\n"
ts += "export const competitorOrder = " + json.dumps(order) + " as const;\n"
OUT.write_text(ts)
print("wrote", OUT, "products:", list(products))
for s, p in products.items():
    print(s, p["brandColor"], p["pricing"]["summary"][:90], "|", p["pricing"]["status"])
