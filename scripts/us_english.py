"""US English normalisation for generated copy (never touches URLs). Used by build-products.py and build-press.py."""
import re
_R = [
 (r"\b(P|p)ractis(e|es|ed|ing)\b", r"\1ractic\2"),
 (r"\b(P|p)ersonalis(e|es|ed|ing|ation)\b", r"\1ersonaliz\2"),
 (r"\b(O|o)rganis(e|es|ed|ing|ation|ations|er|ers)\b", r"\1rganiz\2"),
 (r"\b(R|r)ecognis(e|es|ed|ing)\b", r"\1ecogniz\2"),
 (r"\b(C|c)olour(s|ed)?\b", r"\1olor\2"),
 (r"\b(P|p)rogramme(s)?\b", r"\1rogram\2"),
 (r"\b(C|c)entre(s|d)?\b", r"\1enter\2"),
 (r"\b(F|f)avourite(s)?\b", r"\1avorite\2"),
 (r"\b(L|l)abelled\b", r"\1abeled"),
 (r"\b(C|c)ancelled\b", r"\1anceled"),
 (r"\b(T|t)ravell(ing|ed|er|ers)\b", r"\1ravel\2"),
 (r"\b(L|l)earnt\b", r"\1earned"),
 (r"\b(A|a)nalys(e|es|ed|ing)\b", r"\1nalyz\2"),
 (r"\b(O|o)ptimis(e|es|ed|ing|ation)\b", r"\1ptimiz\2"),
 (r"\b(B|b)ehaviour(s|al)?\b", r"\1ehavior\2"),
 (r"\b(C|c)atalogue(s)?\b", r"\1atalog\2"),
 (r"\b(R|r)ealis(e|es|ed|ing)\b", r"\1ealiz\2"),
 (r"\b(S|s)ummaris(e|es|ed|ing)\b", r"\1ummariz\2"),
 (r"\b(C|c)ustomis(e|es|ed|ing|ation)\b", r"\1ustomiz\2"),
 (r"\b(M|m)inimis(e|es|ed|ing)\b", r"\1inimiz\2"),
 (r"\b(M|m)aximis(e|es|ed|ing)\b", r"\1aximiz\2"),
 (r"\b(F|f)amiliaris(e|es|ed|ing)\b", r"\1amiliariz\2"),
 (r"\b(M|m)emoris(e|es|ed|ing)\b", r"\1emoriz\2"),
 (r"\b(C|c)ategoris(e|es|ed|ing)\b", r"\1ategoriz\2"),
 (r"\b(P|p)rioritis(e|es|ed|ing)\b", r"\1rioritiz\2"),
 (r"\b(S|s)pecialis(e|es|ed|ing)\b", r"\1pecializ\2"),
 (r"\b(E|e)mphasis(e|es|ed|ing)\b", r"\1mphasiz\2"),
 (r"\b(A|a)pologis(e|es|ed|ing)\b", r"\1pologiz\2"),
 (r"\b(E|e)nrol(s)?\b", r"\1nroll\2"),
 (r"\b(W|w)hilst\b", r"\1hile"),
 (r"\b(D|d)ialogue(s)?\b", r"\1ialog\2"),
 (r"\b(S|s)tandardis(e|es|ed|ing)\b", r"\1tandardiz\2"),
 (r"\b(F|f)ulfil\b", r"\1ulfill"),
]
_URL = re.compile(r"https?://[^\s\"')]+")
def _seg(s):
    for p, r in _R: s = re.sub(p, r, s)
    return s
def us_english(text: str) -> str:
    out, last = [], 0
    for u in _URL.finditer(text):
        out.append(_seg(text[last:u.start()])); out.append(u.group(0)); last = u.end()
    out.append(_seg(text[last:]))
    return "".join(out)
