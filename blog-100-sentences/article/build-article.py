"""Generates the revised article (Markdown + publish-ready HTML fragment) from data/sentences.json.
The URL stays https://speakx.ai/blog/100-simple-english-sentences-for-daily-use-with-hindi-meaning ."""
import json, html, pathlib, datetime
ROOT=pathlib.Path(__file__).resolve().parents[1]; d=json.load(open(ROOT/"data/sentences.json"))
PDF_URL="https://speakx.ai/downloads/100-daily-use-english-sentences-with-hindi-meaning.pdf"
INSTALL="https://speakx.sng.link/Ed28z/npfq/4alj?utm_source=blog&utm_medium=article&utm_campaign=100-daily-use-sentences"
B="https://speakx.ai/blog/"
def cta(pos, heading, text, button):
    return f'''<aside class="pdf-cta" data-cta-position="{pos}" aria-labelledby="pdf-cta-{pos}">
  <h3 id="pdf-cta-{pos}">{heading}</h3>
  <p>{text}</p>
  <a class="pdf-cta__button" href="{PDF_URL}" download="100-daily-use-english-sentences-with-hindi-meaning.pdf" data-event="pdf_download" data-cta-position="{pos}" data-pdf-filename="100-daily-use-english-sentences-with-hindi-meaning.pdf">{button}</a>
  <small>Free printable PDF · English and Hindi · 7 A4 pages · no signup required</small>
</aside>'''
md=[]; H=[]
H.append(cta("top","Download Free PDF: 100 Daily Use English Sentences with Hindi Meaning","Free printable PDF in English and Hindi. Save it on your phone or print it for daily practice. No signup required.","Download 100 Daily Use English Sentences PDF — Free"))
n=0; tables_html=""; tables_md=""
for si,s in enumerate(d["sections"],1):
    rows_h="".join(f'<tr><th scope="row">{n+i+1}</th><td lang="en">{html.escape(en)}</td><td lang="hi">{html.escape(hi)}</td><td>{html.escape(w)}</td></tr>' for i,(en,hi,w) in enumerate(s["sentences"]))
    rows_m="".join(f'| {n+i+1} | {en} | {hi} | {w} |\n' for i,(en,hi,w) in enumerate(s["sentences"]))
    n+=len(s["sentences"])
    tables_html+=f'''<h3 id="{s["id"]}">{html.escape(s["question"])}</h3>
<table class="sentences"><caption>{html.escape(s["title"])} ({n-9}–{n})</caption><thead><tr><th scope="col">No.</th><th scope="col">English sentence</th><th scope="col">Hindi meaning</th><th scope="col">When to use</th></tr></thead><tbody>{rows_h}</tbody></table>
<p class="tip"><strong>Practice tip:</strong> {html.escape(s["tip"])}</p>
'''
    tables_md+=f'### {s["question"]}\n\n| No. | English sentence | Hindi meaning | When to use |\n|---|---|---|---|\n{rows_m}\n**Practice tip:** {s["tip"]}\n\n'
    if n==50:
        tables_html+=cta("middle","Want all 100 sentences in one printable sheet collection?","Download the free PDF: the same 100 sentences, Hindi meanings and usage notes, laid out for printing, plus a 10-day practice tracker.","Download the free PDF")+"\n"
        tables_md+="> **Want all 100 sentences in one printable sheet collection? [Download the free PDF](PDF_URL).**\n\n"
