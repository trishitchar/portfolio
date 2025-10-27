import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#0b0b0b",
          color: "#ffffff",
          padding: "64px",
          fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu",
        }}
      >
        <div style={{ fontSize: 56, opacity: 0.9 }}>Trishit.dev</div>
        <div style={{ fontSize: 96, fontWeight: 800, marginTop: 8 }}>
          Trishit Char
        </div>
        <div style={{ fontSize: 36, marginTop: 12, color: "#b0b0b0" }}>
          Full-Stack Developer • React • Next.js • TypeScript
        </div>
      </div>
    ),
    { ...size }
  );
}
