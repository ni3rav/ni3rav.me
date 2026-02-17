import { ImageResponse } from "next/og";

export const ogImageSize = {
  width: 1200,
  height: 630,
};

const colors = {
  base: "#161616",
  text: "#f2f4f8",
  subtext: "#dde1e6",
  overlay: "#525252",
  accent: "#78a9ff",
};

export function generateOgImage() {
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
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 20,
            fontSize: 80,
            fontWeight: 700,
            color: colors.text,
            marginBottom: 20,
            lineHeight: 1.1,
          }}
        >
          <span>hi, i&apos;m</span>
          <span style={{ color: colors.accent }}>nirav</span>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            fontSize: 40,
            color: colors.subtext,
            marginBottom: 12,
          }}
        >
          <span>fullstack</span>
          <span style={{ color: colors.accent }}>developer</span>
          <span>and</span>
          <span style={{ color: colors.accent }}>computer science junior</span>
        </div>

        <div
          style={{
            display: "flex",
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
            display: "flex",
            fontSize: 28,
            color: colors.overlay,
          }}
        >
          ni3rav.me
        </div>
      </div>
    ),
    ogImageSize
  );
}