content=f'''
<p class="lead"><strong>This article gives you 100 daily use English sentences with Hindi meaning, grouped by situation: greetings, home, office, asking for help, shopping, travel, phone calls, feelings, polite requests and goodbyes.</strong> Each sentence shows the Hindi meaning in Devanagari and the moment you would actually say it. It is exactly 100 sentences, with no padding, checked against the PDF. You can also download the whole list as a free printable PDF, with a 10-day practice tracker, and keep it on your phone.</p>
<p>Learn five sentences a day, say them aloud, and use one in a real conversation the same day. That is the whole method, and it works for complete beginners (Pre-A1 to A2) who understand some English but hesitate to speak it.</p>
{H[0]}
<h2 id="why">Why should you learn daily use English sentences instead of single words?</h2>
<p>Knowing the words <em>help</em>, <em>you</em> and <em>please</em> is not the same as being able to say “Can you help me, please?” quickly when a stranger is waiting. Daily use sentences give you ready-made patterns, so you respond without building each sentence from scratch. If you want the grammar behind the patterns, our guide to <a href="{B}english-grammar-sentence-structure">English grammar sentence structure</a> explains how a simple sentence is put together, but you do not need it to start.</p>
<p>For Hindi-first learners, seeing the Hindi meaning next to the English sentence makes the first step easier. The goal is not to translate forever. The goal is to learn the pattern, say it a few times, and then use the English sentence on its own.</p>
<h2 id="list">What are the 100 most useful English sentences for daily use?</h2>
<p>The 100 most useful daily use English sentences are short, polite and practical: greetings such as “How are you?”, home sentences such as “The food is ready”, office sentences such as “I am working on it”, help requests such as “Please speak slowly”, and goodbyes such as “Take care”. The full list below is grouped into ten situations, with Hindi meanings and a note on when to use each one.</p>
{tables_html}
<h2 id="pdf">Where can I download the 100 daily use English sentences with Hindi meaning PDF?</h2>
<p>You can download the free PDF directly from this page, with no signup. It contains the same 100 sentences as the article, the Hindi meaning for each, the “when to use” note, and a 10-day practice tracker on the last page. It is an A4 printable with real, selectable Hindi text, so it reads clearly on a phone and prints cleanly at home.</p>
{cta("end","Save these 100 English sentences for everyday practice","Download your free printable PDF. English and Hindi side by side, grouped by situation, with a 10-day tracker.","Download your free printable PDF")}
<h2 id="beginners">Which English sentences are most useful for beginners?</h2>
<p>If you are a complete beginner, start with these ten daily use English sentences. They cover greeting someone, asking for help, slowing a conversation down and ending it politely, which is most of what a first conversation needs.</p>
<ol class="starter">
<li>How are you? — आप कैसे हैं?</li><li>I am fine, thank you. — मैं ठीक हूँ, धन्यवाद।</li><li>What are you doing? — आप क्या कर रहे हैं?</li><li>Where are you going? — आप कहाँ जा रहे हैं?</li><li>Can you help me? — क्या आप मेरी मदद कर सकते हैं?</li><li>I don’t understand. — मुझे समझ नहीं आया।</li><li>Please speak slowly. — कृपया धीरे बोलिए।</li><li>Can you repeat that, please? — क्या आप उसे दोबारा कह सकते हैं?</li><li>I will call you later. — मैं आपको बाद में कॉल करूँगा। / करूँगी।</li><li>Thank you for your help. — आपकी मदद के लिए धन्यवाद।</li>
</ol>
<p>Once these feel natural, move to the next ten. Our <a href="{B}unlock-confident-english-speaking-your-guide-to-daily-practice-and-learning-the-basics">beginner’s guide to daily English practice</a> shows how to build from here, and parents will find the home sentences again in our guide to <a href="{B}how-to-speak-english-fluently-in-parent-teacher-meetings-a-teachers-5-minute-daily-method">speaking confidently in parent-teacher meetings</a>.</p>
<h2 id="mistakes">What mistakes do Hindi speakers make with daily English sentences?</h2>
<p>These are not grammar-book errors. They are direct translations from Hindi that sound off to an interviewer or a client, and almost everyone makes them at first.</p>
<table class="mistakes"><caption>Seven common mistakes and the natural sentence</caption><thead><tr><th scope="col">Commonly said</th><th scope="col">Say this instead</th><th scope="col">Why</th></tr></thead><tbody>
<tr><td>I am having a fever.</td><td>I have a fever.</td><td>Verbs about states do not take the -ing form.</td></tr>
<tr><td>I have a doubt.</td><td>I have a question.</td><td>A doubt means you do not believe something.</td></tr>
<tr><td>Please revert back.</td><td>Please reply.</td><td>Revert means to go back to an earlier state.</td></tr>
<tr><td>What is your good name?</td><td>What is your name?</td><td>A direct translation of शुभ नाम; it confuses listeners outside India.</td></tr>
<tr><td>I am agree.</td><td>I agree.</td><td>Agree is already the verb, so it does not need am.</td></tr>
<tr><td>Discuss about it.</td><td>Discuss it.</td><td>Discuss does not take about.</td></tr>
<tr><td>Today morning I called.</td><td>This morning I called.</td><td>Use this morning, this evening, last night.</td></tr>
</tbody></table>
<p>If tenses are where you get stuck, our guide to <a href="{B}english-grammar-tenses">English grammar tenses</a> covers them properly.</p>
<h2 id="learn">How can I learn five English sentences every day?</h2>
<p>Pick five sentences from one section, read each aloud three times, change one word in each to make your own version, and use at least one in a real conversation before the day ends. Five sentences a day means the whole list in twenty days, and sentences you have actually said are the ones you remember.</p>
<h3>Step 1: Learn five sentences</h3><p>Pick only five each day, from one situation. For example: I am on my way. I will call you later. Can you help me? I don’t understand. Please speak slowly.</p>
<h3>Step 2: Say each sentence aloud</h3><p>Read each one several times, out loud, not silently. The goal is to make your mouth comfortable with the sentence. If particular sounds keep tripping you up, our guide on <a href="{B}english-pronunciation-difficulty">English pronunciation difficulty</a> covers the ones Hindi speakers find hardest.</p>
<h3>Step 3: Change the sentence</h3><p>Take one sentence and make variations. From “I am working on it” you get: I am working on the report. I am working on the project. I am working on my presentation. This teaches you patterns, not just sentences.</p>
<h3>Step 4: Use them in real conversations</h3><p>Use at least one new sentence during your day: with a colleague, while ordering food, with a shopkeeper, asking for directions, or at home. The more often you use a sentence, the easier it is to recall.</p>
<h2 id="translate">How can I stop translating every sentence from Hindi in my head?</h2>
<p>Translation helps you understand a sentence the first time, but speaking becomes slow if you translate every sentence while talking. The fix is to learn patterns, not single sentences. Instead of thinking “मुझे थोड़ा पानी चाहिए” and then “I need some water” each time, learn <em>I need…</em> as a ready-to-use pattern:</p>
<ul><li>I need some water.</li><li>I need some help.</li><li>I need some time.</li><li>I need some rest.</li></ul>
<p>After a week of saying the pattern aloud, the English comes first. This is why practising complete sentences works better than memorising isolated vocabulary.</p>
<h2 id="practice">How can I practise daily use English sentences at home?</h2>
<p>Practise at home by reading the sentences aloud, recording yourself on your phone, making your own variations, and using them in imaginary conversations: order food from an imaginary waiter, give directions to an imaginary auto driver. A speaking partner or a speaking-practice app adds the one thing you cannot give yourself: feedback. Our guide to <a href="{B}practice-spoken-english-alone-at-home">practising spoken English alone at home</a> has a full routine.</p>
<h3>A simple 15-minute daily practice routine</h3>
<ul><li><strong>5 minutes, read:</strong> read five to ten sentences from one section aloud.</li><li><strong>5 minutes, speak:</strong> make your own sentences using the same patterns.</li><li><strong>5 minutes, converse:</strong> use them in a short conversation with a partner or a speaking-practice tool.</li></ul>
<p>The aim is simple: understand, speak, repeat, use. For the longer arc beyond these 100 sentences, see our 4-step plan for <a href="{B}english-speaking-fluency">English speaking fluency</a> and the guide on <a href="{B}how-to-speak-english-fluently">how to speak English fluently</a>.</p>
<h2 id="speakx">How can you practise these sentences out loud with SpeakX?</h2>
<p>Reading English sentences helps you learn. Speaking them aloud helps you practise using them in real conversations. <a href="https://speakx.ai/">SpeakX</a> is an AI English speaking app for Indian learners: you talk to Sia, an AI speaking partner, on voice calls, and rehearse real-life roleplays such as job interviews, office conversations, parent-teacher meetings and phone calls. Explanations are available in Hindi and six other Indian languages, lessons take about 15 minutes a day, and a progress report tracks your fluency, vocabulary, grammar and pronunciation.</p>
<p>A good way to use it with this list: pick the section you practised today, then say those sentences to Sia in a roleplay. SpeakX is free to download and start; Premium has a 3-day trial for ₹2 and then costs ₹299 a month on the SpeakX website. Not sure which app to use? Our <a href="{B}best-english-speaking-apps-india-speakx-vs-competitors">comparison of English speaking apps in India</a> is honest about where each one fits. Preparing for an interview? Our guide to <a href="{B}how-to-improve-english-speaking-fluency-for-job-interviews-a-guide-for-indian-professionals">English speaking fluency for job interviews</a> takes these sentences further.</p>
<p><a class="app-cta" href="{INSTALL}" data-event="cta_click" data-cta-position="article_body">Practise these sentences with Sia on SpeakX</a></p>
<h2 id="faq">Frequently asked questions</h2>
<h3>Is the 100 daily use English sentences PDF free?</h3><p>Yes. The PDF is free, there is no signup or email required, and you can print it or save it on your phone. It has the same 100 sentences and Hindi meanings as this article, plus a 10-day practice tracker.</p>
<h3>What are some simple English sentences used at home?</h3><p>Simple English sentences used at home include “I am at home”, “Please come inside”, “The food is ready”, “Did you eat something?” and “I will be back soon”. Sentences 11 to 20 above cover the home, with Hindi meanings and when to say each one.</p>
<h3>How many daily use English sentences should I learn in a day?</h3><p>Five to ten a day is enough if you actually say them aloud and use one or two in real conversations. Using a sentence matters more than memorising a long list.</p>
<h3>Can these 100 sentences help me speak English fluently?</h3><p>They give you a foundation for everyday conversation, but memorising sentences alone does not create fluency. You also need regular speaking, listening, vocabulary and pronunciation practice. Our guide on <a href="{B}how-to-speak-english-fluently">how to speak English fluently</a> covers the full plan.</p>
<h3>Are the Hindi meanings literal translations?</h3><p>No. Each Hindi meaning is the natural way a Hindi speaker would say the same thing, not a word-for-word translation. Where the Hindi verb changes with the speaker, both forms are given, for example रहा हूँ / रही हूँ.</p>
<h3>Which English sentences should I use at the office?</h3><p>Start with “I am working on it”, “I will finish it today”, “I have a question”, “Could you explain this?” and “Let me check and get back to you”. Sentences 21 to 30 above cover office and workplace conversations.</p>
<h3>How can Hindi speakers improve their daily English conversations?</h3><p>Learn complete sentences instead of single words, say them aloud every day, make your own variations, and get feedback on how you sound from a partner, a teacher or a speaking-practice app. Avoid the seven direct-translation mistakes listed above.</p>
<h3>How can I practise these sentences if no one around me speaks English?</h3><p>Practise alone first: say each sentence aloud, record it on your phone and play it back, and run imaginary conversations with a shopkeeper or an auto driver. Then find one partner, a friend, a family member or a speaking app, for five minutes a day. Feedback on how you sound is the one thing solo practice cannot give you, which is why our <a href="{B}how-to-speak-english-fluently-for-village-people-in-bihar-a-7-day-confidence-framework">7-day confidence framework for Hindi-medium learners</a> pairs solo practice with one daily conversation.</p>
<h3>Should I use the formal or the casual form?</h3><p>The English sentences work in both formal and casual situations; English does not change “you” the way Hindi changes between आप and तुम. In the Hindi column we use the polite आप form, which is safe with anyone. With close friends or younger family you can switch the Hindi to तुम, but keep the same English sentence.</p>
<h3>Can I share or print the PDF?</h3><p>Yes. You can print it for yourself, your family or your class, and share the link to this page. Please link to this article rather than re-uploading the file so learners always get the latest version.</p>
'''
page_html=f'''<!-- Revised article body for {B}100-simple-english-sentences-for-daily-use-with-hindi-meaning (URL unchanged). Generated {datetime.date.today()} from data/sentences.json -->
<article class="post" lang="en">
<h1>100 Daily Use English Sentences with Hindi Meaning (Free PDF)</h1>
{content}
</article>'''
(ROOT/"article/article-body.html").write_text(page_html)
md_doc=f'''# 100 Daily Use English Sentences with Hindi Meaning (Free PDF)

**URL (unchanged):** https://speakx.ai/blog/100-simple-english-sentences-for-daily-use-with-hindi-meaning
**SEO title:** 100 Daily Use English Sentences with Hindi Meaning PDF | SpeakX
**Meta description:** 100 daily use English sentences with Hindi meaning, grouped by situation, with when to say each one. Free printable PDF, no signup, plus a 10-day tracker.

''' + "\n".join(html.unescape(x) for x in [content.replace(H[0],"> **Download Free PDF: 100 Daily Use English Sentences with Hindi Meaning** — Free printable PDF in English and Hindi. Save it on your phone or print it for daily practice. No signup required. [Download](PDF_URL)\n").replace(tables_html, tables_md)]).replace("PDF_URL", PDF_URL)
import re
md_doc=re.sub(r"<aside[\s\S]*?</aside>", lambda m: "> **"+re.sub(r"<[^>]+>"," ",m.group(0)).strip().split("\n")[0]+"** — [Download the free PDF]("+PDF_URL+")\n", md_doc)
md_doc=re.sub(r"<h2[^>]*>(.*?)</h2>", r"\n## \1\n", md_doc); md_doc=re.sub(r"<h3[^>]*>(.*?)</h3>", r"\n### \1\n", md_doc)
md_doc=re.sub(r"<a [^>]*href=\"([^\"]+)\"[^>]*>(.*?)</a>", r"[\2](\1)", md_doc); md_doc=re.sub(r"<li>(.*?)</li>", r"- \1", md_doc)
md_doc=re.sub(r"<tr><td>(.*?)</td><td>(.*?)</td><td>(.*?)</td></tr>", r"| \1 | \2 | \3 |", md_doc)
md_doc=re.sub(r"<thead>.*?</thead>", "| Commonly said | Say this instead | Why |\n|---|---|---|", md_doc, flags=re.S)
md_doc=re.sub(r"<[^>]+>", "", md_doc); md_doc=re.sub(r"\n{3,}", "\n\n", md_doc)
(ROOT/"article/article.md").write_text(md_doc)
words=len(re.sub(r"<[^>]+>"," ",content).split())
print("article html + md written; sentences:", n, "| body words:", words)
