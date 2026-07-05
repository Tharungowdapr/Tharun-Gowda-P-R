import { ImageResponse } from "next/og";

export const alt = "Tharun Gowda P R — AI/ML & Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0c0d11",
          color: "#fafafa",
          fontFamily: "system-ui",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-50%",
            right: "-20%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "rgba(245, 158, 11, 0.08)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-30%",
            left: "-10%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(96, 165, 250, 0.06)",
            filter: "blur(60px)",
          }}
        />
        <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: "-0.02em" }}>
          Tharun Gowda P R
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#a1a1aa",
            marginTop: 12,
          }}
        >
          AI/ML &amp; Software Engineer · RV College of Engineering
        </div>
        <div
          style={{
            marginTop: 32,
            display: "flex",
            gap: 16,
            fontSize: 18,
            color: "#71717a",
          }}
        >
          <span>LLMs</span>
          <span>RAG</span>
          <span>Computer Vision</span>
          <span>Multi-Agent Systems</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
