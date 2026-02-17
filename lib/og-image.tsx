import { ImageResponse } from "next/og";

export const ogImageSize = {
  width: 1200,
  height: 630,
};

const colors = {
  base: "#161616",
  text: "#f2f4f8",
  accent: "#78a9ff",
  muted: "#525252",
};

export function generateOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.base,
          position: "relative",
        }}
      >
        {/* Dashed border frame */}
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 40,
            right: 40,
            bottom: 40,
            border: `1px dashed ${colors.muted}`,
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            color: colors.text,
            letterSpacing: "-0.02em",
          }}
        >
          ni3rav.me
        </div>
      </div>
    ),
    ogImageSize
  );
}
