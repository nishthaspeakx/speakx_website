import json, re, html, datetime, pathlib
ROOT=pathlib.Path(__file__).resolve().parent
URL="https://speakx.ai/blog/how-to-learn-english-fast"; B="https://speakx.ai/blog/"
INSTALL="https://speakx.sng.link/Ed28z/npfq/4alj?utm_source=blog&utm_medium=article&utm_campaign=how-to-learn-english-fast"
TITLE="How to Learn English Fast: 10 Steps + a 30-Day Plan"
DESC="How to learn English fast and quickly: 10 speaking-first steps, a 30-day plan and 15 minutes a day of practice for Indian adults and job seekers."
H1="How to Learn English Fast: A Speaking-First Plan That Works"
ANSWER="The fastest way to learn English is to speak it every day from the first day, not only study grammar. Spend 15–20 minutes daily speaking out loud, learn phrases you will actually use, listen to real English, and get feedback on your mistakes. Most adults who already know basic English notice clearer, more confident speaking within a few weeks of daily practice."
HOURS_NOTE=""  # filled only if a verified Cambridge source is found

STEPS=[
("Set one clear goal","Vague goals produce vague practice. Decide what you need English for in the next three months: an interview, office meetings, a presentation, or simply talking to a neighbour or a teacher at your child's school. Every later step gets easier when it points at one situation.","Write one sentence: “In 90 days I want to ______ in English.” Keep it where you will see it daily."),
("Speak out loud from day 1","Reading and listening build understanding; speaking builds speaking. Shadowing works well: play a short audio clip, pause after each sentence, and repeat it aloud copying the rhythm. Reading a paragraph aloud counts too. Your mouth needs practice as much as your mind.","Read any English paragraph aloud for five minutes. Then shadow one minute of a podcast or news clip."),
("Learn phrases, not single words","Knowing “help”, “you” and “please” is not the same as saying “Can you help me, please?” quickly. Learn complete, reusable sentences for your situations and swap one word at a time. Our list of <a href=\"LINK100\">100 daily use English sentences with Hindi meaning</a> is built for exactly this.","Pick five sentences from one situation, say each aloud three times, and change one word in each."),
("Think in English for small things","Translating in your head is the biggest speed limit. Start narrating small actions to yourself in English: “I am making tea. The bus is late. I need to call Rahul.” Nobody hears it, so there is no fear, and the habit moves English from your memory into your reflexes.","Describe the next ten minutes of your day to yourself in English, out loud if you can."),
("Listen daily to real English","Textbook audio is slow and tidy; real English is fast and messy. Fifteen minutes a day of podcasts, news or a series with English subtitles trains your ear for the speed you will meet in interviews and meetings. Choose topics you already like so you keep going.","Watch one episode of anything with English subtitles on, then repeat three lines you understood."),
("Learn the grammar you need for speaking","You do not need every rule; you need the ones that show up in speech: present, past and future tenses, questions, and “can / could / would” for requests. Learn each one through sentences you say, not through exercises you fill. Our guide to <a href=\"LINKTENSES\">English tenses</a> covers them in speaking order.","Take one tense, make five true sentences about your own day, and say them aloud."),
("Fix the pronunciation of the 20 words you use most","Clear speech is not about an accent; it is about the handful of words that carry your meaning. List the twenty words you say most at work or home, check how each is pronounced, and practise them in sentences. Our guide to <a href=\"LINKPRON\">English pronunciation</a> covers the sounds Indian speakers find hardest.","Write your twenty words, check the three you are least sure about, and say each in a sentence ten times."),
("Practise conversations with AI","A conversation partner who is available at midnight, never laughs at a mistake and corrects you instantly is the quickest feedback loop most learners can get. AI speaking apps now do this; our guide to <a href=\"LINKAI\">learning English with an AI teacher app</a> explains how to use one well, and the <a href=\"LINKVS\">comparison of English speaking apps in India</a> is honest about which app fits which goal.","Have one five-minute conversation with an AI tutor on today's topic, then repeat the sentences it corrected."),
("Record yourself weekly and compare","Progress in speaking is hard to feel day to day and easy to hear week to week. Every Sunday, record yourself answering the same two questions for one minute. Keep the recordings. After four weeks, play week one and week four back to back.","Record a one-minute answer to “Tell me about yourself” on your phone today. Save it as Week 1."),
("Track progress and keep a streak","Consistency beats intensity. Fifteen minutes every day beats two hours on Sunday, because speaking is a motor skill and motor skills decay between sessions. Tick a calendar, use an app streak, or tell a friend your plan; whatever makes skipping a day feel wrong.","Put a 15-minute “English” block in your phone calendar for the next 30 days, same time every day."),
]
PLAN=[
("Week 1","Build the speaking habit","Read aloud 5 min · shadow 5 min · learn 5 daily-use sentences · narrate one small activity in English","You speak English aloud every day without translating the easy sentences."),
("Week 2","Make it about you","Shadow 5 min · 5 new sentences about your goal situation · record a 1-minute “tell me about yourself” · fix 5 pronunciation words","You can introduce yourself and your work for one minute without stopping."),
("Week 3","Real conversations","10-min AI conversation on your goal topic · listen 10 min with subtitles · repeat corrected sentences · 5 new sentences","You can hold a short conversation on your topic and ask questions back."),
("Week 4","Stretch and measure","15-min conversation with harder questions · record the same 1-minute answer · compare with Week 1 · plan the next 30 days","You hear the difference in your own recording and know your next goal."),
]
FAQS=[
("How can I learn English fast at home?","Speak aloud every day: read a paragraph aloud, shadow a short audio clip, and narrate small activities to yourself in English. Add 15 minutes of listening with subtitles and one short conversation with an AI tutor or a friend. Fifteen to twenty minutes a day, every day, works better than long weekend sessions."),
("Can I learn English in 30 days?","You cannot become fluent in 30 days, and no honest method promises that. What 30 days of daily speaking practice can do, if you already know school-level English, is make you noticeably clearer and more confident in the situations you practise, such as introducing yourself or handling a meeting."),
("How can I learn English step by step?","Follow the ten steps above in order: set one goal, speak aloud from day one, learn phrases, think in English, listen daily, learn speaking grammar, fix your most-used words, practise conversations, record yourself weekly and keep a streak. The 30-day plan turns the steps into a daily routine."),
("What is the fastest way to learn spoken English?","Practise speaking itself, every day, with feedback. Shadow real audio, say useful phrases aloud, hold short conversations and correct the mistakes someone points out. Reading grammar books alone will not get you there, because speaking is a skill your mouth has to practise."),
("How do I learn English speaking easily?","Start with situations you already face in Hindi or your mother tongue, learn the English sentences for exactly those, and say them aloud until they come without thinking. Keep sessions short, choose topics you enjoy listening to, and accept mistakes as part of the method rather than a reason to stop."),
("Is grammar necessary to speak English?","You need enough grammar to be understood, not all of it. Present, past and future tenses, question forms and polite requests cover most daily conversation. Learn these through sentences you actually say, and let the finer rules come later through listening and feedback."),
("How many minutes a day should I practise English?","Fifteen to twenty minutes a day of speaking-focused practice is enough to see progress within a few weeks, as long as it happens every day. Consistency matters more than length, because speaking is a motor skill that fades between sessions."),
("Can I learn English with AI apps?","Yes, for speaking practice they are useful because you get a partner who is always available and corrects you instantly. Use an AI app for daily conversation practice and feedback, and combine it with real listening and the occasional human conversation."),
]
def L(t): return t.replace("LINK100",B+"100-simple-english-sentences-for-daily-use-with-hindi-meaning").replace("LINKTENSES",B+"english-grammar-tenses").replace("LINKPRON",B+"english-pronunciation-difficulty").replace("LINKAI",B+"learning-english-with-an-ai-teacher-app-for-confident-speaking").replace("LINKVS",B+"best-english-speaking-apps-india-speakx-vs-competitors")
steps_html="".join(f'<h3 id="step-{i}">Step {i}: {html.escape(n)}</h3><p>{L(t)}</p><p class="do"><strong>Do this today:</strong> {html.escape(d)}</p>' for i,(n,t,d) in enumerate(STEPS,1))
plan_rows="".join(f"<tr><th scope=\"row\">{w}<br><span class=\"sub\">{f}</span></th><td>{t}</td><td>{g}</td></tr>" for w,f,t,g in PLAN)
body=f'''
<p>If you are searching for <strong>how to learn English fast</strong>, you are probably not a beginner. You studied English at school, you can read it, you understand most of what you hear, and then someone asks you a question in a meeting or an interview and the words stop. This guide is for that reader. It gives you ten speaking-first steps, a 30-day plan, and a routine that takes 15 to 20 minutes a day. No promises of fluency in a week, just a method that moves English from something you know into something you say.</p>
<p>{ANSWER}</p>

<h2 id="how-fast">How fast can you really learn English?</h2>
<p>Realistically, an adult who already knows school English can sound noticeably clearer and more confident within a few weeks of daily speaking practice; becoming comfortable in most situations takes months, and fluency takes longer. Speed depends on where you start, so set the goal for your level rather than someone else's.</p>
<table class="levels"><caption>What to expect by starting level</caption><thead><tr><th scope="col">Your level now</th><th scope="col">What changes in 30 days of daily practice</th><th scope="col">Focus on</th></tr></thead><tbody>
<tr><th scope="row">Beginner (a few words, little school English)</th><td>You can greet, introduce yourself and handle simple requests with set phrases.</td><td>Daily-use sentences, listening, saying everything aloud.</td></tr>
<tr><th scope="row">School English (read well, freeze when speaking)</th><td>You speak in your goal situation for a minute or two without translating first.</td><td>Speaking from day one, phrases for your situation, pronunciation of common words.</td></tr>
<tr><th scope="row">Intermediate (can talk, make mistakes, lose words)</th><td>Fewer pauses, cleaner grammar in speech, more natural phrasing.</td><td>Longer conversations, recording and comparing, fixing repeated errors.</td></tr>
</tbody></table>
<p>The CEFR scale (A1 to C2) is the standard way to describe these levels, and exams such as IELTS map onto it; you do not need either to use this plan, but they are useful reference points when you want to measure yourself later.{HOURS_NOTE}</p>

<h2 id="steps">10 steps to learn English fast</h2>
<p>Each step takes a few minutes to understand and a few weeks to pay off. Do them in order; the first three are the ones most people skip.</p>
{steps_html}

<h2 id="plan">Your 30-day plan to learn English quickly</h2>
<p>Here is how to learn English quickly without burning out: one short block a day, the same time each day, with a clear goal for each week. Everything in the table takes 15 to 20 minutes.</p>
<table class="plan"><caption>30-day speaking-first plan (15–20 minutes a day)</caption><thead><tr><th scope="col">Week</th><th scope="col">Daily task</th><th scope="col">Goal by the end of the week</th></tr></thead><tbody>{plan_rows}</tbody></table>
<p>Missed a day? Do not restart. Continue the next day and keep the streak honest rather than perfect. After day 30, set a new 90-day goal and repeat the plan with harder topics; our guide to <a href="{B}how-to-speak-english-fluently">how to speak English fluently</a> covers the longer arc.</p>

<h2 id="at-home">How to learn English speaking at home</h2>
<p>Yes, you can learn English speaking at home without a class, as long as you speak aloud every day and get some feedback. Reading aloud, shadowing audio, narrating your day in English and recording yourself cover the first three; an AI tutor, a friend or a family member covers the fourth. Treat your kitchen, your commute and your evening walk as practice rooms. Our full routine for <a href="{B}practice-spoken-english-alone-at-home">practising spoken English alone at home</a> breaks it into a 15-minute session you can repeat daily.</p>

<h2 id="mistakes">Common mistakes that slow you down</h2>
<p>Most people who feel stuck are not short of effort; they are practising the wrong thing. Watch for these five.</p>
<ul>
<li><strong>Translating word by word from Hindi.</strong> It produces sentences like “What is your good name?” and makes you slow. Learn phrases whole.</li>
<li><strong>Only grammar books.</strong> Grammar explains English; it does not make you speak it. Pair every rule with sentences you say aloud.</li>
<li><strong>Fear of mistakes.</strong> Every fluent speaker you admire made thousands of mistakes out loud. Silence is the only mistake that stops progress.</li>
<li><strong>No speaking practice.</strong> Hours of listening and reading without speaking build understanding but not speech. Add your voice to every session.</li>
<li><strong>Inconsistency.</strong> A three-hour Sunday session followed by six days off loses most of its gain. Fifteen minutes daily keeps it.</li>
</ul>

<h2 id="speakx">Practise speaking with SpeakX</h2>
<p>Reading this won't make you fluent. Speaking will. <a href="https://speakx.ai/">SpeakX, an AI English-speaking app</a> for Indian learners, gives you the partner this plan needs: practise the day's task out loud with SpeakX's AI tutor on a voice call, get instant feedback on fluency and pronunciation, and rehearse real situations such as job interviews, office conversations and phone calls. Explanations are available in Hindi and six other Indian languages, lessons take about 15 minutes a day, and it is free to download and start. Use it for Step 8 and for the daily conversation in Weeks 3 and 4.</p>
<p><a class="app-cta" href="{INSTALL}" data-event="cta_click" data-cta-position="article_body">Start speaking practice</a></p>

<h2 id="faq">Frequently asked questions</h2>
{"".join(f"<h3>{html.escape(q)}</h3><p>{html.escape(a)}</p>" for q,a in FAQS)}

<h2 id="conclusion">Conclusion</h2>
<p>There is no secret method; progress comes from speaking from day one, practising the English you actually need, and showing up for 15 minutes every day. Start the 30-day plan today, record your Week 1 answer, and let the Week 4 recording show you what daily speaking does. <a href="{INSTALL}" data-event="cta_click" data-cta-position="conclusion">Start your first speaking session on SpeakX</a>.</p>
'''
article=f'''<!-- New post: {URL} (currently 404). Generated {datetime.date.today()} from the Nov 5, 2026 brief. US English; "practise" kept only where it is a noun-free verb in UK style? No: US spelling throughout. -->
<article class="post" lang="en">
<h1>{H1}</h1>
{body}
</article>'''
# US spelling pass on prose (verb practise -> practice), never inside URLs
def us(t):
    parts=re.split(r'(https?://[^\s"\')]+)', t)
    return "".join(p if p.startswith("http") else re.sub(r"\b(P|p)ractis(e|es|ed|ing)\b", r"\1ractic\2", p) for p in parts)
