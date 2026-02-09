import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Nirav Mehta - Fullstack Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Oxocarbon Dark colors
const colors = {
  base: "#161616",
  text: "#f2f4f8",
  subtext: "#dde1e6",
  overlay: "#525252",
  accent: "#78a9ff",
};

export default async function Image() {
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
          backgroundColor: colors.base,
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            color: colors.text,
            marginBottom: 20,
            lineHeight: 1.1,
          }}
        >
          hi, i'm <span style={{ color: colors.accent }}>nirav</span>
        </div>
        <div
          style={{
            fontSize: 40,
            color: colors.subtext,
            marginBottom: 10,
          }}
        >
          fullstack <span style={{ color: colors.accent }}>developer</span> and{" "}
          <span style={{ color: colors.accent }}>computer science junior</span>
        </div>
        <div
          style={{
            fontSize: 32,
            color: colors.overlay,
            fontStyle: "italic",
          }}
        >
          i like cats
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 60,
            right: 80,
            fontSize: 28,
            color: colors.overlay,
          }}
        >
          ni3rav.me
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
