import json, datetime, pathlib
ROOT=pathlib.Path(__file__).resolve().parents[1]
body=open(ROOT/"article/article-body.html").read(); css=open(ROOT/"implementation/download-cta.css").read(); js=open(ROOT/"implementation/analytics.js").read()
sd=json.load(open(ROOT/"implementation/structured-data.jsonld"))
for n in sd["@graph"]:
    for k in ("datePublished","dateModified"):
        if str(n.get(k,"")).startswith("SET-ON-PUBLISH"): n[k]=datetime.date.today().isoformat()+"T00:00:00.000Z"
meta=json.load(open(ROOT/"implementation/seo-metadata.json"))
TEST_PDF="https://nishthaspeakx.github.io/speakx_website/downloads/english-to-telugu-daily-use-sentences.pdf"
tmpl=open(ROOT.parent/"blog-100-sentences-tamil/article/article-full-page.html").read()
head=tmpl[:tmpl.index("<article")]; tail=tmpl[tmpl.index("<footer"):]
head=head.replace("Noto+Sans+Tamil","Noto+Sans+Telugu").replace('"Noto Sans Tamil"','"Noto Sans Telugu"').replace("[lang=ta]","[lang=te]").replace("100-sentences-tamil","100-sentences-telugu")
import re
head=re.sub(r"<title>.*?</title>", f"<title>{meta['seo_title']} | SpeakX</title>", head)
head=re.sub(r'<meta name="description" content="[^"]*">', f'<meta name="description" content="{meta["meta_description"]}">', head)
head=re.sub(r'<link rel="canonical" href="[^"]*">', f'<link rel="canonical" href="{meta["canonical"]}">', head)
head=re.sub(r'<meta property="og:title" content="[^"]*">', f'<meta property="og:title" content="{meta["og_title"]}">', head)
head=re.sub(r'<meta property="og:description" content="[^"]*">', f'<meta property="og:description" content="{meta["og_description"]}">', head)
head=re.sub(r'<meta property="og:url" content="[^"]*">', f'<meta property="og:url" content="{meta["canonical"]}">', head)
head=re.sub(r'<script type="application/ld\+json">.*?</script>', '<script type="application/ld+json">'+json.dumps(sd,ensure_ascii=False)+'</script>', head, flags=re.S)
head=re.sub(r'<div class="preview-note">.*?</div>\n', '', head, flags=re.S)
by='<p class="byline">By <a href="https://speakx.ai/blog/author/deepank-agarwal">Deepank Agarwal</a> · SpeakX · Updated '+datetime.date.today().strftime('%d %B %Y')+' · ~15 min read</p>'
def doc(b, note): return head.replace("<body>\n","<body>\n"+note) + b.replace("</h1>","</h1>\n"+by,1) + "\n" + tail
open(ROOT/"article/article-full-page.html","w").write(doc(body,""))
shared=body.replace(meta["pdf"]["url"],TEST_PDF).replace(' download="english-to-telugu-daily-use-sentences.pdf"','')
open(ROOT/"article/article-shared.html","w").write(doc(shared,'<div class="preview-note">Shared preview. Telugu text is a draft pending native-speaker verification. PDF buttons point to a test copy; on speakx.ai they point to the article path.</div>\n'))
print("full pages written; tamil chars in shared page:", len(re.findall(r"[஀-௿]", open(ROOT/"article/article-shared.html").read())))