article=us(article)
(ROOT/"article-body.html").write_text(article)
FAQS=[(q,us(a)) for q,a in FAQS]
schema={"@context":"https://schema.org","@graph":[
 {"@type":"Article","@id":URL+"#article","headline":H1,"description":DESC,"mainEntityOfPage":URL,"inLanguage":"en-IN",
  "author":{"@type":"Person","name":"Deepank Agarwal","url":"https://speakx.ai/blog/author/deepank-agarwal"},
  "publisher":{"@type":"Organization","@id":"https://speakx.ai/#organization","name":"SpeakX","url":"https://speakx.ai/"},
  "datePublished":"SET-ON-PUBLISH (ISO 8601)","dateModified":"SET-ON-PUBLISH (ISO 8601)",
  "audience":{"@type":"Audience","audienceType":"Young adults and older learners in India who want to speak English confidently"}},
 {"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"SpeakX","item":"https://speakx.ai/"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://speakx.ai/blog"},{"@type":"ListItem","position":3,"name":"How to Learn English Fast","item":URL}]},
 {"@type":"HowTo","name":"How to learn English fast in 10 steps","description":us(ANSWER),"totalTime":"P30D",
  "step":[{"@type":"HowToStep","position":i,"name":n,"text":us(html.unescape(re.sub(r"<[^>]+>","",t)))+" Do this today: "+us(d),"url":URL+f"#step-{i}"} for i,(n,t,d) in enumerate(STEPS,1)]},
 {"@type":"FAQPage","mainEntity":[{"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}} for q,a in FAQS]}
]}
(ROOT/"structured-data.jsonld").write_text(json.dumps(schema,ensure_ascii=False,indent=2))
meta={"url":URL,"seo_title":TITLE,"seo_title_length":len(TITLE),"meta_description":DESC,"meta_description_length":len(DESC),"h1":H1,"canonical":URL,"robots":"index, follow","og_title":H1,"og_description":DESC,
 "answer_box_words":len(ANSWER.split()),
 "keyword_placement":{"H1 / title / URL / first sentence":"how to learn english fast","Meta + 30-day H2 + intro":"how to learn english quickly","At-home H2":"how to learn english speaking at home","Steps H2 / schema":"how to learn english step by step (justifies structure)","Body":"how to learn english; how to learn english speaking; how to improve english speaking; learn english fast; how to learn english fluently"},
 "internal_links_out":[{"anchor":"100 daily use English sentences with Hindi meaning","href":B+"100-simple-english-sentences-for-daily-use-with-hindi-meaning"},{"anchor":"English tenses","href":B+"english-grammar-tenses"},{"anchor":"English pronunciation","href":B+"english-pronunciation-difficulty"},{"anchor":"learning English with an AI teacher app","href":B+"learning-english-with-an-ai-teacher-app-for-confident-speaking"},{"anchor":"comparison of English speaking apps in India","href":B+"best-english-speaking-apps-india-speakx-vs-competitors"},{"anchor":"how to speak English fluently","href":B+"how-to-speak-english-fluently"},{"anchor":"practicing spoken English alone at home","href":B+"practice-spoken-english-alone-at-home"},{"anchor":"SpeakX, an AI English-speaking app","href":"https://speakx.ai/"},{"anchor":"Start speaking practice (CTA)","href":INSTALL}],
 "deferred_link":{"anchor":"AI se English kaise sikhe (Hindi)","href":B+"ai-se-english-kaise-sikhe","status":"404 on 6 Nov 2026; add under Step 8 as 'Prefer reading in Hindi? → AI se English kaise sikhe' only when that page is live"},
 "internal_links_in":[{"from":B+"how-to-speak-english-fluently","anchor":"how to learn English fast (30-day plan)"},{"from":B+"practice-spoken-english-alone-at-home","anchor":"a 30-day plan to learn English fast"},{"from":B+"100-simple-english-sentences-for-daily-use-with-hindi-meaning","anchor":"how to learn English fast with daily speaking"},{"from":B+"learning-english-with-an-ai-teacher-app-for-confident-speaking","anchor":"10 steps to learn English fast"},{"from":B+"english-grammar-tenses","anchor":"the grammar you need to speak English fast"},{"from":"ai-se-english-kaise-sikhe (when live)","anchor":"how to learn English fast (30-day plan)"}],
 "images":[{"placement":"hero","alt":"Young professional practicing spoken English on a phone during a commute"},{"placement":"30-day plan","alt":"30-day plan to learn English fast with 15 minutes of daily speaking practice"},{"placement":"10 steps","alt":"10 steps to learn English fast checklist"},{"placement":"optional","note":"60-second video of the 15-minute daily routine; adult learners only"}],
 "notes":["US English throughout (site decision, 13 Oct 2026).","The AI tutor is referred to as 'SpeakX's AI tutor' per the brief; Sia is verified elsewhere but the brief asked not to name it here.","No hour estimates or proficiency statistics are included: the Cambridge guided-learning-hours page could not be fetched for verification on 6 Nov 2026. Add the figures with a link only after reading the source.","HowTo schema included for parsers; Google no longer shows HowTo rich results."]}
(ROOT/"seo-metadata.json").write_text(json.dumps(meta,ensure_ascii=False,indent=2))
words=len(re.sub(r"<[^>]+>"," ",article).split())
# markdown
md=re.sub(r'<h2[^>]*>(.*?)</h2>', r'\n## \1\n', article); md=re.sub(r'<h3[^>]*>(.*?)</h3>', r'\n### \1\n', md)
md=re.sub(r'<a [^>]*href="([^"]+)"[^>]*>(.*?)</a>', r'[\2](\1)', md); md=re.sub(r'<li>(.*?)</li>', r'- \1', md)
md=re.sub(r'<tr><th scope="row">(.*?)</th><td>(.*?)</td><td>(.*?)</td></tr>', lambda m: "| "+re.sub(r"<[^>]+>"," ",m.group(1))+" | "+m.group(2)+" | "+m.group(3)+" |", md)
md=re.sub(r'<thead>.*?</thead>', "| | | |\n|---|---|---|", md, flags=re.S); md=re.sub(r'<[^>]+>','',md); md=html.unescape(re.sub(r'\n{3,}','\n\n',md))
(ROOT/"article.md").write_text(f"**URL:** {URL}\n**Title tag:** {TITLE}\n**Meta description:** {DESC}\n\n# {H1}\n{md}")
css=open(ROOT.parent/"blog-speech-importance-of-english/article-styles.css").read()
extra=".levels,.plan{width:100%;border-collapse:collapse;font-size:.95rem;margin:0 0 1rem} .levels caption,.plan caption{caption-side:top;text-align:left;font-weight:600;color:#4a4a5b;padding:.25rem 0} .levels th,.levels td,.plan th,.plan td{text-align:left;padding:.55rem .6rem;border-bottom:1px solid #eeeff4;vertical-align:top} .levels th[scope=col],.plan th[scope=col]{color:#666673;font-size:.8rem;text-transform:uppercase;letter-spacing:.04em;background:#f7f8fa} .plan th[scope=row]{color:#0a0b0f} .plan .sub{display:block;font-weight:400;color:#666673;font-size:.85rem} .do{background:#fff7f2;border-left:3px solid #ff4d00;padding:.5rem .8rem;border-radius:0 10px 10px 0;font-size:.95rem} @media(max-width:640px){.levels,.plan{display:block;overflow-x:auto}}"
(ROOT/"article-styles.css").write_text(css+"\n"+extra+"\n")
full=f'''<!DOCTYPE html>
<html lang="en-IN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>{TITLE}</title><meta name="description" content="{DESC}"><link rel="canonical" href="{URL}"><meta name="robots" content="index, follow">
<meta property="og:type" content="article"><meta property="og:title" content="{H1}"><meta property="og:description" content="{DESC}"><meta property="og:url" content="{URL}"><meta name="twitter:card" content="summary_large_image">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;600;700;800&display=swap">
<script type="application/ld+json">{json.dumps(schema,ensure_ascii=False).replace("SET-ON-PUBLISH (ISO 8601)",datetime.date.today().isoformat()+"T00:00:00.000Z")}</script>
<style>
:root{{--brand:#ff4d00;--brand-dark:#a53a06;--ink:#0a0b0f;--ink-soft:#4a4a5b;--muted:#666673;--line:#eeeff4;--surface-2:#f7f8fa}}
*{{box-sizing:border-box}} html{{color-scheme:light}} body{{margin:0;background:#fff;color:var(--ink);font-family:Figtree,ui-sans-serif,system-ui,sans-serif;line-height:1.65;font-size:17px}}
.site-header{{position:sticky;top:0;z-index:10;background:#fff;border-bottom:1px solid var(--line)}} .site-header .wrap{{display:flex;align-items:center;justify-content:space-between;gap:1rem;max-width:760px;margin:0 auto;padding:.7rem 16px}}
.site-header a.logo{{font-weight:800;color:var(--brand);text-decoration:none;font-size:1.25rem}} .site-header a.btn{{background:var(--brand-dark);color:#fff !important;text-decoration:none;padding:.55rem 1rem;border-radius:999px;font-weight:700;font-size:.9rem}}
.post{{max-width:760px;margin:0 auto;padding:1.5rem 16px 4rem}} .post h1{{font-size:clamp(1.9rem,5vw,2.5rem);line-height:1.12;letter-spacing:-.015em;margin:.5rem 0 1rem;text-wrap:balance}}
.post h2{{font-size:clamp(1.35rem,3.5vw,1.7rem);line-height:1.25;margin:2.4rem 0 .8rem;text-wrap:balance}} .post h3{{font-size:1.1rem;margin:1.6rem 0 .5rem}}
.post p{{margin:0 0 1rem;color:var(--ink-soft)}} .post strong{{color:var(--ink)}} .post a{{color:var(--brand-dark)}} .post ul{{color:var(--ink-soft);padding-left:1.3rem}} .post li{{margin:.4rem 0}}
.byline{{color:var(--muted);font-size:.9rem;margin:0 0 1.25rem}} .site-footer{{border-top:1px solid var(--line);padding:1.5rem 16px;color:var(--muted);font-size:.85rem;text-align:center}}
{css}{extra}
</style></head><body>
<header class="site-header"><div class="wrap"><a class="logo" href="https://speakx.ai/">SpeakX</a><a class="btn" href="{INSTALL}">Start speaking now</a></div></header>
{article.replace('</h1>','</h1>\n<p class="byline">By <a href="https://speakx.ai/blog/author/deepank-agarwal">Deepank Agarwal</a> · SpeakX · Updated '+datetime.date.today().strftime('%d %B %Y')+' · ~10 min read</p>',1)}
<footer class="site-footer">© SpeakX (Ivypods Technology Pvt. Ltd.), Gurugram · <a href="https://speakx.ai/">speakx.ai</a> · <a href="https://speakx.ai/blog">Blog</a></footer>
</body></html>'''
(ROOT/"article-full-page.html").write_text(full)
print("words:", words, "| steps:", len(STEPS), "| faqs:", len(FAQS), "| title", len(TITLE), "| desc", len(DESC), "| 'fast' count:", len(re.findall(r"\bfast\b", article, re.I)), "| 'quickly':", len(re.findall(r"\bquickly\b", article, re.I)))
