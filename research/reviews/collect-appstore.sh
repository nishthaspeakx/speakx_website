#!/bin/bash
# App Store (India storefront) collector: RSS customerreviews pages 1..10 (mostrecent) + lookup API.
# Writes appstore-<slug>.json via a small node merge step (raw pages kept verbatim).
set -u
cd "$(dirname "$0")"
declare -a APPS=("speakx:6756059415" "supernova:6447939054" "mysivi:1644736135" "duolingo:570060128" "stimuler:1627501632" "elsa-speak:1083804886" "speak:1286609883")
TMP=$(mktemp -d)
for pair in "${APPS[@]}"; do
  slug=${pair%%:*}; id=${pair##*:}
  mkdir -p "$TMP/$slug"
  curl -sS -A 'Mozilla/5.0' "https://itunes.apple.com/in/lookup?id=$id" -o "$TMP/$slug/lookup.json" -w "$slug lookup HTTP %{http_code}\n" || echo "$slug lookup CURL_FAIL $?" 
  for p in 1 2 3 4 5 6 7 8 9 10; do
    url="https://itunes.apple.com/in/rss/customerreviews/page=$p/id=$id/sortby=mostrecent/json"
    code=$(curl -sS -A 'Mozilla/5.0' "$url" -o "$TMP/$slug/page$p.json" -w "%{http_code}")
    n=$(node -e "try{const j=JSON.parse(require('fs').readFileSync('$TMP/$slug/page$p.json'));const e=j.feed&&j.feed.entry;console.log(Array.isArray(e)?e.length:(e?1:0))}catch(e){console.log('parse_error')}")
    echo "$slug page $p HTTP $code entries $n"
    if [ "$n" = "0" ] || [ "$n" = "parse_error" ]; then break; fi
    sleep 0.5
  done
done
echo "$TMP" > .appstore-tmpdir
