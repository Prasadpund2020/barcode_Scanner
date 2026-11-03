import Link from "next/link";

import { BRAND } from "@/lib/brand";

const navLinks = [
  { href: "/qr-code-generator", label: "Generator" },
  { href: "/qr-code-scanner", label: "Scanner" },
  { href: "/barcode-generator", label: "Formats" },
  { href: "/blog", label: "Guides" },
];

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-[8px] bg-lime-400 text-[10px] font-black tracking-[-0.08em] text-zinc-950">
        QR
      </div>
      <span className="font-display text-[1.25rem] font-extrabold tracking-[-0.05em] text-white">
        {BRAND.name}
      </span>
    </div>
  );
}

export default function Nav() {
  return (
    <header className="border-b border-white/10 bg-[#0E0F13]/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-[var(--gutter)] py-4">
        <Link
          href="/"
          aria-label="Scannow homepage"
          className="inline-flex items-center"
        >
          <LogoMark />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-300 transition hover:text-lime-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <a
          href="https://play.google.com"
          rel="noopener"
          target="_blank"
          className="hidden rounded-full border border-white/20 px-4 py-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-white transition hover:border-lime-300 hover:text-lime-300 md:inline-flex"
        >
          Get the Android app
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 md:hidden"
          aria-label="Open navigation menu"
          aria-expanded="false"
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
          </span>
        </button>
      </nav>
    </header>
  );
}
