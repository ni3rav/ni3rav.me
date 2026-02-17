import type { Metadata } from "next";

const siteConfig = {
  name: "ni3rav",
  title: "ni3rav.me",
  description:
    "messing around and finding out, i guess ?",
  url: "https://ni3rav.me",
  ogImage: "https://ni3rav.me/og.png",
  author: {
    name: "Nirav Mehta",
    email: "niravv1405@gmail.com",
    twitter: "@ni3rav",
    github: "ni3rav",
    linkedin: "nirav-mht",
  },
  keywords: [
    "Nirav Mehta",
    "ni3rav",
    "fullstack developer",
    "web developer",
    "React developer",
    "Next.js developer",
    "TypeScript",
    "frontend developer",
    "backend developer",
    "computer science",
    "portfolio",
    "software engineer",
    "JavaScript developer",
    "Node.js",
    "MongoDB",
    "Express",
  ],
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.author.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.author.twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export function constructMetadata({
  title = siteConfig.title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  url = siteConfig.url,
  ...rest
}: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
} & Metadata = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: siteConfig.author.twitter,
    },
    ...rest,
  };
}

export { siteConfig };
