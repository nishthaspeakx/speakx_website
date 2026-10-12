/**
 * Analytics event taxonomy for the comparison hub.
 * Events are pushed to window.dataLayer (GTM) and, when gtag is present, to GA4.
 * Keep names snake_case and stable: dashboards depend on them.
 */
export type HubEvent =
  | "vs_page_view"
  | "competitor_card_click"
  | "internal_link_click"
  | "press_article_click"
  | "cta_click"
  | "app_store_redirect"
  | "faq_expand"
  | "matrix_scroll";

export interface EventParams {
  page_slug?: string;
  competitor?: string;
  destination?: string;
  cta_label?: string;
  cta_location?: string;
  link_text?: string;
  store?: "google_play" | "app_store" | "install_link";
  question?: string;
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(event: HubEvent, params: EventParams = {}): void {
  if (typeof window === "undefined") return;
  const payload = { event, ...params, ts: Date.now() };
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
  if (typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }
  if (process.env.NODE_ENV !== "production") {
    console.debug("[analytics]", payload);
  }
}

export function storeFromUrl(url: string): EventParams["store"] {
  if (url.includes("play.google.com")) return "google_play";
  if (url.includes("apps.apple.com")) return "app_store";
  return "install_link";
}
