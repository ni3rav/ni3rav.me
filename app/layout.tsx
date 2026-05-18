import type React from "react";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import { defaultMetadata } from "@/lib/metadata";
import {
  PersonStructuredData,
  WebsiteStructuredData,
} from "@/components/structured-data";
import { ThemeProvider } from "@/components/theme-provider";

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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <PersonStructuredData />
        <WebsiteStructuredData />
      </head>
      <body
        className={`${jetbrainsMono.className} bg-background text-foreground min-h-screen overflow-x-hidden`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="max-w-2xl mx-auto px-6">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}

