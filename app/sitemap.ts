import type { MetadataRoute } from "next";

import { BRAND } from "@/lib/brand";
import { pages } from "@/lib/pages";

const blogPosts = [
  "/blog/why-cant-my-phone-scan-code-128",
  "/blog/how-to-read-an-ean-13-barcode",
  "/blog/qr-code-vs-barcode-which-to-use",
];

const pageEntries = [
  ...pages,
  ...blogPosts.map((path) => ({
    path,
    title: "Scannow Blog",
    description: "Scannow guide",
    h1: "Scannow guide",
    lastModified: "2026-11-03",
  })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pageEntries.map((page) => ({
    url: BRAND.domain + page.path,
    lastModified: new Date(page.lastModified),
    changeFrequency:
      page.path === "/"
        ? "daily"
        : page.path.startsWith("/blog")
          ? "weekly"
          : "monthly",
    priority: page.path === "/" ? 1 : page.path.startsWith("/blog") ? 0.7 : 0.9,
  }));
}
