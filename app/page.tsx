import Link from "next/link";

import FeatureCard from "@/components/FeatureCard";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import FormatStrip from "@/components/FormatStrip";
import GeneratorCard from "@/components/GeneratorCard";
import HowTo from "@/components/HowTo";
import Nav from "@/components/Nav";
import { BRAND } from "@/lib/brand";

const faqItems = [
  {
    question: "Can I use Scannow without signing up?",
    answer:
      "Yes. Scannow works in the browser without an account. You can generate codes and scan with your camera or an uploaded image immediately.",
  },
  {
    question: "Does Scannow upload my scans?",
    answer:
      "No. Scanning happens on your device. Images are processed locally in the browser, and nothing is sent to a remote server for decoding.",
  },
  {
    question: "What formats does Scannow support?",
    answer:
      "Scannow supports QR codes and common 1D barcode formats including Code 128, Code 39, EAN-13, UPC-A, ITF and Codabar.",
  },
  {
    question: "Can I download QR codes as SVG or PNG?",
    answer:
      "Yes. You can export QR codes as SVG, PNG and PDF from the generator. Barcode output is also available in print-ready formats.",
  },
  {
    question: "Does the scanner work with a phone camera?",
    answer:
      "Yes. The camera scanner uses the device camera and is designed for barcodes many default camera apps fail to read.",
  },
];

