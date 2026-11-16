import json, html, pathlib, datetime, re
ROOT=pathlib.Path(__file__).resolve().parents[1]; d=json.load(open(ROOT/"data/sentences.json"))
URL="https://speakx.ai/blog/100-simple-english-sentences-for-daily-use-with-tamil-meaning"
PDF_URL=URL+"/100-daily-use-english-sentences-with-tamil-meaning.pdf"
INSTALL="https://speakx.sng.link/Ed28z/npfq/4alj?utm_source=blog&utm_medium=article&utm_campaign=100-sentences-tamil"
B="https://speakx.ai/blog/"
TITLE="100 Daily Use English Sentences with Tamil Meaning"
DESC="100 daily use English sentences with Tamil meaning, grouped by situation: greetings, home, office, shopping and travel. Free PDF, plus a 10-day plan to say them aloud."
H1="100 Daily Use English Sentences with Tamil Meaning (Free PDF)"
ANSWER="Daily use English sentences with Tamil meaning are short, polite lines you can say at home, at work, in a shop or while travelling, with the Tamil meaning written next to each one. Learning 100 of them, five a day, and saying each sentence aloud is a practical way for Tamil speakers to start speaking English without building every line from scratch."
def cta(pos, heading, text, button):
    return f'''<aside class="pdf-cta" data-cta-position="{pos}" aria-labelledby="pdf-cta-{pos}"><h3 id="pdf-cta-{pos}">{heading}</h3><p>{text}</p><a class="pdf-cta__button" href="{PDF_URL}" download="100-daily-use-english-sentences-with-tamil-meaning.pdf" data-event="pdf_download" data-cta-position="{pos}" data-pdf-filename="100-daily-use-english-sentences-with-tamil-meaning.pdf">{button}</a><small>Free printable PDF · English, Tamil and transliteration · 12 A4 pages · no signup required</small></aside>'''
n=0; tables=""
for s in d["sections"]:
    rows="".join(f'<tr><th scope="row">{n+i+1}</th><td lang="en">{html.escape(en)}</td><td lang="ta">{html.escape(ta)}</td><td class="tr">{html.escape(tr)}</td><td>{html.escape(w)}</td></tr>' for i,(en,ta,tr,w) in enumerate(s["sentences"]))
    n+=len(s["sentences"])
    tables+=f'''<h3 id="{s["id"]}">{html.escape(s["question"])}</h3>
<table class="sentences"><caption>{html.escape(s["title"])} · <span lang="ta">{html.escape(s["tamil"])}</span> ({n-9}–{n})</caption><thead><tr><th scope="col">No.</th><th scope="col">English sentence</th><th scope="col">Tamil meaning</th><th scope="col">Transliteration</th><th scope="col">When to use</th></tr></thead><tbody>{rows}</tbody></table>
<p class="tip"><strong>Practice tip:</strong> {html.escape(s["tip"])}</p>
'''
    if n==50: tables+=cta("middle","Want all 100 sentences in one printable sheet collection?","Download the free PDF: the same 100 sentences with Tamil meaning, transliteration and usage notes, plus a 10-day practice tracker.","Download the free PDF")
