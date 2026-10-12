import { ImageResponse } from "next/og";
import { comparisonIndex, getComparison } from "@/data/comparisons";
import { products } from "@/data/products";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return comparisonIndex.map((c) => ({ slug: c.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = await getComparison(slug);
  const competitor = page ? products[page.competitorSlug] : undefined;
  const title = page?.h1 ?? "SpeakX comparison";
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 64, background: "linear-gradient(135deg,#0a0b0f 0%,#742c07 55%,#ff4d00 100%)", color: "white", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 28, fontWeight: 700, letterSpacing: 2 }}>
          <span style={{ background: "#ffb61e", color: "#0a0b0f", padding: "8px 18px", borderRadius: 999 }}>SpeakX</span>
          <span style={{ opacity: 0.7 }}>vs</span>
          <span style={{ background: "rgba(255,255,255,0.15)", padding: "8px 18px", borderRadius: 999 }}>{competitor?.name ?? ""}</span>
        </div>
        <div style={{ fontSize: 60, fontWeight: 800, lineHeight: 1.1, maxWidth: 1000 }}>{title}</div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, opacity: 0.85 }}>
          <span>Honest, source-backed comparison for Indian learners</span>
          <span>speakx.ai/vs</span>
        </div>
      </div>
    ),
    size,
  );
}
