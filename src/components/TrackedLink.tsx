"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";
import { track, storeFromUrl, type HubEvent, type EventParams } from "@/lib/analytics";

type Props = ComponentProps<typeof Link> & {
  event: HubEvent;
  params?: EventParams;
};

/**
 * Link that records an analytics event on click. External links open in a new tab
 * with rel="noopener"; outbound app-store links also fire app_store_redirect.
 */
export default function TrackedLink({ event, params, onClick, href, children, ...rest }: Props) {
  const hrefStr = typeof href === "string" ? href : href.toString();
  const external = /^https?:\/\//.test(hrefStr) && !hrefStr.startsWith(process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "https://speakx.ai/vs");

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    track(event, { destination: hrefStr, ...params });
    if (/play\.google\.com|apps\.apple\.com|onelink|app\.link/.test(hrefStr)) {
      track("app_store_redirect", { destination: hrefStr, store: storeFromUrl(hrefStr), ...params });
    }
    onClick?.(e);
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
      {...rest}
    >
      {children}
    </Link>
  );
}
