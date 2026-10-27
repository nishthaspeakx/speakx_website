"""Builds the printable PDF from data/sentences.json: writes pdf/index.html, then prints it with headless Chrome.
Fonts are embedded via @font-face (Noto Sans Devanagari + Figtree) so Hindi is real, selectable text."""
import json, base64, pathlib, subprocess, html, datetime
ROOT=pathlib.Path(__file__).resolve().parents[1]; PDF=ROOT/"pdf"
d=json.load(open(ROOT/"data/sentences.json"))
def b64(p): return base64.b64encode(open(p,"rb").read()).decode()
fonts=PDF/"fonts"
css_fonts=f"""
@font-face{{font-family:'Figtree';src:url(data:font/ttf;base64,{b64(fonts/'Figtree-Regular.ttf')}) format('truetype');font-weight:400}}
@font-face{{font-family:'Figtree';src:url(data:font/ttf;base64,{b64(fonts/'Figtree-Bold.ttf')}) format('truetype');font-weight:700}}
@font-face{{font-family:'Noto Sans Devanagari';src:url(data:font/ttf;base64,{b64(fonts/'NotoSansDevanagari-Variable.ttf')}) format('truetype');font-weight:300 800}}
"""
qr=b64(PDF/"qr-speakx-install.png"); logo=open(ROOT.parent/"speakx-vs/public/logos/speakx.svg").read()
INSTALL="https://speakx.sng.link/Ed28z/npfq/4alj?utm_source=pdf&utm_medium=100-sentences&utm_campaign=daily-use-english-sentences"
ARTICLE="https://speakx.ai/blog/100-simple-english-sentences-for-daily-use-with-hindi-meaning"
n=0; body=""
for si,s in enumerate(d["sections"],1):
    rows=""
    for en,hi,when in s["sentences"]:
        n+=1
        rows+=f'<tr><td class="num">{n}</td><td class="en">{html.escape(en)}</td><td class="hi" lang="hi">{html.escape(hi)}</td><td class="when">{html.escape(when)}</td></tr>'
    body+=f'''<section class="group"><h2><span class="gnum">{si}</span>{html.escape(s["title"])} <span class="ghi" lang="hi">{html.escape(s["hindi"])}</span></h2>
<table><thead><tr><th class="num">No.</th><th class="en">English sentence</th><th class="hi">Hindi meaning (हिंदी अर्थ)</th><th class="when">When to use</th></tr></thead><tbody>{rows}</tbody></table>
<p class="tip"><strong>Practice tip:</strong> {html.escape(s["tip"])}</p></section>'''
days="".join(f'<tr><td>Day {i}</td><td>Sentences {10*(i-1)+1}–{10*i}</td><td class="box">☐ Read aloud</td><td class="box">☐ Made 2 variations</td><td class="box">☐ Used 1 today</td></tr>' for i in range(1,11))
page=f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><title>100 Daily Use English Sentences with Hindi Meaning | SpeakX</title>
<meta name="author" content="SpeakX"><meta name="description" content="Free printable PDF: 100 daily use English sentences with Hindi meaning, grouped by situation, with a 10-day practice tracker.">
<style>{css_fonts}
@page{{size:A4;margin:16mm 14mm 20mm 14mm}}
*{{box-sizing:border-box}} html,body{{margin:0;padding:0}}
body{{font-family:'Figtree','Noto Sans Devanagari',sans-serif;color:#0a0b0f;font-size:10.5pt;line-height:1.35;-webkit-print-color-adjust:exact;print-color-adjust:exact}}
[lang=hi],.hi{{font-family:'Noto Sans Devanagari','Figtree',sans-serif}}
.cover{{page-break-after:always;display:flex;flex-direction:column;min-height:255mm}}
.brand{{display:flex;align-items:center;gap:8px;margin-bottom:28mm}} .brand svg{{height:28px;width:auto}} .brand span{{color:#666673;font-size:9pt;letter-spacing:.08em;text-transform:uppercase}}
h1{{font-size:30pt;line-height:1.1;margin:0 0 6mm;color:#0a0b0f;letter-spacing:-.01em}} h1 .orange{{color:#ff4d00}}
.sub{{font-size:14pt;color:#4a4a5b;margin:0 0 10mm}} .sub-hi{{font-size:13pt;color:#4a4a5b;margin:0 0 12mm}}
.intro{{max-width:150mm;font-size:11pt;color:#4a4a5b}} .intro p{{margin:0 0 4mm}}
.how{{border:1px solid #eeeff4;border-left:4px solid #ff4d00;padding:5mm 6mm;margin:8mm 0 0;max-width:150mm}} .how h3{{margin:0 0 3mm;font-size:11.5pt}} .how ol{{margin:0;padding-left:5mm}} .how li{{margin-bottom:1.5mm}}
.contents{{margin-top:8mm;max-width:150mm}} .contents h3{{font-size:11.5pt;margin:0 0 2mm}} .contents ol{{columns:2;column-gap:10mm;margin:0;padding-left:5mm;font-size:10pt;color:#4a4a5b}}
.cover-foot{{margin-top:auto;font-size:9pt;color:#666673;border-top:1px solid #eeeff4;padding-top:3mm}}
.group{{page-break-inside:avoid;margin-bottom:7mm}} .group:nth-of-type(2n+1){{page-break-before:auto}}
h2{{font-size:13.5pt;margin:0 0 2.5mm;display:flex;align-items:baseline;gap:6px}} .gnum{{display:inline-block;background:#ff4d00;color:#fff;border-radius:999px;width:7mm;height:7mm;line-height:7mm;text-align:center;font-size:9.5pt}} .ghi{{font-weight:400;color:#666673;font-size:10.5pt}}
table{{width:100%;border-collapse:collapse;page-break-inside:avoid}} th{{text-align:left;font-size:8.5pt;letter-spacing:.04em;text-transform:uppercase;color:#666673;border-bottom:1.5px solid #0a0b0f;padding:1.5mm 2mm}} td{{padding:1.6mm 2mm;border-bottom:1px solid #eeeff4;vertical-align:top}}
td.num{{width:9mm;color:#ff4d00;font-weight:700;font-variant-numeric:tabular-nums}} td.en{{width:60mm;font-weight:700}} td.hi{{width:68mm;font-size:10.5pt}} td.when{{color:#4a4a5b;font-size:9.3pt}}
.tip{{margin:2.5mm 0 0;font-size:9.3pt;color:#4a4a5b}} .tip strong{{color:#a53a06}}
.tracker{{page-break-before:always}} .tracker h2{{font-size:18pt;margin-bottom:3mm}} .tracker p{{color:#4a4a5b;max-width:150mm}} .tracker table td,.tracker table th{{padding:2.6mm 2mm;font-size:10pt}} .box{{color:#4a4a5b}}
.cta{{margin-top:12mm;border:1px solid #eeeff4;border-radius:4mm;padding:6mm;display:flex;gap:8mm;align-items:center;page-break-inside:avoid}} .cta img{{width:30mm;height:30mm}} .cta h3{{margin:0 0 2mm;font-size:13pt}} .cta p{{margin:0 0 2mm;font-size:10pt}} .cta small{{color:#666673;font-size:8.5pt}}

</style></head><body>
<section class="cover">
  <div class="brand">{logo}<span>English speaking app</span></div>
  <h1>100 Daily Use English Sentences <span class="orange">with Hindi Meaning</span></h1>
  <p class="sub">Free printable English speaking practice PDF</p>
  <p class="sub-hi" lang="hi">रोज़ बोले जाने वाले 100 अंग्रेज़ी वाक्य, हिंदी अर्थ और इस्तेमाल के साथ</p>
  <div class="intro"><p>These are the sentences Indian learners use most in a normal day: greetings, home, office, shopping, travel, phone calls, feelings, requests and goodbyes. Each sentence comes with a natural Hindi meaning and the moment you would actually say it.</p>
  <p>Where a Hindi verb changes with the speaker, both forms are given: <span lang="hi">रहा हूँ / रही हूँ</span>.</p></div>
  <div class="how"><h3>How to use this printable</h3><ol><li>Learn five sentences a day. Read each one aloud three times.</li><li>Change one word to make your own sentence: <em>I am working on it</em> → <em>I am working on the report</em>.</li><li>Use at least one new sentence in a real conversation the same day.</li><li>Tick the 10-day tracker on the last page.</li></ol></div>
  <div class="contents"><h3>Contents</h3><ol>{"".join(f"<li>{html.escape(s['title'])}</li>" for s in d["sections"])}</ol></div>
  <div class="cover-foot">From the SpeakX article “100 Daily Use English Sentences with Hindi Meaning” · {ARTICLE} · Prepared {datetime.date.today().strftime('%B %Y')}</div>
</section>
{body}
<section class="tracker"><h2>10-day practice tracker</h2><p>Ten sentences a day for ten days. Tick each box when it is done. Speaking the sentence aloud counts; reading silently does not.</p>
<table><thead><tr><th>Day</th><th>Sentences</th><th>Read aloud 3×</th><th>Made variations</th><th>Used in real life</th></tr></thead><tbody>{days}</tbody></table>
<div class="cta"><img src="data:image/png;base64,{qr}" alt="QR code: get the SpeakX app"><div><h3>Next step: say these sentences out loud with Sia</h3><p>Reading sentences helps you learn them. Speaking them aloud helps you use them in real conversations. SpeakX is an AI English speaking app for Indian learners: practise on voice calls with Sia, your AI speaking partner, with explanations in Hindi and six other Indian languages. Free to download and start.</p><small>Scan the code or visit <strong>speakx.ai</strong>. Made by Ivypods Technology, Gurugram.</small></div></div>
</section></body></html>'''
(PDF/"index.html").write_text(page)
out=PDF/"100-daily-use-english-sentences-with-hindi-meaning.pdf"
chrome="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
subprocess.run([chrome,"--headless=new","--disable-gpu","--no-pdf-header-footer","--print-to-pdf="+str(out),"--virtual-time-budget=4000",str(PDF/"index.html")],check=True,capture_output=True)
# Footer overlay: brand line + page numbers on every page, set in Figtree (Latin only), and PDF metadata.
from pypdf import PdfReader, PdfWriter
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.pagesizes import A4
import io
pdfmetrics.registerFont(TTFont("Figtree", str(fonts/"Figtree-Regular.ttf")))
reader=PdfReader(str(out)); writer=PdfWriter(); total=len(reader.pages)
for i,pg in enumerate(reader.pages,1):
    buf=io.BytesIO(); c=canvas.Canvas(buf,pagesize=A4); c.setFont("Figtree",8); c.setFillColorRGB(0.4,0.4,0.45)
    c.drawString(14*72/25.4, 9*72/25.4, "SpeakX  ·  speakx.ai  ·  100 Daily Use English Sentences with Hindi Meaning")
    c.drawRightString(A4[0]-14*72/25.4, 9*72/25.4, f"Page {i} of {total}"); c.save(); buf.seek(0)
    pg.merge_page(PdfReader(buf).pages[0]); writer.add_page(pg)
writer.add_metadata({"/Title":"100 Daily Use English Sentences with Hindi Meaning","/Author":"SpeakX (Ivypods Technology)","/Subject":"Free printable English speaking practice PDF with Hindi meanings","/Keywords":"daily use english sentences pdf, hindi meaning, spoken english, SpeakX","/Producer":"SpeakX"})
writer.write(str(out))
print("pdf bytes:", out.stat().st_size, "| sentences:", n, "| pages:", total)