FAQS=[
("Is the 100 daily use English sentences with Tamil meaning PDF free?","Yes. The PDF is free, with no signup, and it has the same 100 sentences and Tamil meanings as this article, plus the transliteration column and a 10-day practice tracker."),
("What are some simple English sentences used at home, with Tamil meaning?","Simple English sentences used at home include “I am at home” (நான் வீட்டில் இருக்கிறேன்), “Please come inside” (தயவுசெய்து உள்ளே வாருங்கள்), “The food is ready” (சாப்பாடு தயாராக உள்ளது) and “I will be back soon” (நான் சீக்கிரம் திரும்பி வருகிறேன்). Sentences 11 to 20 above cover the home."),
("How many daily use English sentences should I learn in a day?","Five to ten a day is enough if you say them aloud and use one or two in real conversations. Using a sentence matters more than memorising a long list."),
("What are spoken English sentences in Tamil?","They are everyday English sentences shown with their Tamil meaning so a Tamil speaker can understand and then say the English line aloud. The list above is a set of 100; the section on saying them aloud explains how to turn the Tamil meaning into spoken English practice."),
("Can these 100 sentences help me speak English fluently?","They give you a foundation for everyday conversation, but memorising sentences alone does not create fluency. You also need regular speaking, listening and pronunciation practice. Our guide on how to speak English fluently covers the full plan."),
("Are the Tamil meanings literal translations?","No. Each Tamil meaning is the natural way a Tamil speaker would say the same thing, in the polite நீங்கள் form, not a word-for-word translation. The transliteration column shows the Tamil as it is commonly typed."),
("Should I use நீங்கள் or நீ?","The Tamil column uses the polite நீங்கள் form, which is safe with anyone. With close friends or younger family you can switch to நீ in Tamil, but the English sentence stays the same, because English “you” does not change."),
("How can I practise these sentences if no one around me speaks English?","Say each sentence aloud, record it on your phone and play it back, and run imaginary conversations with a shopkeeper or an auto driver. Then find one partner, a friend, a family member or a speaking app, for five minutes a day, so you get feedback on how you sound."),
]
starter=[(1,"How are you?","நீங்கள் எப்படி இருக்கிறீர்கள்?"),(2,"I am fine, thank you.","நான் நலமாக இருக்கிறேன், நன்றி."),(3,"What are you doing?","நீங்கள் என்ன செய்து கொண்டிருக்கிறீர்கள்?"),(4,"Where are you going?","நீங்கள் எங்கே போகிறீர்கள்?"),(5,"Can you help me?","நீங்கள் எனக்கு உதவ முடியுமா?"),(6,"I don’t understand.","எனக்குப் புரியவில்லை."),(7,"Please speak slowly.","தயவுசெய்து மெதுவாகப் பேசுங்கள்."),(8,"Can you repeat that, please?","தயவுசெய்து மீண்டும் சொல்ல முடியுமா?"),(9,"I will call you later.","நான் பின்னர் உங்களை அழைக்கிறேன்."),(10,"Thank you for your help.","உங்கள் உதவிக்கு நன்றி.")]
body=f'''
<p class="lead"><strong>This page gives you 100 English sentences with Tamil meaning</strong>, grouped by situation: greetings, home, office, asking for help, shopping, travel, phone calls, feelings, polite requests and goodbyes. Each sentence shows the Tamil meaning in Tamil script (<span lang="ta">ஆங்கில வாக்கியங்கள், தமிழ் பொருளுடன்</span>), a simple transliteration, and the moment you would actually say it. If you have been searching for Tamil to English sentences you can use today, or for spoken English sentences in Tamil that you can practise aloud, start here. The whole list is also a free printable PDF, with a 10-day plan to say the sentences out loud.</p>
<p>{ANSWER}</p>
<h2 id="pdf-top">Download free PDF: 100 daily use English sentences with Tamil meaning</h2>
<p>The PDF has the same 100 sentences as this page, with the Tamil meaning, transliteration and “when to use” note for each, and a 10-day practice tracker on the last page. It is an A4 printable with real, selectable Tamil text, so it reads clearly on a phone and prints cleanly at home. No signup, no email.</p>
{cta("top","Download Free PDF: 100 Daily Use English Sentences with Tamil Meaning","Free printable PDF in English and Tamil. Save it on your phone or print it for daily practice. No signup required.","Download 100 Daily Use English Sentences PDF — Free")}

<h2 id="why">Why should you learn daily use English sentences instead of single words?</h2>
<p>Because conversations happen in sentences, not words. Knowing <em>help</em>, <em>you</em> and <em>please</em> is not the same as saying “Can you help me, please?” quickly when a stranger is waiting. Ready-made sentences give you patterns you can reuse, so you respond without building each line from scratch.</p>
<p>For Tamil-medium learners, the Tamil column is a first step, not a crutch. Read the Tamil meaning once to be sure of the sense, then say the English sentence until it comes on its own. If you want the grammar behind the patterns, our guide to <a href="{B}english-grammar-sentence-structure">English grammar sentence structure</a> explains how a simple sentence is put together. The same 100 sentences are also available <a href="{B}100-simple-english-sentences-for-daily-use-with-hindi-meaning">with Hindi meaning</a>.</p>

<h2 id="list">What are the 100 most useful English sentences for daily use?</h2>
<p>The 100 most useful daily use English sentences are short, polite and practical: greetings such as “How are you?”, home sentences such as “The food is ready”, office sentences such as “I am working on it”, help requests such as “Please speak slowly”, and goodbyes such as “Take care”. Below they are grouped into ten situations, with the Tamil meaning, a transliteration and a note on when to use each one. Where Tamil changes with politeness, the table uses the respectful <span lang="ta">நீங்கள்</span> form, which is safe with anyone.</p>
{tables}

<h2 id="beginners">Which English sentences are most useful for beginners?</h2>
<p>If you are a complete beginner, start with these ten. They cover greeting someone, asking for help, slowing a conversation down and ending it politely, which is most of what a first conversation needs.</p>
<ol class="starter">{"".join(f'<li>{html.escape(en)} — <span lang="ta">{html.escape(ta)}</span></li>' for _,en,ta in starter)}</ol>
<p>Once these feel natural, move to the next ten. Our guide to <a href="{B}master-real-life-english-your-guide-to-confident-daily-conversation">real-life English for daily conversation</a> shows how these sentences join up into actual conversations.</p>

<h2 id="aloud">Spoken English sentences in Tamil: how to say these aloud</h2>
<p>Reading the Tamil meaning is not the same as speaking the English sentence. Spoken English sentences in Tamil, the way most videos present them, give you understanding; your mouth still needs practice. Use this three-step script for every group of ten:</p>
<ol>
<li><strong>Cover the Tamil column.</strong> Look only at the English sentence and the “when to use” note.</li>
<li><strong>Say the English line twice, aloud.</strong> The first time slowly, the second time at normal speed. If you are not sure of the meaning, uncover the Tamil, check, and say it again.</li>
<li><strong>Use it in a two-line roleplay.</strong> Shop: “How much is this?” “It is two hundred rupees.” Phone: “I am on my way.” “Okay, I will wait.” Office: “I am working on it.” “Thanks, let me know when it is done.”</li>
</ol>
<p>Ten sentences this way take about ten minutes. Do it with the group you need most this week, then add the 15-minute routine below. When you want feedback on how the sentences sound, say them to SpeakX, which listens and tells you how your fluency and pronunciation landed.</p>

<h2 id="mistakes">What mistakes do Tamil speakers make with daily English sentences?</h2>
<p>Most of these come from carrying a Tamil pattern into English. They are not grammar-book errors, but they can sound off in an interview or on a client call.</p>
<p class="note"><em>Editorial note (remove before publishing): examples below are drafted from common Tamil-to-English interference patterns and must be confirmed or replaced by a native Tamil-speaking editor, per the brief.</em></p>
<table class="mistakes"><caption>Common patterns and the natural sentence</caption><thead><tr><th scope="col">Commonly said</th><th scope="col">Say this instead</th><th scope="col">Why</th></tr></thead><tbody>
<tr><td>I am having a doubt.</td><td>I have a question.</td><td>“Doubt” means you do not believe something; state verbs do not take -ing.</td></tr>
<tr><td>He is my cousin brother.</td><td>He is my cousin.</td><td>English “cousin” already covers அத்தை மகன் / மாமா மகன்; “brother” is extra.</td></tr>
<tr><td>What is your native?</td><td>Where are you from?</td><td>“Native” is not a noun for your hometown in English.</td></tr>
<tr><td>I will come at sharp 10.</td><td>I will come at 10 sharp.</td><td>“Sharp” goes after the time.</td></tr>
<tr><td>Kindly do the needful.</td><td>Please take care of this.</td><td>“Do the needful” is dated office English; plain requests sound more natural.</td></tr>
<tr><td>She is coming, no?</td><td>She is coming, isn’t she?</td><td>Tamil “இல்லையா?” tags become “no?” in English; use a question tag instead.</td></tr>
<tr><td>I am going to school daily morning.</td><td>I go to school every morning.</td><td>Routines use the simple present; “daily morning” is a direct translation of தினமும் காலை.</td></tr>
</tbody></table>
<p>Pronunciation has its own set. Tamil has no separate sounds for some English pairs, so words such as <em>pleasure</em>, <em>zoo</em>, <em>very</em> and <em>wine</em> are worth practising on their own. Our guide to <a href="{B}english-pronunciation-difficulty">English pronunciation difficulty</a> covers the sounds Indian speakers find hardest.</p>

<h2 id="learn">How can I learn five English sentences every day?</h2>
<p>Pick five sentences from one situation, read each aloud three times, change one word in each to make your own version, and use at least one in a real conversation before the day ends. Five sentences a day means the whole list in twenty days, and sentences you have actually said are the ones you remember.</p>
<h3>Step 1: Five from one situation</h3><p>Do not jump across groups. Five office sentences on a work day, five shopping sentences before you go to the market.</p>
<h3>Step 2: Say each aloud</h3><p>Three times, out loud, not silently. Your mouth needs the practice as much as your memory does.</p>
<h3>Step 3: Make one variation</h3><p>From “I am working on it” you get “I am working on the report” and “I am working on the presentation”. The pattern is worth more than the sentence.</p>
<h3>Step 4: Use one in real life</h3><p>With a colleague, a shopkeeper, a bus conductor or at home. The 10-day tracker in the PDF covers ten sentences a day; after day 10, start again with the groups you found hardest for days 11 to 20.</p>

<h2 id="translate">How can I stop translating every sentence from Tamil in my head?</h2>
<p>Translating helps the first time you meet a sentence, but speaking becomes slow if you translate every line while talking. The fix is patterns. Once you understand the Tamil meaning of “I need some water” (<span lang="ta">எனக்குக் கொஞ்சம் தண்ணீர் வேண்டும்</span>), stop translating and learn <em>I need…</em> as a ready-made opening: I need some help. I need some time. I need one more day. Do the same with <em>Can you…?</em>: Can you help me? Can you show me? Can you repeat that, please? After a week of saying the pattern aloud, the English comes first.</p>

<h2 id="home">How can I practise daily use English sentences at home?</h2>
<p>Practise at home by reading the sentences aloud, recording yourself on your phone, making your own variations, and running imaginary conversations: order food from an imaginary waiter, give directions to an imaginary auto driver in Chennai or Coimbatore. A partner or a speaking app adds the one thing you cannot give yourself: feedback. Our guide to <a href="{B}practice-spoken-english-alone-at-home">practising spoken English alone at home</a> has the full routine.</p>
<h3>A simple 15-minute daily practice routine</h3>
<ul><li><strong>5 minutes, read:</strong> read five to ten sentences from one group aloud.</li><li><strong>5 minutes, speak:</strong> make your own sentences using the same patterns.</li><li><strong>5 minutes, converse:</strong> use them in a short conversation with a partner or a speaking-practice app.</li></ul>
<p>For the longer arc beyond these 100 sentences, see our guide on <a href="{B}how-to-speak-english-fluently">how to speak English fluently</a>.</p>

<h2 id="speakx">How can you practise these sentences out loud with SpeakX?</h2>
<p>Reading English sentences helps you learn. Speaking them aloud helps you use them in real conversations. <a href="https://speakx.ai/">SpeakX</a> is an AI English speaking app for Indian learners: you practise speaking on voice calls with an AI tutor, rehearse real-life roleplays such as a shop, a meeting or a phone call, and get feedback on your fluency and pronunciation, with explanations available in Tamil and other Indian languages. Pick the group you practised today, open the matching roleplay, and say those sentences out loud. It is free to download and start.</p>
<p><a class="app-cta" href="{INSTALL}" data-event="cta_click" data-cta-position="article_body">Practise today's sentences on SpeakX</a></p>

<div class="switcher"><p><strong>These 100 sentences in other languages:</strong> <a href="{B}100-simple-english-sentences-for-daily-use-with-hindi-meaning">with Hindi meaning</a>. <span class="muted">Marathi and Telugu versions will be linked here when they are published.</span></p></div>

<h2 id="faq">Frequently asked questions</h2>
{"".join(f"<h3>{html.escape(q)}</h3><p>{html.escape(a)}</p>" for q,a in FAQS)}

{cta("end","Save these 100 English sentences for everyday practice","Download your free printable PDF: English, Tamil meaning and transliteration side by side, grouped by situation, with a 10-day tracker.","Download your free printable PDF")}
'''
article=f'''<!-- New post: {URL} (404 today). Generated {datetime.date.today()} from data/sentences.json. Tamil text is DRAFT pending native-speaker verification. -->
<article class="post" lang="en-IN">
<h1>{H1}</h1>
{body}
</article>'''
# US spelling for prose verbs (practise -> practice) except inside URLs; brand voice decision of 13 Oct 2026
def us(t):
    parts=re.split(r'(https?://[^\s"\')]+)', t)
    return "".join(p if p.startswith("http") else re.sub(r"\b(P|p)ractis(e|es|ed|ing)\b", r"\1ractic\2", p) for p in parts)
