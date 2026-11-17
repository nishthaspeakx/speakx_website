import json, base64, pathlib, subprocess, html, datetime, io
ROOT=pathlib.Path(__file__).resolve().parents[1]; PDF=ROOT/"pdf"; d=json.load(open(ROOT/"data/sentences.json"))
def b64(p): return base64.b64encode(open(p,"rb").read()).decode()
F=PDF/"fonts"
css_fonts=f"""@font-face{{font-family:'Figtree';src:url(data:font/ttf;base64,{b64(F/'Figtree-Regular.ttf')}) format('truetype');font-weight:400}}
@font-face{{font-family:'Figtree';src:url(data:font/ttf;base64,{b64(F/'Figtree-Bold.ttf')}) format('truetype');font-weight:700}}
@font-face{{font-family:'Noto Sans Devanagari';src:url(data:font/ttf;base64,{b64(F/'NotoSansDevanagari-Variable.ttf')}) format('truetype');font-weight:300 800}}"""
qr=b64(PDF/"qr-speakx-install.png"); logo=open(ROOT.parent/"speakx-vs/public/logos/speakx.svg").read()
ARTICLE="https://speakx.ai/blog/100-simple-english-sentences-for-daily-use-with-marathi-meaning"
n=0; body=""
for si,s in enumerate(d["sections"],1):
    rows=""
    for en,mr,tr,when in s["sentences"]:
        n+=1; rows+=f'<tr><td class="num">{n}</td><td class="en">{html.escape(en)}</td><td class="mr" lang="mr">{html.escape(mr)}</td><td class="tr">{html.escape(tr)}</td><td class="when">{html.escape(when)}</td></tr>'
    body+=f'''<section class="group"><h2><span class="gnum">{si}</span>{html.escape(s["title"])} <span class="gmr" lang="mr">{html.escape(s["marathi"])}</span></h2>
<table><thead><tr><th class="num">No.</th><th class="en">English sentence</th><th class="mr">Marathi meaning (मराठी अर्थ)</th><th class="tr">Transliteration</th><th class="when">When to use</th></tr></thead><tbody>{rows}</tbody></table>
<p class="tip"><strong>Practice tip:</strong> {html.escape(s["tip"])}</p></section>'''
days="".join(f'<tr><td>Day {i}</td><td>Sentences {10*(i-1)+1}–{10*i}</td><td class="box">☐ Read aloud</td><td class="box">☐ Made 2 variations</td><td class="box">☐ Used 1 today</td></tr>' for i in range(1,11))
page=f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><title>100 Daily Use English Sentences with Marathi Meaning | SpeakX</title>
<style>{css_fonts}
@page{{size:A4;margin:16mm 12mm 20mm 12mm}} *{{box-sizing:border-box}} html,body{{margin:0;padding:0}}
body{{font-family:'Figtree','Noto Sans Devanagari',sans-serif;color:#0a0b0f;font-size:9.8pt;line-height:1.35;-webkit-print-color-adjust:exact;print-color-adjust:exact}}
[lang=ta],.mr,.gmr{{font-family:'Noto Sans Devanagari','Figtree',sans-serif}}
.cover{{page-break-after:always;display:flex;flex-direction:column;min-height:255mm}}
.brand{{display:flex;align-items:center;gap:8px;margin-bottom:26mm}} .brand svg{{height:28px;width:auto}} .brand span{{color:#666673;font-size:9pt;letter-spacing:.08em;text-transform:uppercase}}
h1{{font-size:29pt;line-height:1.1;margin:0 0 6mm;letter-spacing:-.01em}} h1 .orange{{color:#ff4d00}}
.sub{{font-size:14pt;color:#4a4a5b;margin:0 0 6mm}} .sub-ta{{font-size:13pt;color:#4a4a5b;margin:0 0 12mm}}
.intro{{max-width:150mm;font-size:11pt;color:#4a4a5b}} .intro p{{margin:0 0 4mm}}
.how{{border:1px solid #eeeff4;border-left:4px solid #ff4d00;padding:5mm 6mm;margin:8mm 0 0;max-width:150mm}} .how h3{{margin:0 0 3mm;font-size:11.5pt}} .how ol{{margin:0;padding-left:5mm}} .how li{{margin-bottom:1.5mm}}
.contents{{margin-top:8mm;max-width:150mm}} .contents h3{{font-size:11.5pt;margin:0 0 2mm}} .contents ol{{columns:2;column-gap:10mm;margin:0;padding-left:5mm;font-size:10pt;color:#4a4a5b}}
.cover-foot{{margin-top:auto;font-size:9pt;color:#666673;border-top:1px solid #eeeff4;padding-top:3mm}}
.group{{page-break-inside:avoid;margin-bottom:6mm}}
h2{{font-size:13pt;margin:0 0 2.5mm;display:flex;align-items:baseline;gap:6px}} .gnum{{display:inline-block;background:#ff4d00;color:#fff;border-radius:999px;width:7mm;height:7mm;line-height:7mm;text-align:center;font-size:9.5pt}} .gmr{{font-weight:400;color:#666673;font-size:10pt}}
table{{width:100%;border-collapse:collapse;page-break-inside:avoid}} th{{text-align:left;font-size:8pt;letter-spacing:.04em;text-transform:uppercase;color:#666673;border-bottom:1.5px solid #0a0b0f;padding:1.5mm 1.6mm}} td{{padding:1.5mm 1.6mm;border-bottom:1px solid #eeeff4;vertical-align:top}}
td.num{{width:8mm;color:#ff4d00;font-weight:700}} td.en{{width:46mm;font-weight:700}} td.mr{{width:58mm;font-size:9.6pt}} td.tr{{width:44mm;color:#4a4a5b;font-size:8.8pt}} td.when{{color:#4a4a5b;font-size:8.6pt}}
.tip{{margin:2.5mm 0 0;font-size:9pt;color:#4a4a5b}} .tip strong{{color:#a53a06}}
.tracker{{page-break-before:always}} .tracker h2{{font-size:18pt;margin-bottom:3mm}} .tracker p{{color:#4a4a5b;max-width:150mm}} .tracker table td,.tracker table th{{padding:2.6mm 2mm;font-size:10pt}} .box{{color:#4a4a5b}}
.cta{{margin-top:12mm;border:1px solid #eeeff4;border-radius:4mm;padding:6mm;display:flex;gap:8mm;align-items:center;page-break-inside:avoid}} .cta img{{width:30mm;height:30mm}} .cta h3{{margin:0 0 2mm;font-size:13pt}} .cta p{{margin:0 0 2mm;font-size:10pt}} .cta small{{color:#666673;font-size:8.5pt}}
</style></head><body>
<section class="cover"><div class="brand">{logo}<span>English speaking app</span></div>
<h1>100 Daily Use English Sentences <span class="orange">with Marathi Meaning</span></h1>
<p class="sub">Free printable English speaking practice PDF</p>
<p class="sub-ta" lang="mr">रोजच्या वापरातील १०० इंग्रजी वाक्य, मराठी अर्थ आणि वापराच्या प्रसंगासह</p>
<div class="intro"><p>These are the sentences Indian learners use most in a normal day: greetings, home, office, shopping, travel, phone calls, feelings, requests and goodbyes. Each sentence comes with a natural Marathi meaning in the polite <span lang="mr">நீங்கள்</span> form, a simple transliteration, and the moment you would actually say it.</p></div>
<div class="how"><h3>How to use this printable</h3><ol><li>Learn five sentences a day. Cover the Marathi column and read each English line aloud three times.</li><li>Change one word to make your own sentence: <em>I am working on it</em> → <em>I am working on the report</em>.</li><li>Use at least one new sentence in a real conversation the same day.</li><li>Tick the 10-day tracker on the last page.</li></ol></div>
<div class="contents"><h3>Contents</h3><ol>{"".join(f"<li>{html.escape(s['title'])}</li>" for s in d["sections"])}</ol></div>
<div class="cover-foot">From the SpeakX article “100 Daily Use English Sentences with Marathi Meaning” · {ARTICLE} · Prepared {datetime.date.today().strftime('%B %Y')}</div></section>
{body}
<section class="tracker"><h2>10-day practice tracker</h2><p>Ten sentences a day for ten days. Tick each box when it is done. Speaking the sentence aloud counts; reading silently does not.</p>
<table><thead><tr><th>Day</th><th>Sentences</th><th>Read aloud 3×</th><th>Made variations</th><th>Used in real life</th></tr></thead><tbody>{days}</tbody></table>
<div class="cta"><img src="data:image/png;base64,{qr}" alt="QR code: get the SpeakX app"><div><h3>Next step: say these sentences out loud with SpeakX</h3><p>Reading sentences helps you learn them. Speaking them aloud helps you use them in real conversations. SpeakX is an AI English speaking app for Indian learners: practice on voice calls with an AI tutor, with explanations in Marathi and other Indian languages. Free to download and start.</p><small>Scan the code or visit <strong>speakx.ai</strong>. Made by Ivypods Technology, Gurugram.</small></div></div></section></body></html>'''
(PDF/"index.html").write_text(page)
out=PDF/"100-daily-use-english-sentences-with-marathi-meaning.pdf"
subprocess.run(["/Applications/Google Chrome.app/Contents/MacOS/Google Chrome","--headless=new","--disable-gpu","--no-pdf-header-footer","--print-to-pdf="+str(out),"--virtual-time-budget=4000",str(PDF/"index.html")],check=True,capture_output=True)
from pypdf import PdfReader, PdfWriter
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.pagesizes import A4
pdfmetrics.registerFont(TTFont("Figtree", str(F/"Figtree-Regular.ttf")))
r=PdfReader(str(out)); w=PdfWriter(); total=len(r.pages)
for i,pg in enumerate(r.pages,1):
    buf=io.BytesIO(); c=canvas.Canvas(buf,pagesize=A4); c.setFont("Figtree",8); c.setFillColorRGB(.4,.4,.45)
    c.drawString(12*72/25.4, 9*72/25.4, "SpeakX  ·  speakx.ai  ·  100 Daily Use English Sentences with Marathi Meaning"); c.drawRightString(A4[0]-12*72/25.4, 9*72/25.4, f"Page {i} of {total}"); c.save(); buf.seek(0)
    pg.merge_page(PdfReader(buf).pages[0]); w.add_page(pg)
w.add_metadata({"/Title":"100 Daily Use English Sentences with Marathi Meaning","/Author":"SpeakX (Ivypods Technology)","/Subject":"Free printable English speaking practice PDF with Marathi meanings","/Producer":"SpeakX"})
w.write(str(out)); print("pdf bytes:", out.stat().st_size, "| sentences:", n, "| pages:", total)
