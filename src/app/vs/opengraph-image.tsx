import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 64, background: "linear-gradient(135deg,#0a0b0f 0%,#742c07 55%,#ff4d00 100%)", color: "white", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, fontWeight: 700 }}>
          <span style={{ background: "#ffb61e", color: "#0a0b0f", padding: "8px 18px", borderRadius: 999 }}>SpeakX</span>
          <span style={{ opacity: 0.8 }}>Muh Khol. English Bol.</span>
        </div>
        <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.08, maxWidth: 1000 }}>SpeakX vs other English speaking apps: find the right app for you</div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, opacity: 0.85 }}>
          <span>Supernova · MySivi · Duolingo · Stimuler · ELSA Speak · Speak</span>
          <span>speakx.ai/vs</span>
        </div>
      </div>
    ),
    size,
  );
}
