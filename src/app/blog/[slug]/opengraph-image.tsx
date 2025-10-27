import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage({ params }: { params: { slug: string } }) {
  const title = decodeURIComponent(params.slug.replace(/-/g, " "));
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
        <div style={{ fontSize: 48, opacity: 0.85 }}>Blog • Trishit.dev</div>
        <div style={{ fontSize: 72, fontWeight: 800, marginTop: 8 }}>{title}</div>
        <div style={{ fontSize: 36, marginTop: 12, color: "#b0b0b0" }}>by Trishit Char</div>
      </div>
    ),
    { ...size }
  );
}
