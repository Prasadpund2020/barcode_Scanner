import type { Metadata } from "next";

import { BRAND } from "@/lib/brand";

export type JsonLdValue =
  | Record<string, unknown>
  | Array<Record<string, unknown>>;

export const siteOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: BRAND.name,
  url: BRAND.domain,
  logo: `${BRAND.domain}/icon.svg`,
  email: BRAND.email,
  sameAs: BRAND.sameAs,
};

export const siteWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: BRAND.name,
  url: BRAND.domain,
  description: BRAND.tagline,
  publisher: {
    "@type": "Organization",
    name: BRAND.name,
  },
};

export function buildJsonLd(data: JsonLdValue): Metadata["other"] {
  return {
    "script:ld+json": JSON.stringify(data),
  };
}

export function buildSiteJsonLd(): Record<string, unknown>[] {
  return [siteOrganization, siteWebsite];
}
