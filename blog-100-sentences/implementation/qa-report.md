# QA report: 100 daily use English sentences article + PDF (27 Oct 2026)

## Content consistency
| Check | Result |
|---|---|
| Sentences in the article (numbered table rows) | 100 (10 sections × 10) |
| Sentences in the PDF | 100, numbered 1–100 in the same order and sections |
| Unique English sentences | 100 (no duplicates) |
| Every article sentence present in the PDF | Yes (script check, 0 missing) |
| Every Hindi meaning present in the PDF as real text | Yes: all 100 first-form Hindi strings extracted correctly with poppler `pdftotext`; text is selectable and searchable |
| Hindi script | Devanagari, embedded Noto Sans Devanagari (variable font); gendered verb forms given as masculine / feminine where they differ |
| Changes from the original list | 6 sentences improved, numbering preserved: 5 "I am fine." → "I am fine, thank you."; 30 "Let me check." → "Let me check and get back to you."; 34 "Can you repeat that?" → "…, please?"; 42 "Can you make it a little less?" → "Can you reduce the price a little?"; 48 "Please give me a bill." → "Please give me the bill."; 99 "Talk to you tomorrow." kept, Hindi made natural ("कल बात करते हैं।"). Hindi polished on 39, 53, 58, 89 to conversational forms. Everything else retained. |

## PDF
| Check | Result |
|---|---|
| Format | A4 portrait, 7 pages (cover, 5 pages of tables, tracker), 646 KB |
| Opens correctly | Yes (Chrome, Preview, poppler); metadata title/author set |
| Page numbers and footer | "Page N of 7" and brand line on every page (overlay) |
| Cut-off rows or headings | None; each section's table kept on one page (`page-break-inside: avoid`), verified on rendered page images |
| Print friendliness | White background, no fills except small orange section badges; thin rules; black text |
| Mobile readability | 10.5 pt body, 4-column table fits A4 width; verified on rendered pages at phone-like scale |
| Links / QR | QR encodes the verified SpeakX Singular install link with UTM (`utm_source=pdf`); article URL printed on the cover |
| Accessibility | Logical reading order (single column, tables in DOM order); `lang="hi"` on Hindi cells in the source HTML |

## Article (HTML fragment)
| Check | Result |
|---|---|
| H1 / H2 / H3 hierarchy | One H1; H2s are question-style; 10 H3 table headings with ids for deep links |
| Answer in first 100 words | Yes: lead paragraph states the list, the grouping, the Hindi meanings and the free PDF |
| Download CTAs | Three: top (after lead), middle (after sentence 50), end; all point to the same file; `download` attribute and data attributes for tracking |
| Tables | Semantic `<table>` with `<caption>`, `<th scope>` and `lang="hi"` cells; horizontal scroll on narrow screens via CSS |
| Internal links | 9 links to live speakx.ai pages, all return 200 (checked 27 Oct 2026) |
| App link | Verified Singular smart link with UTM |
| Word count | ~3,700 words of body text (original ~2,870) |
| Forbidden claims | None: no "free trial", no rating claims, audience described as adult learners |
| FAQ | 8 questions, answer-first; no FAQPage schema added |

## Technical SEO
| Check | Result |
|---|---|
| URL | Unchanged |
| Title | 59 chars; description 155 chars |
| Canonical | Unchanged (note site-wide www/non-www conflict to fix) |
| Structured data | BlogPosting + BreadcrumbList provided (`structured-data.jsonld`), validated as JSON |
| PDF indexing | Serve with `X-Robots-Tag: noindex`; keep out of sitemap |
| Duplicate hosts | speakx.com / speakx.in still serve 200 copies; 301 recommended |

## Open items (not verifiable from here)
1. The production PDF URL `https://speakx.ai/downloads/100-daily-use-english-sentences-with-hindi-meaning.pdf` returns 404 until the file is uploaded. A test copy is live at `https://nishthaspeakx.github.io/speakx_website/downloads/100-daily-use-english-sentences-with-hindi-meaning.pdf`.
2. Mobile tap-target and layout of the CTAs on the real speakx.ai template could not be tested; the CSS sets a 48 px minimum height and full-width buttons under 640 px.
3. GA4 `pdf_download` events must be checked in DebugView after the snippet is deployed.
