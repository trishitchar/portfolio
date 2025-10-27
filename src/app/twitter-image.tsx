import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
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
        <div style={{ fontSize: 80, fontWeight: 800 }}>Trishit.dev</div>
        <div style={{ fontSize: 48, marginTop: 8 }}>
          Portfolio of Trishit Char
        </div>
      </div>
    ),
    { ...size }
  );
}
