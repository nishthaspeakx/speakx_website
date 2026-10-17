import type { NextConfig } from "next";

const staticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(staticExport ? { output: "export" as const } : {}),
  // Static, server-rendered HTML for every page: all comparison content is
  // visible to crawlers without JavaScript.
  trailingSlash: false,
  poweredByHeader: false,
  images: {
    // Logos and screenshots are served from /public; no remote loader needed.
    formats: ["image/avif", "image/webp"],
    ...(staticExport ? { unoptimized: true } : {}),
  },
  async redirects() {
    if (staticExport) return [];
    return [
      // Legacy comparison URL shape used in earlier planning docs.
      { source: "/compare/:slug", destination: "/vs/:slug", permanent: true },
      { source: "/vs/:slug/", destination: "/vs/:slug", permanent: true },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