const steps = [
  {
    title: "Pick a code type",
    description:
      "Choose a QR generator or barcode generator based on what you need to create.",
  },
  {
    title: "Set your content",
    description:
      "Add a web link, Wi‑Fi details, payment data, contact card or a text value.",
  },
  {
    title: "Export or scan",
    description:
      "Download the finished file or use the scanner to read a code instantly on any device.",
  },
];

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <section className="mx-auto max-w-[1280px] px-[var(--gutter)] py-16 md:py-24">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-lime-400">
                Free · No sign-up · Works offline
              </p>
              <h1 className="mt-6 font-display text-5xl leading-[0.9] tracking-[-0.06em] text-white md:text-[96px]">
                Free QR Code Generator & Barcode Scanner
              </h1>
              <p className="mt-6 font-display text-[1.75rem] leading-none tracking-[-0.06em] text-white md:text-[2.5rem]">
                <span className="text-lime-400">Make codes.</span> Read any
                code.
              </p>
              <p className="mt-5 max-w-[480px] text-lg leading-8 text-zinc-300">
                Create custom QR codes, decode barcodes, and read codes your
                phone camera misses — all in the browser with no uploads or
                account needed.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/qr-code-generator"
                  className="rounded-full bg-lime-400 px-6 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-950"
                >
                  Generate now
                </Link>
                <Link
                  href="/qr-code-scanner"
                  className="rounded-full border border-white/20 px-6 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-white"
                >
                  Scan a code
                </Link>
              </div>
              <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 text-left">
                <div>
                  <div className="font-display text-3xl font-extrabold text-white">
                    12+
                  </div>
                  <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-zinc-400">
                    Formats
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl font-extrabold text-white">
                    0 KB
                  </div>
                  <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-zinc-400">
                    Uploaded
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl font-extrabold text-white">
                    SVG
                  </div>
                  <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-zinc-400">
                    Export
                  </div>
                </div>
              </div>
            </div>

            <GeneratorCard />
          </div>
        </section>

        <FormatStrip />

        <section className="mx-auto max-w-[1280px] px-[var(--gutter)] py-16 md:py-20">
          <div className="mb-10 max-w-[680px]">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-lime-400">
              Scanner
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-[-0.06em] text-white md:text-6xl">
              Why your camera app can’t read some barcodes
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[28px] border border-white/10 bg-[#0E0F13] p-6">
              <div className="relative h-[520px] overflow-hidden rounded-[28px] border border-lime-400/50 bg-[#101218]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(200,255,61,0.15),_transparent_55%)]" />
                <div className="absolute left-6 top-6 h-10 w-10 border-l border-lime-400" />
                <div className="absolute left-6 top-6 h-10 w-10 border-t border-lime-400" />
                <div className="absolute right-6 top-6 h-10 w-10 border-r border-lime-400" />
                <div className="absolute right-6 top-6 h-10 w-10 border-t border-lime-400" />
                <div className="absolute left-6 bottom-6 h-10 w-10 border-l border-lime-400" />
                <div className="absolute left-6 bottom-6 h-10 w-10 border-b border-lime-400" />
                <div className="absolute right-6 bottom-6 h-10 w-10 border-r border-lime-400" />
                <div className="absolute right-6 bottom-6 h-10 w-10 border-b border-lime-400" />
                <div className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.18em] text-lime-400">
                  Ready
                </div>
                <div className="absolute left-1/2 top-1/2 h-[2px] w-[70%] -translate-x-1/2 -translate-y-1/2 bg-lime-400" />
                <div className="absolute inset-x-0 bottom-0 flex justify-center pb-6">
                  <div className="w-[85%] rounded-[18px] border border-zinc-200 bg-[#F2EFE6] p-3 text-zinc-900">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-700">
                          Format
                        </div>
                        <div className="mt-1 font-display text-xl font-bold">
                          Code 128
                        </div>
                      </div>
                      <button
                        type="button"
                        className="rounded-full bg-zinc-950 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white"
                      >
                        Copy
                      </button>
                    </div>
                    <p className="mt-2 text-sm text-zinc-700">123456789012</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg leading-8 text-zinc-300">
                Standard camera apps are often tuned for common QR codes and
                consumer product labels. Many scanning tools miss 1D barcodes
                with low contrast, damaged edges, or dense printing.{" "}
                {BRAND.name} uses a browser-based decoder designed for those
                cases.
              </p>
              <div className="grid gap-4">
                <FeatureCard
                  title="Read more formats"
                  description="Decode QR, Code 128, Code 39, EAN-13, UPC-A, ITF and Codabar without uploading your image."
                />
                <FeatureCard
                  title="Keep data local"
                  description="Everything runs in the browser on your device, so private codes stay private while you scan them."
                  variant="accent"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-[var(--gutter)] py-10 md:py-16">
          <div className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-lime-400">
              Features
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-[-0.06em] text-white md:text-6xl">
              Built for fast creation and reliable scanning
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard
              title="Scan with a phone"
              description="Point your camera at a QR or 1D barcode and get instant results from your browser."
            />
            <FeatureCard
              title="Export clean files"
              description="Download standards-based SVG, PNG or PDF output from the generator without extra software."
              variant="accent"
            />
            <FeatureCard
              title="Work without sign-up"
              description="Generate, scan and print without accounts, uploads or hidden limits."
            />
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-[var(--gutter)] py-16">
          <div className="mb-8 max-w-[700px]">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-lime-400">
              How it works
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-[-0.06em] text-white md:text-6xl">
              Create, scan and share in three quick steps
            </h2>
          </div>
          <HowTo steps={steps} />
        </section>

        <section className="mx-auto max-w-[1280px] px-[var(--gutter)] py-16">
          <div className="mb-8 max-w-[700px]">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-lime-400">
              Use cases
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-[-0.06em] text-white md:text-6xl">
              Useful across everyday workflows
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {["Restaurants", "Wi‑Fi", "Payments", "Inventory"].map((item) => (
              <div
                key={item}
                className="rounded-[24px] border border-white/10 bg-[#101218] p-6 text-white"
              >
                <div className="font-display text-[2rem] tracking-[-0.06em]">
                  {item}
                </div>
                <p className="mt-4 text-base leading-7 text-zinc-300">
                  Create a code for menu links, network access, checkout flows
                  or item tracking with a clean scan experience.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-[var(--gutter)] py-16">
          <div className="mb-8 max-w-[700px]">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-lime-400">
              FAQ
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-[-0.06em] text-white md:text-6xl">
              Common questions about QR codes and barcode scanning
            </h2>
          </div>
          <Faq items={faqItems} />
        </section>
      </main>
      <Footer />
    </>
  );
}
