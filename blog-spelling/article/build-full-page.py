import json, datetime, pathlib, re
ROOT=pathlib.Path(__file__).resolve().parents[1]
body=open(ROOT/"article/article-body.html").read(); css=open(ROOT/"implementation/download-cta.css").read(); js=open(ROOT/"implementation/analytics.js").read()
sd=json.load(open(ROOT/"implementation/structured-data.jsonld"))
for n in sd["@graph"]:
    for k in ("datePublished","dateModified"):
        if str(n.get(k,"")).startswith("SET-ON-PUBLISH"): n[k]=datetime.date.today().isoformat()+"T00:00:00.000Z"
meta=json.load(open(ROOT/"implementation/seo-metadata.json"))
TEST_PDF="https://nishthaspeakx.github.io/speakx_website/downloads/english-spelling-practice-sheet.pdf"
tmpl=open(ROOT.parent/"blog-100-sentences-marathi/article/article-full-page.html").read()
head=tmpl[:tmpl.index("<article")]; tail=tmpl[tmpl.index("<footer"):]
head=re.sub(r'<link[^>]*Noto\+Sans\+Devanagari[^>]*>\n?', '', head).replace("[lang=mr]{font-family:\"Noto Sans Devanagari\",system-ui,sans-serif}\n","").replace("100-sentences-marathi","english-spelling-rules")
head=re.sub(r"<title>.*?</title>", f"<title>{meta['seo_title']} | SpeakX</title>", head)
head=re.sub(r'<meta name="description" content="[^"]*">', f'<meta name="description" content="{meta["meta_description"]}">', head)
head=re.sub(r'<link rel="canonical" href="[^"]*">', f'<link rel="canonical" href="{meta["canonical"]}">', head)
head=re.sub(r'<meta property="og:title" content="[^"]*">', f'<meta property="og:title" content="{meta["og_title"]}">', head)
head=re.sub(r'<meta property="og:description" content="[^"]*">', f'<meta property="og:description" content="{meta["og_description"]}">', head)
head=re.sub(r'<meta property="og:url" content="[^"]*">', f'<meta property="og:url" content="{meta["canonical"]}">', head)
head=re.sub(r'<script type="application/ld\+json">.*?</script>', '<script type="application/ld+json">'+json.dumps(sd,ensure_ascii=False)+'</script>', head, flags=re.S)
head=re.sub(r'<div class="preview-note">.*?</div>\n', '', head, flags=re.S)
head=re.sub(r'/\* PDF download CTA used three times.*?(?=</style>)', css+"\n", head, flags=re.S)
head=re.sub(r'<!-- New post:.*?-->\n', '', head, flags=re.S)
tail=re.sub(r'<script>.*?</script>', '<script>'+js+'</script>', tail, flags=re.S)
by='<p class="byline">By <a href="https://speakx.ai/blog/author/supriya-manchanda">Supriya Manchanda</a> · SpeakX · Updated '+datetime.date.today().strftime('%d %B %Y')+' · ~14 min read</p>'
def doc(b, note): return head.replace("<body>\n","<body>\n"+note) + b.replace("</h1>","</h1>\n"+by,1) + "\n" + tail
open(ROOT/"article/article-full-page.html","w").write(doc(body,""))
shared=body.replace(meta["pdf"]["url"],TEST_PDF).replace(' download="english-spelling-practice-sheet.pdf"','')
open(ROOT/"article/article-shared.html","w").write(doc(shared,'<div class="preview-note">Shared preview of the revised article for speakx.ai/blog/english-spelling-practice. The PDF button points to a test copy; on speakx.ai it points to the article path.</div>\n'))
out=open(ROOT/"article/article-full-page.html").read()
print("full page bytes:", len(out), "| noto refs:", out.count("Noto"), "| marathi refs:", out.lower().count("marathi"), "| tamil refs:", out.lower().count("tamil"))
