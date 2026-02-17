import { ImageResponse } from "next/og";
import { type NextRequest } from "next/server";

export const runtime = "edge";

const colors = {
  base: "#161616",
  text: "#f2f4f8",
  muted: "#525252",
  accent: "#78a9ff",
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "ni3rav.me";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.base,
          position: "relative",
          fontFamily: "monospace",
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

        {/* Title */}
        <div
          style={{
            display: "flex",
            fontSize: title.length > 40 ? 42 : 56,
            fontWeight: 700,
            color: colors.text,
            letterSpacing: "-0.02em",
            maxWidth: 1000,
            textAlign: "center",
            lineHeight: 1.3,
          }}
        >
          {title}
        </div>

        {/* Site name */}
        <div
          style={{
            display: "flex",
            fontSize: 20,
            color: colors.muted,
            marginTop: 24,
            letterSpacing: "0.05em",
          }}
        >
          ni3rav.me
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
