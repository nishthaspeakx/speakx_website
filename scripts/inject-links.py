"""Adds in-copy links to speakx.ai pages and blog posts inside the comparison copy.
Each rule links the FIRST natural occurrence of a phrase inside SpeakX-centred fields only,
once per page, so anchors stay varied and no URL is over-linked. Re-runnable (skips already-linked text)."""
import re, pathlib
ROOT = pathlib.Path(__file__).resolve().parents[1]
B = "https://speakx.ai/blog/"
RULES = [  # (regex on the phrase, url, fields in which it may be applied)
    (r"\bSia\b", "https://speakx.ai/", ["howSpeakXWorks", "intro.speakx", "quickAnswer"]),
    (r"₹299(?: a month|/month| per month)?", "https://speakx.ai/premium", ["pricing.speakx", "howSpeakXWorks", "uxAndFeedback", "faqs"]),
    (r"\bjob interviews?\b", B + "interview-questions-answers-english-freshers", ["howSpeakXWorks", "keyDifferences", "speakxBetterFor", "intro.speakx"]),
    (r"\bparent-teacher meetings?\b", B + "how-to-speak-english-fluently-in-parent-teacher-meetings-a-teachers-5-minute-daily-method", ["howSpeakXWorks", "keyDifferences", "speakxBetterFor", "intro.speakx"]),
    (r"\bpronunciation\b", B + "english-pronunciation-difficulty", ["howSpeakXWorks", "uxAndFeedback", "speakxBetterFor"]),
    (r"\b(?:about |around )?15 minutes(?: a day)?\b", B + "practice-spoken-english-alone-at-home", ["howSpeakXWorks", "intro.speakx", "speakxBetterFor", "keyDifferences"]),
    (r"\bfluency\b", B + "english-speaking-fluency", ["uxAndFeedback", "howSpeakXWorks", "speakxBetterFor"]),
    (r"\bHindi\b", B + "100-simple-english-sentences-for-daily-use-with-hindi-meaning", ["howSpeakXWorks", "intro.speakx"]),
    (r"\bPre-A1\b", B + "unlock-confident-english-speaking-your-guide-to-daily-practice-and-learning-the-basics", ["howSpeakXWorks", "speakxBetterFor", "keyDifferences"]),
    (r"\bIvypods Technology\b", "https://speakx.ai/about", ["quickAnswer", "intro.speakx", "faqs"]),
    (r"\broleplays?\b", B + "master-real-life-english-your-guide-to-confident-daily-conversation", ["howSpeakXWorks", "speakxBetterFor", "keyDifferences"]),
    (r"\bgrammar\b", B + "english-grammar-tenses", ["howSpeakXWorks", "uxAndFeedback"]),
    (r"\bGoogle Play\b", "https://play.google.com/store/apps/details?id=yellowclass.kids.live", ["uxAndFeedback", "intro.speakx", "faqs"]),
    (r"\bworking professionals?\b", B + "english-interview-questions-and-answers-for-corporate-professionals-a-speaking-confidence-guide", ["speakxBetterFor", "keyDifferences", "faqs"]),
]
FIELD_RE = lambda name: re.compile(r"\n  " + re.escape(name) + r":\s")
TOP_FIELD = re.compile(r"\n  [a-zA-Z]+:\s")

def field_span(src, name):
    """Return (start, end) of a top-level field's value, or a nested intro.speakx string."""
    if name == "intro.speakx":
        m = re.search(r"\n  intro:\s*\{", src)
        if not m: return None
        sub = re.search(r"speakx:\s*\"", src[m.end():])
        if not sub: return None
        start = m.end() + sub.end()
        end = src.find('",', start)
        return (start, end)
    m = FIELD_RE(name).search(src)
    if not m: return None
    nxt = TOP_FIELD.search(src, m.end())
    return (m.end(), nxt.start() if nxt else len(src))

def already_linked(seg, pos):
    # Inspect only the current line (the array's own "[" would otherwise count as an open link).
    before = seg[seg.rfind("\n", 0, pos) + 1:pos]
    return before.count("[") > before.count("]") or before.rfind("](") > before.rfind(")")

for f in sorted((ROOT / "src/data/comparisons").glob("speakx-vs-*.ts")):
    src = f.read_text()
    applied = []
    for pattern, url, fields in RULES:
        if f"]({url})" in src: continue  # one in-copy link per URL per page
        rx = re.compile(pattern)
        done = False
        for name in fields:
            span = field_span(src, name)
            if not span: continue
            seg = src[span[0]:span[1]]
            for m in rx.finditer(seg):
                if already_linked(seg, m.start()): continue
                # keep inside a string literal: must be between quotes on the same line
                line_start = seg.rfind("\n", 0, m.start()) + 1
                if seg[line_start:m.start()].count('"') % 2 == 0: continue
                if re.match(r"^\s*(title|q|label|learner|goal|h1):", seg[line_start:m.start()]): continue  # headings stay plain
                new_seg = seg[:m.start()] + f"[{m.group(0)}]({url})" + seg[m.end():]
                src = src[:span[0]] + new_seg + src[span[1]:]
                applied.append((name, m.group(0), url.replace(B, "blog/")))
                done = True
                break
            if done: break
    f.write_text(src)
    print(f.name, len(applied), "links:", "; ".join(f"{a[0]}→{a[2][:40]}" for a in applied))