article=us(article); FAQS=[(q,us(a)) for q,a in FAQS]
(ROOT/"article/article-body.html").write_text(article)
schema={"@context":"https://schema.org","@graph":[
 {"@type":"Article","@id":URL+"#article","headline":H1,"description":DESC,"inLanguage":"en-IN","mainEntityOfPage":URL,
  "author":{"@type":"Person","name":"Deepank Agarwal","url":"https://speakx.ai/blog/author/deepank-agarwal"},
  "publisher":{"@type":"Organization","@id":"https://speakx.ai/#organization","name":"SpeakX","url":"https://speakx.ai/"},
  "datePublished":"SET-ON-PUBLISH (ISO 8601)","dateModified":"SET-ON-PUBLISH (ISO 8601)",
  "audience":{"@type":"Audience","audienceType":"Tamil-speaking young adults and older learners in India who want to speak English confidently"},
  "hasPart":{"@type":"DigitalDocument","name":"100 Daily Use English Sentences with Tamil Meaning (printable PDF)","url":PDF_URL,"encodingFormat":"application/pdf","isAccessibleForFree":True,"inLanguage":["en-IN","ta-IN"]}},
 {"@type":"LearningResource","name":"100 daily use English sentences with Tamil meaning","inLanguage":"en-IN","learningResourceType":"worksheet","teaches":"Everyday spoken English sentences for Tamil speakers","typicalAgeRange":"18-","isAccessibleForFree":True,"url":URL},
 {"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"SpeakX","item":"https://speakx.ai/"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://speakx.ai/blog"},{"@type":"ListItem","position":3,"name":"100 Daily Use English Sentences with Tamil Meaning","item":URL}]},
 {"@type":"FAQPage","mainEntity":[{"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}} for q,a in FAQS]}
]}
(ROOT/"implementation/structured-data.jsonld").parent.mkdir(exist_ok=True)
(ROOT/"implementation/structured-data.jsonld").write_text(json.dumps(schema,ensure_ascii=False,indent=2))
words=len(re.sub(r"<table[\s\S]*?</table>","",re.sub(r"<[^>]+>"," ",body)).split())
print("sentences:", n, "| guidance words (excluding tables):", words, "| faqs:", len(FAQS))
md=re.sub(r'<aside[\s\S]*?</aside>', lambda m: "> **"+re.sub(r"<[^>]+>"," ",m.group(0)).strip().split("\n")[0][:120]+"** [Download the free PDF]("+PDF_URL+")\n", article)
md=re.sub(r'<h2[^>]*>(.*?)</h2>', r'\n## \1\n', md); md=re.sub(r'<h3[^>]*>(.*?)</h3>', r'\n### \1\n', md)
md=re.sub(r'<caption>(.*?)</caption>', r'\n**\1**\n', md)
md=re.sub(r'<tr><th scope="row">(\d+)</th><td lang="en">(.*?)</td><td lang="ta">(.*?)</td><td class="tr">(.*?)</td><td>(.*?)</td></tr>', r'| \1 | \2 | \3 | \4 | \5 |', md)
md=re.sub(r'<thead>.*?</thead>', lambda m: "| No. | English | Tamil | Transliteration | When to use |\n|---|---|---|---|---|" if "Transliteration" in m.group(0) else "| Commonly said | Say this instead | Why |\n|---|---|---|", md, flags=re.S)
md=re.sub(r'<tr><td>(.*?)</td><td>(.*?)</td><td>(.*?)</td></tr>', r'| \1 | \2 | \3 |', md)
md=re.sub(r'<a [^>]*href="([^"]+)"[^>]*>(.*?)</a>', r'[\2](\1)', md); md=re.sub(r'<li>(.*?)</li>', r'- \1', md)
md=html.unescape(re.sub(r'\n{3,}','\n\n',re.sub(r'<[^>]+>','',md)))
(ROOT/"article/article.md").write_text(f"**URL:** {URL}\n**Title tag:** {TITLE}\n**Meta description:** {DESC}\n\n{md}")
json.dump({"url":URL,"seo_title":TITLE,"seo_title_length":len(TITLE),"meta_description":DESC,"meta_description_length":len(DESC),"h1":H1,"canonical":URL,"robots":"index, follow","page_lang":"en-IN (lang=\"ta\" on every Tamil span); no page-level hreflang","og_title":H1,"og_description":DESC,
 "pdf":{"url":PDF_URL,"filename":"100-daily-use-english-sentences-with-tamil-meaning.pdf","host_rule":"Host on speakx.ai under the article path (NOT image.speakx.ai, which lets the PDF rank as its own URL). Serve with X-Robots-Tag: noindex; keep out of the sitemap.","content_type":"application/pdf"},
 "keyword_placement":{"H1 / title / first sentence":"english sentences with tamil meaning (1,600/mo, KD 56)","Intro, once":"tamil to english sentences (1,900/mo); spoken english sentences in tamil (170/mo)","Intro + PDF CTA":"daily use english sentences in tamil (20/mo)","H2 'Spoken English sentences in Tamil: how to say these aloud'":"spoken english sentences in tamil","FAQ":"spoken english in tamil meaning (related, mention only)","Native script":"ஆங்கில வாக்கியங்கள் in the intro and PDF subtitle (no Semrush rows; included for readers and AI answers)"},
 "internal_links_out":[{"anchor":"English grammar sentence structure","href":B+"english-grammar-sentence-structure"},{"anchor":"with Hindi meaning (sister page)","href":B+"100-simple-english-sentences-for-daily-use-with-hindi-meaning"},{"anchor":"real-life English for daily conversation","href":B+"master-real-life-english-your-guide-to-confident-daily-conversation"},{"anchor":"English pronunciation difficulty","href":B+"english-pronunciation-difficulty"},{"anchor":"practicing spoken English alone at home","href":B+"practice-spoken-english-alone-at-home"},{"anchor":"how to speak English fluently","href":B+"how-to-speak-english-fluently"},{"anchor":"SpeakX","href":"https://speakx.ai/"},{"anchor":"Practice today's sentences on SpeakX (CTA)","href":INSTALL}],
 "deferred_links":[{"anchor":"with Marathi meaning","href":B+"100-simple-english-sentences-for-daily-use-with-marathi-meaning","status":"404 on 16 Nov 2026; add to the switcher when live"},{"anchor":"with Telugu meaning","href":B+"100-simple-english-sentences-for-daily-use-with-telugu-meaning","status":"404; add when live"},{"anchor":"daily use English words with Hindi meaning","href":B+"daily-use-english-words-with-hindi-meaning","status":"404; add when live"}],
 "internal_links_in":[{"from":B+"100-simple-english-sentences-for-daily-use-with-hindi-meaning","anchor":"the same 100 sentences with Tamil meaning (language switcher)"},{"from":B+"practice-spoken-english-alone-at-home","anchor":"100 daily use English sentences with Tamil meaning"},{"from":B+"how-to-speak-english-fluently","anchor":"daily use English sentences with Tamil meaning"},{"from":B+"english-pronunciation-difficulty","anchor":"English sentences with Tamil meaning to practise aloud"},{"from":"https://speakx.ai/vs (Beginners goal card)","anchor":"100 daily use English sentences (Tamil)"},{"from":"https://speakx.ai/blog (index)","anchor":"100 Daily Use English Sentences with Tamil Meaning (Free PDF)"}],
 "images":[{"placement":"hero","alt":"Adult practicing 100 daily use English sentences with Tamil meaning from a printed sheet"},{"placement":"after the tables","alt":"100 daily use English sentences with Tamil meaning, grouped by situation"},{"placement":"PDF section","alt":"Free PDF of 100 daily use English sentences with Tamil meaning and a 10-day practice tracker"},{"placement":"optional video","note":"Adult saying 10–15 sentences with on-screen Tamil meaning; YouTube owns the 'spoken english sentences in tamil' SERP"}],
 "notes":["TAMIL TEXT IS A DRAFT: every meaning and transliteration must be verified by a native Tamil speaker before publishing (brief §11). The mistakes table carries an editorial note to remove after verification.","No price cited (brief: only if checked on publish day). /premium showed ₹2 for 3 days then ₹299/month on 16 Nov 2026 if the team wants to add it.","The AI tutor is not named, per the brief.","US spelling (practice as a verb), per the 13 Oct 2026 site decision.","Title keeps '100' because both the page and the PDF contain exactly 100 sentences (script-checked)."]},open(ROOT/"implementation/seo-metadata.json","w"),ensure_ascii=False,indent=2)
