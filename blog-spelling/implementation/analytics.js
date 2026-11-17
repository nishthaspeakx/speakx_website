// PDF download + app CTA tracking for the spelling article (same script as the 100-sentences posts; skip if already live). Pushes to dataLayer and gtag (GA4 G-Z36ZMHENFK is already on speakx.ai).
(function () {
  function send(name, params) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(Object.assign({ event: name }, params));
    if (typeof window.gtag === "function") window.gtag("event", name, params);
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[data-event]");
    if (!a) return;
    var slug = location.pathname.replace(/^\/blog\//, "");
    if (a.dataset.event === "pdf_download") {
      send("pdf_download", { article_slug: slug, pdf_filename: a.dataset.pdfFilename, cta_position: a.dataset.ctaPosition, page_url: location.href });
    } else if (a.dataset.event === "cta_click") {
      send("cta_click", { article_slug: slug, cta_position: a.dataset.ctaPosition, destination: a.href, page_url: location.href });
    }
  });
})();
