import Link from "next/link";

import { BRAND } from "@/lib/brand";

const links = [
  { href: "/qr-code-generator", label: "QR code generator" },
  { href: "/wifi-qr-code-generator", label: "Wi-Fi QR code generator" },
  { href: "/upi-qr-code-generator", label: "UPI QR code generator" },
  { href: "/vcard-qr-code-generator", label: "vCard QR code generator" },
  { href: "/barcode-generator", label: "Barcode generator" },
  { href: "/qr-code-scanner", label: "QR code scanner" },
  { href: "/barcode-scanner-online", label: "Barcode scanner online" },
  { href: "/about", label: "About" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const currentYear = 2025;

  return (
    <footer className="border-t border-white/10 bg-[#0E0F13]">
      <div className="mx-auto max-w-[1280px] px-[var(--gutter)] py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-2xl font-extrabold tracking-[-0.05em] text-white">
              {BRAND.name}
            </p>
            <p className="mt-2 text-sm text-zinc-400">{BRAND.tagline}</p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-zinc-300">
            <Link href="/privacy" className="hover:text-lime-300">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-lime-300">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-lime-300">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-4 text-sm text-zinc-400 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-lime-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-zinc-500">
          © {currentYear} {BRAND.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
