import type React from "react";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import FooterWrapper from "@/components/footer-wrapper";
import { defaultMetadata } from "@/lib/metadata";
import {
  PersonStructuredData,
  WebsiteStructuredData,
} from "@/components/structured-data";

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <PersonStructuredData />
        <WebsiteStructuredData />
      </head>
      <body
        className={`${jetbrainsMono.className} bg-background text-foreground min-h-screen overflow-x-hidden`}
      >
        <div className="max-w-2xl mx-auto px-6">{children}</div>
        <FooterWrapper />
      </body>
    </html>
  );
}
