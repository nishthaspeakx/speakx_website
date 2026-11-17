import json, base64, pathlib, subprocess, html, datetime, io
ROOT=pathlib.Path(__file__).resolve().parents[1]; PDF=ROOT/"pdf"; d=json.load(open(PDF/"content.json"))
def b64(p): return base64.b64encode(open(p,"rb").read()).decode()
F=PDF/"fonts"
fonts=f"""@font-face{{font-family:'Figtree';src:url(data:font/ttf;base64,{b64(F/'Figtree-Regular.ttf')}) format('truetype');font-weight:400}}
@font-face{{font-family:'Figtree';src:url(data:font/ttf;base64,{b64(F/'Figtree-Bold.ttf')}) format('truetype');font-weight:700}}"""
qr=b64(PDF/"qr-speakx-install.png"); logo=open(ROOT.parent/"speakx-vs/public/logos/speakx.svg").read()
ARTICLE="https://speakx.ai/blog/english-spelling-practice"
half=len(d["misspelled"])//2
def col(rows,start): return "".join(f'<tr><td class="n">{start+i}</td><td class="w">{w}</td><td class="line"></td><td class="chk">☐</td></tr>' for i,(w,r,t) in enumerate(rows))
rules="".join(f'<li><strong>{html.escape(t.split(": ",1)[1])}.</strong> {html.escape(ex)}</li>' for t,ex,n in d["rules"])
answers="".join(f'<span><b>{i}</b> {r}</span>' for i,(w,r,t) in enumerate(d["misspelled"],1))
blank="".join('<tr><td class="n">&nbsp;</td><td class="line"></td><td class="line"></td><td class="chk3">☐ ☐ ☐</td></tr>' for _ in range(12))
page=f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><title>English Spelling Practice Sheet | SpeakX</title><style>{fonts}
@page{{size:A4;margin:14mm 12mm 18mm 12mm}} *{{box-sizing:border-box}} html,body{{margin:0;padding:0}}
body{{font-family:'Figtree',sans-serif;color:#0a0b0f;font-size:10pt;line-height:1.35;-webkit-print-color-adjust:exact;print-color-adjust:exact}}
.brand{{display:flex;align-items:center;gap:8px;margin-bottom:5mm}} .brand svg{{height:22px;width:auto}} .brand span{{color:#666673;font-size:8.5pt;letter-spacing:.08em;text-transform:uppercase}}
h1{{font-size:20pt;line-height:1.1;margin:0 0 2mm;letter-spacing:-.01em}} h1 .o{{color:#ff4d00}} .sub{{color:#4a4a5b;margin:0 0 5mm;font-size:10.5pt}}
h2{{font-size:12.5pt;margin:4mm 0 1.5mm}} .two{{display:flex;gap:8mm}} .two>div{{flex:1}}
table{{width:100%;border-collapse:collapse}} td{{padding:1.05mm 1.5mm;border-bottom:1px solid #eeeff4;vertical-align:bottom}} td.n{{width:7mm;color:#ff4d00;font-weight:700}} td.w{{width:30mm;color:#b42318;text-decoration:line-through}} td.line{{border-bottom:1px solid #9a9aa6}} td.chk{{width:9mm;color:#666673;text-align:right}} td.chk3{{width:18mm;color:#666673;text-align:right;white-space:nowrap}}
.hint{{font-size:9pt;color:#4a4a5b;margin:2mm 0 0}}
.p2{{page-break-before:always}} .p2 ~ table td{{padding:2.2mm 1.5mm}} ol.rules{{margin:0;padding-left:5mm;columns:2;column-gap:8mm;font-size:8.8pt;line-height:1.28;color:#4a4a5b}} ol.rules li{{margin-bottom:1.4mm;break-inside:avoid}} ol.rules strong{{color:#0a0b0f}}
.answers{{font-size:8.2pt;color:#4a4a5b;columns:4;column-gap:4mm;margin-top:2mm}} .answers span{{display:block}} .answers b{{color:#ff4d00}}
.cta{{margin-top:6mm;border:1px solid #eeeff4;border-radius:4mm;padding:4mm 5mm;display:flex;gap:6mm;align-items:center;page-break-inside:avoid}} .cta img{{width:24mm;height:24mm}} .cta h3{{margin:0 0 1.5mm;font-size:11.5pt}} .cta p{{margin:0 0 1.5mm;font-size:9.5pt;color:#4a4a5b}} .cta small{{color:#666673;font-size:8pt}}
</style></head><body>
<div class="brand">{logo}<span>English speaking app</span></div>
<h1>English Spelling <span class="o">Practice Sheet</span></h1>
<p class="sub">Self-test: each word below is spelled wrong. Write the correct spelling on the line, then check your answers against the key on page 2. Tick the ones you got right; the rest go on your personal list.</p>
<div class="two"><div><table>{col(d["misspelled"][:half],1)}</table></div><div><table>{col(d["misspelled"][half:],half+1)}</table></div></div>
<p class="hint">Do this test on Day 4 and again on Day 7 of the plan in the article. Say each word in syllables before you write it.</p>
<h2>The 10 spelling rules on one page</h2>
<ol class="rules">{rules}</ol>
<div class="p2"></div>
<div class="brand">{logo}<span>English speaking app</span></div>
<h2>Answer key</h2>
<div class="answers">{answers}</div>
<h2>My personal mistake list</h2>
<p class="hint" style="margin:0 0 1.5mm">Word I got wrong · correct spelling · tick when spelled right three times in a row (then it graduates off the list).</p>
<table>{blank}</table>
<div class="cta"><img src="data:image/png;base64,{qr}" alt="QR code: get the SpeakX app"><div><h3>Say the words you write</h3><p>Many spelling mistakes start in the mouth: if you say “goverment”, you write it. SpeakX is an AI English speaking app for Indian learners; practice saying words and sentences aloud on voice calls, with explanations in Hindi and other Indian languages. Free to download and start.</p><small>Scan the code or visit <strong>speakx.ai</strong> · Full guide: {ARTICLE} · Made by Ivypods Technology, Gurugram.</small></div></div>
</body></html>'''
(PDF/"index.html").write_text(page)
out=PDF/"english-spelling-practice-sheet.pdf"
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
    c.drawString(12*72/25.4, 9*72/25.4, "SpeakX  ·  speakx.ai  ·  English Spelling Rules and Practice"); c.drawRightString(A4[0]-12*72/25.4, 9*72/25.4, f"Page {i} of {total}"); c.save(); buf.seek(0)
    pg.merge_page(PdfReader(buf).pages[0]); w.add_page(pg)
w.add_metadata({"/Title":"English Spelling Practice Sheet (40 commonly misspelled words + 10 rules)","/Author":"SpeakX (Ivypods Technology)","/Subject":"Free printable English spelling self-test","/Producer":"SpeakX"})
w.write(str(out)); print("pdf bytes:", out.stat().st_size, "| pages:", total)
