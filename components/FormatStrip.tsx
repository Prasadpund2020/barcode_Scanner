import Link from "next/link";

const formats = [
  { href: "/qr-code-generator", label: "QR" },
  { href: "/wifi-qr-code-generator", label: "Wi-Fi" },
  { href: "/upi-qr-code-generator", label: "UPI" },
  { href: "/vcard-qr-code-generator", label: "vCard" },
  { href: "/barcode-generator", label: "Code 128" },
  { href: "/barcode-generator", label: "EAN-13" },
  { href: "/barcode-generator", label: "UPC-A" },
  { href: "/barcode-scanner-online", label: "Scanner" },
];

export default function FormatStrip() {
  return (
    <div className="border-y border-white/10 bg-[#101218]">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-center gap-x-6 gap-y-3 px-[var(--gutter)] py-4">
        {formats.map((format) => (
          <Link
            key={format.label}
            href={format.href}
            className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-300 transition hover:text-lime-300"
          >
            {format.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
