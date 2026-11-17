import json, re, html, datetime, pathlib
ROOT=pathlib.Path(__file__).resolve().parents[1]
URL="https://speakx.ai/blog/english-spelling-practice"; B="https://speakx.ai/blog/"
INSTALL="https://speakx.sng.link/Ed28z/npfq/4alj?utm_source=blog&utm_medium=article&utm_campaign=english-spelling-rules"
PDF_URL="https://speakx.ai/blog/english-spelling-practice/english-spelling-practice-sheet.pdf"
TITLE="English Spelling Rules and Practice: Hard Words, Hindi Tips"
DESC="English spelling rules with examples, 40 commonly misspelled words, Hindi-speaker tips, three self-tests and a 7-day plan for adults who write emails at work."
H1="English Spelling Rules and Practice: Write Correct Spelling Every Time"
ANSWER="To write correct spelling in English, learn the ten rules that cover most words, keep a personal list of the words you get wrong, say each word in syllables before you write it, and practice spelling for ten minutes a day with a self-test. Hindi speakers also need to unlearn the habit of spelling by sound, because English is not phonetic."

RULES=[
("Rule 1: i before e, except after c","believe, achieve, friend, receive, ceiling, deceive","The rule works when the sound is “ee”. After c, write ei: receive, receipt. Exceptions you will meet at work: weird, seize, their, foreign, height."),
("Rule 2: Drop the silent e before a vowel suffix","make → making, write → writing, hope → hoping, use → usable","Keep the e before a consonant suffix: hopeful, useless, safely. Keep it after a soft c or g before -able: noticeable, manageable."),
("Rule 3: Double the final consonant in short stressed syllables","stop → stopped, plan → planning, begin → beginning, occur → occurred","One vowel, one final consonant, stress on the last syllable: double it. Do not double when the stress is earlier: open → opening, visit → visited."),
("Rule 4: Change y to i after a consonant","apply → applied, happy → happiness, carry → carries","Keep the y before -ing (applying, carrying) and when a vowel comes before it: play → played, enjoy → enjoyed."),
("Rule 5: -tion, -sion and -cian follow the base word","inform → information, decide → decision, electric → electrician","Most nouns take -tion. Use -sion after d, s or when the base ends in -de or -mit: extend → extension, permit → permission. Use -cian for people."),
("Rule 6: Plurals that are not just -s","box → boxes, baby → babies, knife → knives, criterion → criteria","Add -es after s, x, ch, sh (buses, batches). Nouns ending in consonant + y take -ies. Watch Latin and Greek plurals used at work: data, criteria, media."),
("Rule 7: Silent letters are fixed, not optional","knowledge, debt, receipt, island, Wednesday, government","You cannot hear the k, b, p, s, d or n, so sound alone will not help. Learn these words by sight and by their roots: receipt comes from receive, debt from debit."),
("Rule 8: Prefixes do not change the base word","mis + spell = misspell, un + necessary = unnecessary, dis + appear = disappear","Keep both letters where the prefix ends with the letter the base starts with. This is why misspell has two s’s and unnecessary has two n’s."),
("Rule 9: -ful, -ly and -ness have fixed forms","careful (one l), carefully (two l’s), beautiful, happiness","The suffix -ful always has one l. Adding -ly to a word ending in l gives two l’s: real → really, final → finally."),
("Rule 10: British and American spellings are both correct, but pick one","colour / color, organise / organize, centre / center, programme / program","Indian offices mostly use British spelling. Whichever you choose, keep it consistent within one email or document, and match your company’s style guide if it has one."),
]
MISSPELLED=[
("recieve","receive","Rule 1: after c write ei. Memory hook: re-CEI-ve, the c eats i first."),
("seperate","separate","There is “a rat” in sep-A-RAT-e. Hindi speakers hear the second vowel as e; it is a."),
("definately","definitely","definite + ly. Say it as de-FIN-ite-ly; there is no a."),
("occured","occurred","Rule 3: stress on the last syllable, so double the r: occurred, occurring."),
("goverment","government","govern + ment. The n is silent in speech, so write from the root, not the sound."),
("enviroment","environment","environ + ment. The n before m is easy to drop; say en-VI-RON-ment slowly."),
("tommorow","tomorrow","One m, two r’s: to-mor-row."),
("untill","until","Until has one l; till has two. Many Hindi speakers copy till."),
("buisness","business","busy → business; the y becomes i, then -ness."),
("adress","address","Two d’s and two s’s: ad-dress."),
("neccessary","necessary","One c, two s’s. Hook: one Collar, two Sleeves."),
("acheive","achieve","Rule 1: i before e, and there is no c before it."),
("calender","calendar","Ends in -ar, like “similar”. A calender is a different machine."),
("grammer","grammar","Ends in -ar. Hindi speakers hear -er because the final vowel is weak."),
("writting","writing","Rule 2: write drops the e; the stress is not on the last syllable, so no doubling."),
("begining","beginning","Rule 3: be-GIN, stress on the last syllable, so double the n."),
("comming","coming","come drops the e; the first syllable is not stressed in the doubling sense, so one m."),
("truely","truly","true drops the e before -ly: truly. Also duly, wholly."),
("arguement","argument","argue drops the e before -ment: argument."),
("accomodate","accommodate","Two c’s and two m’s. Hook: it accommodates two of each."),
("persue","pursue","Pursue has two u’s: pur-sue. Pursuit also."),
("priviledge","privilege","No d. Hook: priv-i-LEGE, like college."),
("maintainance","maintenance","maintain changes to mainten-ance; the ai becomes e."),
("wich","which","Which starts with wh, like what, when, where."),
("liason","liaison","Three vowels in a row: li-ai-son."),
("colleauge","colleague","col-league, like the sports league."),
("embarass","embarrass","Two r’s and two s’s."),
("existance","existence","Ends in -ence, like difference and reference."),
("independant","independent","Ends in -ent, like student and dependent."),
("aquire","acquire","ac + quire; the c is silent but required."),
("concious","conscious","con-SCI-ous. Science is hidden inside it."),
("recomend","recommend","re + commend; two m’s."),
("sincerly","sincerely","sincere + ly keeps the e."),
("schedual","schedule","Ends in -ule, like module and rule."),
("fourty","forty","Four becomes forty, without the u. Fourteen keeps it."),
("ninty","ninety","Nine keeps its e: ninety."),
("lenght","length","Long → length; the g comes before the t."),
("heigth","height","high → height; the h is at the end."),
("quater","quarter","quart-er, like the measure quart."),
("sucess","success","Two c’s and two s’s: suc-cess."),
]
PLAN=[("Day 1","Learn Rules 1 to 3 and write five example words for each from memory.","15 words"),("Day 2","Learn Rules 4 to 6. Proofread one old email of yours and mark every spelling you doubted.","15 words + 1 email"),("Day 3","Learn Rules 7 to 10. Start your personal mistake list with the words from the table above that you get wrong.","your list"),("Day 4","Self-test 1: cover the correct column of the table, write all 40 words, check.","40 words"),("Day 5","Practice spelling with a partner or app: have ten words dictated, write them, check.","10 words"),("Day 6","Write one short work email using ten words from your mistake list, then proofread it with the five-check method.","1 email"),("Day 7","Self-test 2: the 40 words again, plus your own list. Keep only the ones you missed; they are next week’s list.","40 + your list")]
FAQS=[
("What are the 5 basic spelling rules in English?","The five rules that fix the most mistakes are: i before e except after c (believe, receive); drop the silent e before a vowel suffix (make, making); double the final consonant in a stressed short syllable (begin, beginning); change y to i after a consonant (apply, applied); and keep the base word when you add a prefix (mis + spell = misspell). The full list of ten rules above adds plurals, silent letters, -tion/-sion, fixed suffixes and British versus American spelling."),
("How can I practice spelling as an adult?","Keep a personal list of words you actually get wrong, test yourself on it twice a week by covering the correct spelling and writing the words, have someone dictate ten words a day, and proofread one real email daily. Ten minutes a day beats an hour on Sunday, and words from your own emails stick better than random lists."),
("How do I write correct spelling in English?","Say the word in syllables, think of the rule it follows, picture the word, write it, then check it against a dictionary or your list. Over a few weeks the checking step disappears for the words you use most. The six-step method above walks through this."),
("Which are the most difficult spellings in English?","Words with silent letters (knowledge, receipt, government), double letters (accommodate, necessary, embarrass), and endings that sound alike (-ance/-ence, -ar/-er) cause the most mistakes. The table of 40 commonly misspelled words above covers the ones that appear most in work emails."),
("Why is English spelling hard for Hindi speakers?","Spelling (वर्तनी, vartani) in Hindi follows the sound, so Hindi speakers naturally spell English by sound too. English is not phonetic: the same sound has several spellings (receive, believe, key) and many letters are silent. The fix is to learn the rules and the common exceptions by sight, not to listen harder."),
("Does spelling matter in work emails?","Yes. A misspelled word in a client email or a job application is the first thing many readers notice, and it suggests the rest was not checked. Correct spelling will not win the deal on its own, but a misspelled one can lose attention before your point lands. Spell-check does not catch real-word errors such as form for from or than for then, so a final read is still needed."),
("Should I use British or American spelling in India?","Either is correct. Most Indian companies, government forms and newspapers use British spelling (colour, organise, centre). Pick one, keep it consistent in a document, and follow your company’s style if it has one. Set your email and phone keyboard to the same variety so autocorrect helps instead of fighting you."),
("Can an app help me practice spelling?","Yes, for dictation and self-tests. Any app that reads a word aloud and checks what you type works as a practice partner. SpeakX is a speaking app rather than a spelling app, but saying words aloud in its lessons helps you hear syllables you were dropping, which is where many spelling mistakes start."),
]
rules_html="".join(f'<h3 id="rule-{i}">{html.escape(t)}</h3><p class="ex"><strong>Examples:</strong> {html.escape(ex)}</p><p>{html.escape(note)}</p>' for i,(t,ex,note) in enumerate(RULES,1))
miss_rows="".join(f'<tr><td class="wrong">{w}</td><td class="right">{r}</td><td>{html.escape(tip)}</td></tr>' for w,r,tip in MISSPELLED)
plan_rows="".join(f'<tr><th scope="row">{d}</th><td>{t}</td><td>{n}</td></tr>' for d,t,n in PLAN)
body=f'''
<p class="lead"><strong>English spelling rules are the fastest way to fix spelling for good, because a rule covers hundreds of words while a word list covers only itself.</strong> This guide gives Hindi-medium adults and working professionals the ten rules that matter, the 40 words most often misspelled in Indian work emails, the mistakes that come specifically from thinking in Hindi, a six-step method to write correct spelling, and a 7-day practice plan with self-tests you can do in ten minutes a day.</p>
<p>{ANSWER}</p>

<h2 id="why-hard">Why is English spelling hard for Hindi speakers?</h2>
<p>Hindi is written the way it sounds; English is not. If you learned to write in Devanagari, you learned that a word is spelled by listening to it, and that habit works against you in English. “Receive”, “believe” and “key” share one sound and three spellings. “Knowledge”, “debt” and “receipt” contain letters nobody says. “Grammar” and “calendar” sound as if they end in -er. Spelling by ear produces recieve, seperate and tommorow, which are the three most common errors in Indian office email.</p>
<p>The good news is that English spelling is irregular, not random. About ten rules explain most words, and the exceptions that matter at work fit on one page. Learn the rules, keep a list of your own exceptions, and spelling stops being a daily guess.</p>

<h2 id="rules">The 10 English spelling rules that cover most words</h2>
<p>These are the rules worth memorising. Each one comes with the examples you are most likely to type at work and the exceptions you should know.</p>
{rules_html}

<h2 id="misspelled">40 commonly misspelled words in English (and how to remember them)</h2>
<p>These are the difficult spellings in English that appear most in emails, forms and job applications from Indian professionals. Cover the middle column, write each word from the first column correctly, then check. Each row gives the rule or a memory hook.</p>
<table class="misspelled"><caption>Commonly misspelled words: wrong spelling, correct spelling, and the rule or hook</caption><thead><tr><th scope="col">Often written as</th><th scope="col">Correct spelling</th><th scope="col">Rule or memory hook</th></tr></thead><tbody>{miss_rows}</tbody></table>
<p>Keep your own copy of this table and add the words you get wrong. A personal list of twenty words you actually use is worth more than any list of a thousand.</p>

<h2 id="hindi-tips">Spelling tips for Hindi speakers</h2>
<p>Spelling is वर्तनी (vartani) in Hindi, and in Hindi it is almost automatic because the script records every sound. These English mistakes are not about carelessness; they come from Hindi phonology meeting English spelling. Knowing the cause makes the fix stick.</p>
<ul>
<li><strong>Weak final vowels: -ar, -er, -or.</strong> In speech these endings sound the same (grammar, teacher, doctor), and Hindi gives no clue. Learn them in groups: -ar words (grammar, calendar, similar, regular), -or words (doctor, author, visitor, monitor). Everything else is usually -er.</li>
<li><strong>Double letters you cannot hear.</strong> Hindi marks a doubled consonant with a visible sign (क्क); English does not change the sound much. Address, necessary, accommodate, committee, occurred: learn these as pictures, and use Rule 3 for the ones that come from adding a suffix.</li>
<li><strong>v and w.</strong> Hindi has one sound (व) for both letters, so very, wary, vest and west get mixed. Remember that English w words are usually old everyday words (water, work, week, window) and v words are often from Latin or French (value, visit, very, vacancy).</li>
<li><strong>s, sh and c.</strong> Words like decision, precision and conscious have a “sh” sound spelled with s, c or sc. Hindi speakers often write them with sh. Rule 5 helps: decide → decision, not decishion.</li>
<li><strong>Silent letters.</strong> Hindi writes every sound, so a silent k, b or p feels wrong. Write silent-letter words from their roots: debt from debit, receipt from receive, sign from signature, where the letter is pronounced.</li>
<li><strong>Loanwords that look Hindi-shaped.</strong> Words that Hindi has borrowed are often respelled in Hinglish: “collage” for college, “schedual” for schedule, “restaurent” for restaurant. The English spelling is fixed; check it once and add it to your list.</li>
<li><strong>SMS spellings leaking into formal mail.</strong> pls, u, ur, thru, tmrw and 2moro are fine in a chat with friends and wrong in a work email. Type the full word every time in email, even to colleagues; the habit is what matters.</li>
<li><strong>Translating the sound of a Hindi word.</strong> When you think “पता” and write “address”, you are translating meaning, not sound, so keep it that way. The error appears when you write an English word the way you would transliterate it into Devanagari (for example “enviroment” because the second n is barely said). Say the word in slow syllables before writing it.</li>
</ul>

<h2 id="method">How to write correct spelling in English: a six-step method</h2>
<p>Use this every time you are unsure of a word. It takes a few seconds and it trains the habit that eventually makes checking unnecessary.</p>
<ol class="steps">
<li><strong>Say it in syllables.</strong> en-vi-ron-ment, gov-ern-ment, def-i-nite-ly. Most dropped letters live in the syllable you swallow when speaking fast.</li>
<li><strong>Ask which rule applies.</strong> Suffix added? Check Rules 2, 3, 4 and 9. “ee” sound? Rule 1. Noun from a verb? Rule 5.</li>
<li><strong>Picture the word.</strong> Close your eyes and see it written. Words you read often are stored as shapes; the shape will usually tell you if an ending looks wrong.</li>
<li><strong>Write it, then read it backwards.</strong> Reading a word letter by letter from the end stops your brain from auto-correcting what it expects to see.</li>
<li><strong>Check it once, properly.</strong> Use a dictionary or your own list, not a guess. Set the spell-check language in Gmail, Outlook, Word and your phone keyboard to English (India) or English (UK) so it stops flagging British spellings and starts catching real errors. Autocorrect still misses a correctly spelled wrong word (form / from, than / then, their / there); the list below covers those.</li>
<li><strong>Use it the same day.</strong> Put the word in a real sentence, ideally in an email you are sending anyway. A word used is a word remembered.</li>
</ol>

<h3 id="spellcheck-misses">Mistakes spell-check will not catch</h3>
<p>These are real words, so no red line appears. They reach your manager’s inbox more often than any misspelling. Check them by meaning, not by sound.</p>
<ul>
<li><strong>their / there / they’re:</strong> their report (belongs to them), over there (place), they’re late (they are).</li>
<li><strong>then / than:</strong> then is time (first this, then that); than compares (better than).</li>
<li><strong>lose / loose:</strong> lose a client (one o); a loose screw (two o’s).</li>
<li><strong>affect / effect:</strong> affect is the verb (it affects sales); effect is the noun (the effect on sales).</li>
<li><strong>principal / principle:</strong> principal is the main one or the head of a college; a principle is a rule.</li>
<li><strong>complement / compliment:</strong> complement completes (the chart complements the data); a compliment is praise.</li>
<li><strong>form / from:</strong> the most common typo in Indian email; read the sentence aloud and it jumps out.</li>
<li><strong>its / it’s:</strong> it’s only ever means it is or it has; its shows belonging.</li>
<li><strong>advice / advise:</strong> advice is the noun (take my advice); advise is the verb (please advise).</li>
<li><strong>stationary / stationery:</strong> stationary means not moving; stationery is pens and paper (e for envelope).</li>
</ul>

<h2 id="practice">Practice spelling: five exercises you can do in ten minutes</h2>
<p>Practicing spelling only works when you test recall, not recognition. Reading a list feels productive but changes nothing; writing from memory and checking is what moves a word into long-term memory. Use these five exercises, ten minutes a day.</p>
<ol>
<li><strong>Cover-and-write.</strong> Cover the “correct spelling” column of the table above, write the 40 words, check, and mark the misses. Repeat the misses the next day.</li>
<li><strong>Dictation by a partner or an app.</strong> Have a colleague, a family member or a text-to-speech app read ten words aloud while you write them. This is the exercise most adults never do after school, and it is the most effective one.</li>
<li><strong>Proofread one real email.</strong> Before you hit send, read it once only for spelling, backwards from the last word. Add anything you doubted to your list, even if it turned out right.</li>
<li><strong>Rule-of-the-day.</strong> Pick one rule, find five words in your own writing that use it, and write each one three times with the rule in mind.</li>
<li><strong>The personal list.</strong> Keep a note on your phone of every word you have ever got wrong at work. Test yourself on the whole list every Sunday; words you spell right three times in a row graduate off it.</li>
</ol>
<h3 id="test-1">Self-test 1: spot the misspelled word</h3>
<p>In each row one word is spelled wrong. This is the format used in SSC, bank and other competitive exams, and it trains the eye you need for proofreading. Answers are at the end of the section.</p>
<ol class="mcq">
<li>(a) receive (b) believe (c) acheive (d) ceiling</li>
<li>(a) separate (b) definately (c) necessary (d) occurred</li>
<li>(a) calendar (b) grammar (c) similar (d) regulor</li>
<li>(a) buisness (b) address (c) schedule (d) colleague</li>
<li>(a) beginning (b) writing (c) comming (d) planning</li>
<li>(a) government (b) enviroment (c) argument (d) judgment</li>
<li>(a) truly (b) sincerely (c) fourty (d) ninety</li>
<li>(a) accommodate (b) recommend (c) embarrass (d) occassion</li>
<li>(a) maintenance (b) existence (c) independant (d) difference</li>
<li>(a) privilege (b) liaison (c) conscious (d) persue</li>
</ol>
<h3 id="test-2">Self-test 2: fix this email</h3>
<p>This email has eight spelling mistakes. Find them and write the correct spellings before you look at the answers.</p>
<blockquote class="email"><p>Dear Sir,</p><p>I am writting to confirm that I have recieved the documents you sent on Wedensday. The maintainance team will begin work tommorow, and the schedual is attached for your reference. Kindly let me know if any further information is neccessary.</p><p>Sincerly,<br>Rohan</p></blockquote>
<details class="answers"><summary>Answers to both self-tests</summary>
<p><strong>Self-test 1:</strong> 1 (c) achieve · 2 (b) definitely · 3 (d) regular · 4 (a) business · 5 (c) coming · 6 (b) environment · 7 (c) forty · 8 (d) occasion · 9 (c) independent · 10 (d) pursue.</p>
<p><strong>Self-test 2:</strong> writing, received, Wednesday, maintenance, tomorrow, schedule, necessary, Sincerely.</p>
</details>
<aside class="pdf-cta" data-cta-position="practice" aria-labelledby="pdf-cta-practice"><h3 id="pdf-cta-practice">Free English spelling practice sheet (PDF)</h3><p>The 40 words as a cover-and-write test, the ten rules on one page, and a blank personal mistake list. Print it or save it on your phone. No signup.</p><a class="pdf-cta__button" href="{PDF_URL}" download="english-spelling-practice-sheet.pdf" data-event="pdf_download" data-cta-position="practice" data-pdf-filename="english-spelling-practice-sheet.pdf">Download the spelling practice sheet</a><small>2 A4 pages · free · no signup required</small></aside>

<h2 id="plan">A 7-day English spelling practice plan</h2>
<p>One week is enough to learn the rules and build the habit; after that, the personal list does the work. Each day is ten to fifteen minutes.</p>
<table class="plan"><caption>7-day plan</caption><thead><tr><th scope="col">Day</th><th scope="col">Task</th><th scope="col">Words</th></tr></thead><tbody>{plan_rows}</tbody></table>
<p>Spelling and grammar reinforce each other: if a sentence feels wrong but the spelling is right, our guide to <a href="{B}english-grammar-sentence-structure">English grammar sentence structure</a> is the next read, and the <a href="{B}english-grammar-tenses">English tenses guide</a> covers the verb endings (-ed, -ing) that Rules 2 and 3 depend on.</p>

<h2 id="speakx">Say the words you write: where SpeakX fits</h2>
<p>Many spelling mistakes start in the mouth. If you say “goverment” and “enviroment”, you will write them that way. SpeakX is an AI English speaking app for Indian learners: you practise speaking on voice calls with an AI tutor, with explanations in Hindi and six other Indian languages, and a progress report that shows how your pronunciation is landing. Saying a word correctly in syllables, every day, is the first step of the six-step method above, and the <a href="{B}english-pronunciation-difficulty">English pronunciation difficulty</a> guide covers the sounds Hindi speakers find hardest. Spelling practice stays on this page; SpeakX is where the words get spoken.</p>
<p><a class="app-cta" href="{INSTALL}" data-event="cta_click" data-cta-position="article_body">Practise saying these words on SpeakX</a></p>
<p>For the sentences you will use these words in, see <a href="{B}100-simple-english-sentences-for-daily-use-with-hindi-meaning">100 daily use English sentences with Hindi meaning</a>, and for the emails and interviews where spelling matters most, our guide to <a href="{B}english-interview-questions-and-answers-for-corporate-professionals-a-speaking-confidence-guide">English for corporate interviews</a>.</p>

<h2 id="faq">Frequently asked questions</h2>
{"".join(f"<h3>{html.escape(q)}</h3><p>{html.escape(a)}</p>" for q,a in FAQS)}
'''
article=f'''<!-- Revised body for {URL} (URL unchanged). Generated {datetime.date.today()}. Replaces the previous "Everything You Need to Know" version; all unsourced statistics removed. -->
<article class="post" lang="en-IN">
<h1>{H1}</h1>
{body}
</article>'''
def us(t):
    parts=re.split(r'(https?://[^\s"\')]+)', t)
    return "".join(p if p.startswith("http") else re.sub(r"\b(P|p)ractis(e|es|ed|ing)\b", r"\1ractic\2", re.sub(r"\b(M|m)emoris(e|es|ed|ing)\b", r"\1emoriz\2", p)) for p in parts)
