import type { Metadata } from "next";

import { BRAND } from "@/lib/brand";

export function buildMetadata(p: {
  path: string;
  title: string;
  description: string;
  ogImage?: string;
}): Metadata {
  const url = BRAND.domain + p.path;

  return {
    metadataBase: new URL(BRAND.domain),
    title: { absolute: p.title },
    description: p.description,
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      url,
      title: p.title,
      description: p.description,
      siteName: BRAND.name,
      locale: "en_US",
      images: [p.ogImage ?? "/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: p.title,
      description: p.description,
    },
    icons: {
      icon: [
        { url: "/icon.svg", type: "image/svg+xml" },
        { url: "/favicon.ico", sizes: "48x48" },
      ],
      apple: "/apple-icon.png",
    },
  };
}
