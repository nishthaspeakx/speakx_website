import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static, server-rendered HTML for every page: all comparison content is
  // visible to crawlers without JavaScript.
  trailingSlash: false,
  poweredByHeader: false,
  images: {
    // Logos and screenshots are served from /public; no remote loader needed.
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
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