article=us(article); FAQS=[(q,us(a)) for q,a in FAQS]
(ROOT/"article/article-body.html").write_text(article)
schema={"@context":"https://schema.org","@graph":[
 {"@type":"Article","@id":URL+"#article","headline":H1,"description":DESC,"inLanguage":"en-IN","mainEntityOfPage":URL,
  "author":{"@type":"Person","name":"Supriya Manchanda","url":"https://speakx.ai/blog/author/supriya-manchanda"},
  "publisher":{"@type":"Organization","@id":"https://speakx.ai/#organization","name":"SpeakX","url":"https://speakx.ai/"},
  "datePublished":"2026-04-20T02:00:04.037Z","dateModified":"SET-ON-PUBLISH (ISO 8601)",
  "audience":{"@type":"Audience","audienceType":"Hindi-medium adults and working professionals in India who write English at work"},
  "about":["English spelling rules","Commonly misspelled words","Spelling practice"],
  "hasPart":{"@type":"DigitalDocument","name":"English spelling practice sheet (PDF)","url":PDF_URL,"encodingFormat":"application/pdf","isAccessibleForFree":True}},
 {"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"SpeakX","item":"https://speakx.ai/"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://speakx.ai/blog"},{"@type":"ListItem","position":3,"name":"English Spelling Rules and Practice","item":URL}]},
 {"@type":"FAQPage","mainEntity":[{"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}} for q,a in FAQS]}
]}
(ROOT/"implementation/structured-data.jsonld").write_text(json.dumps(schema,ensure_ascii=False,indent=2))
meta={"url":URL,"url_change":"none","seo_title":TITLE,"seo_title_length":len(TITLE),"meta_description":DESC,"meta_description_length":len(DESC),"h1":H1,"canonical":URL,"robots":"index, follow","og_title":H1,"og_description":DESC,
 "previous":{"title":"English Spelling Practice — Everything You Need to Know","h1":"same","problem":"Title and body repeat the phrase 'english spelling practice' ~30 times, contain no rules, no misspelled-word list and no actual practice material; several statistics are unsourced (British Council 60%/67%/74%, National Literacy Trust 40%/43%, '10,000+ learners', 'SpeakX learners report… 40%') and have been removed; impressions fell from 2,663 to 1,419 in a week at position ~8; 'practice spelling' and 'practicing spelling' had 0 clicks from 224 impressions because the page offered nothing to practice with."},
 "keyword_placement":{"Title / H1 / first sentence / H2":"english spelling rules (1,600/mo, KD 23)","H2 'Practice spelling: five exercises' + plan + PDF":"practice spelling (6,600/mo, KD 50) and 'practicing spelling' (the phrase opens that section)","H2 '40 commonly misspelled words'":"difficult spellings in english (880/mo, KD 26) — phrase used in the section lead","Title / plan H2 / PDF name":"english spelling practice (590/mo, KD 38)","H2 'How to write correct spelling in English'":"how to write correct spelling in english (320/mo, KD 25)","H2 'Why is English spelling hard for Hindi speakers' + tips":"Hindi-speaker angle (no verified volume; differentiator)"},
 "pdf":{"url":PDF_URL,"filename":"english-spelling-practice-sheet.pdf","host_rule":"Host on speakx.ai under the article path; X-Robots-Tag: noindex; not in the sitemap.","content_type":"application/pdf"},
 "internal_links_out":[{"anchor":"English grammar sentence structure","href":B+"english-grammar-sentence-structure"},{"anchor":"English tenses guide","href":B+"english-grammar-tenses"},{"anchor":"English pronunciation difficulty","href":B+"english-pronunciation-difficulty"},{"anchor":"100 daily use English sentences with Hindi meaning","href":B+"100-simple-english-sentences-for-daily-use-with-hindi-meaning"},{"anchor":"English for corporate interviews","href":B+"english-interview-questions-and-answers-for-corporate-professionals-a-speaking-confidence-guide"},{"anchor":"Practise saying these words on SpeakX (CTA)","href":INSTALL}],
 "removed_links":[{"href":B+"english-speaking-fluency","reason":"301-redirects to /blog/how-to-speak-english-fluently; replaced"}],
 "internal_links_in":[{"from":B+"english-grammar-sentence-structure","anchor":"English spelling rules and commonly misspelled words"},{"from":B+"english-grammar-tenses","anchor":"spelling rules for -ed and -ing endings"},{"from":B+"english-pronunciation-difficulty","anchor":"spelling tips for Hindi speakers"},{"from":B+"english-interview-questions-and-answers-for-corporate-professionals-a-speaking-confidence-guide","anchor":"commonly misspelled words in work emails"},{"from":B+"100-simple-english-sentences-for-daily-use-with-hindi-meaning","anchor":"English spelling rules and practice"},{"from":B+"how-to-speak-english-fluently","anchor":"a 7-day spelling practice plan"}],
 "images":[{"placement":"hero","alt":"Working professional proofreading an English email on a laptop"},{"placement":"rules","alt":"Ten English spelling rules with examples on one card"},{"placement":"practice","alt":"Free English spelling practice sheet with a 40-word self-test"}],
 "notes":["US spelling in prose (practice as a verb) per the site decision; the British/American spelling section explains the choice to readers.","No statistics are used. The previous version's unsourced figures were removed rather than re-sourced.","Author kept as Supriya Manchanda (author page live); datePublished kept, dateModified to be set on publish.","FAQ schema text matches the visible FAQ word for word."]}
(ROOT/"implementation/seo-metadata.json").write_text(json.dumps(meta,ensure_ascii=False,indent=2))
json.dump({"rules":RULES,"misspelled":MISSPELLED,"plan":PLAN},open(ROOT/"pdf/content.json","w"),ensure_ascii=False,indent=1)
words=len(re.sub(r"<[^>]+>"," ",re.sub(r"<table[\s\S]*?</table>","",article)).split()); total=len(re.sub(r"<[^>]+>"," ",article).split())
print("words (no tables):", words, "| total:", total, "| title", len(TITLE), "| desc", len(DESC), "| rules", len(RULES), "| misspelled", len(MISSPELLED), "| faqs", len(FAQS))
md=re.sub(r'<aside[\s\S]*?</aside>', "> **Free English spelling practice sheet (PDF)** — ["+PDF_URL+"]("+PDF_URL+")\n", article)
md=re.sub(r'<h2[^>]*>(.*?)</h2>', r'\n## \1\n', md); md=re.sub(r'<h3[^>]*>(.*?)</h3>', r'\n### \1\n', md); md=re.sub(r'<caption>(.*?)</caption>', r'\n**\1**\n', md)
md=re.sub(r'<tr><td class="wrong">(.*?)</td><td class="right">(.*?)</td><td>(.*?)</td></tr>', r'| \1 | \2 | \3 |', md); md=re.sub(r'<tr><th scope="row">(.*?)</th><td>(.*?)</td><td>(.*?)</td></tr>', r'| \1 | \2 | \3 |', md)
md=re.sub(r'<thead>.*?</thead>', lambda m: "| Often written as | Correct spelling | Rule or memory hook |\n|---|---|---|" if "Often" in m.group(0) else "| Day | Task | Words |\n|---|---|---|", md, flags=re.S)
md=re.sub(r'<a [^>]*href="([^"]+)"[^>]*>(.*?)</a>', r'[\2](\1)', md); md=re.sub(r'<li>(.*?)</li>', r'- \1', md); md=html.unescape(re.sub(r'\n{3,}','\n\n',re.sub(r'<[^>]+>','',md)))
(ROOT/"article/article.md").write_text(f"**URL (unchanged):** {URL}\n**Title tag:** {TITLE}\n**Meta description:** {DESC}\n\n{md}")
