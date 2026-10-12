import type { ReactNode } from "react";
import TrackedLink from "@/components/TrackedLink";

const LINK_RE = /\[([^\]]+)\]\((https?:\/\/[^\s)]+|\/[^\s)]+)\)/g;

/**
 * Renders copy strings that may contain Markdown-style links `[text](url)`.
 * Links fire `internal_link_click` so in-copy links to speakx.ai and the blog are measurable.
 */
export function rich(text: string, pageSlug?: string): ReactNode {
  const parts: ReactNode[] = [];
  let last = 0;
  let i = 0;
  for (const m of text.matchAll(LINK_RE)) {
    const start = m.index ?? 0;
    if (start > last) parts.push(text.slice(last, start));
    parts.push(
      <TrackedLink
        key={`${start}-${i++}`}
        href={m[2]}
        event="internal_link_click"
        params={{ page_slug: pageSlug, link_text: m[1], destination: m[2] }}
        className="font-medium text-brand-dark underline decoration-brand/40 underline-offset-4 hover:text-brand-hover hover:decoration-brand"
      >
        {m[1]}
      </TrackedLink>,
    );
    last = start + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts.length === 1 ? parts[0] : parts;
}

/** Strips link markup for plain-text contexts such as JSON-LD and meta tags. */
export function plain(text: string): string {
  return text.replace(LINK_RE, "$1");
}
