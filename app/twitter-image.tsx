import { generateOgImage, ogImageSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Nirav Mehta - Fullstack Developer";
export const size = ogImageSize;
export const contentType = "image/png";

export default function Image() {
  return generateOgImage();
}
