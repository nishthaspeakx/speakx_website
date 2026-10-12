"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

export default function PageView({ slug, competitor }: { slug: string; competitor?: string }) {
  useEffect(() => {
    track("vs_page_view", { page_slug: slug, competitor });
  }, [slug, competitor]);
  return null;
}
