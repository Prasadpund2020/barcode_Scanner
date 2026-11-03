import { ImageResponse } from "next/og";

import { BRAND } from "@/lib/brand";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        background: "#0E0F13",
        color: "#E9E7DF",
        fontFamily: "sans-serif",
        padding: 64,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div
          style={{
            width: 42,
            height: 42,
            borderRadius: 12,
            background: "#C8FF3D",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#0E0F13",
            fontSize: 24,
            fontWeight: 800,
          }}
        >
          QR
        </div>
        <div style={{ fontSize: 24, fontWeight: 700 }}>{BRAND.name}</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 80,
            lineHeight: 1,
            fontWeight: 800,
            letterSpacing: "-0.05em",
          }}
        >
          <span>Free QR code</span>
          <span>generator &amp; scanner</span>
        </div>
        <div style={{ fontSize: 28, color: "#B4B7C2" }}>{BRAND.tagline}</div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          borderRadius: 999,
          padding: "10px 18px",
          background: "#C8FF3D",
          color: "#0E0F13",
          fontSize: 22,
          fontWeight: 700,
          maxWidth: "100%",
        }}
      >
        scannow.example
      </div>
    </div>,
    size,
  );
}
