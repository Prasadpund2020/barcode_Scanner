import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs";
import Faq from "@/components/Faq";
import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";
import HowTo from "@/components/HowTo";
import Nav from "@/components/Nav";
import ScannerViewfinder from "@/components/ScannerViewfinder";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/barcode-scanner-online",
  title: "Online Barcode Scanner – Reads Code 128, EAN, UPC | Scannow",
  description:
    "Scan 1D barcodes your phone camera can’t read: Code 128, Code 39, EAN-13, UPC-A, ITF. Free, private and instant.",
});

const faqItems = [
  {
    question: "Which barcodes can this scanner read?",
    answer:
      "Scannow supports common 1D barcodes such as Code 128, Code 39, EAN-13, UPC-A, ITF and Codabar.",
  },
  {
    question: "Is this better than my phone camera?",
    answer:
      "It is useful when your default camera app does not decode a low-contrast or damaged barcode.",
  },
  {
    question: "Can I scan from a file?",
    answer:
      "Yes. Upload an image with the barcode and the browser decodes it locally.",
  },
  {
    question: "Does it work on mobile?",
    answer:
      "Yes. It works on supported mobile browsers that allow camera access.",
  },
  {
    question: "Is any data sent to the cloud?",
    answer: "No. Decoding happens locally in the browser on your device.",
  },
];

const steps = [
  {
    title: "Start the scan",
    description:
      "Tap Start camera and grant permission when the browser asks for access.",
  },
  {
    title: "Frame the barcode",
    description:
      "Align the barcode in the viewfinder with steady light and minimal glare.",
  },
  {
    title: "Read the result",
    description:
      "Review the decoded text and copy it when the result appears in the result chip.",
  },
];

export default function BarcodeScannerPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[1280px] px-[var(--gutter)] py-8 md:py-12">
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            {
              href: "/barcode-scanner-online",
              label: "Barcode scanner online",
            },
          ]}
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-lime-400">
              Barcode scanner
            </p>
            <h1 className="mt-4 font-display text-5xl tracking-[-0.06em] text-white md:text-7xl">
              Online Barcode Scanner
            </h1>
            <p className="answer mt-6 max-w-[54ch] text-lg leading-8 text-zinc-300">
              A barcode scanner reads standard 1D codes such as EAN-13, UPC-A,
              Code 128 and Code 39. It is useful when a regular phone camera
              cannot decode a label or a product code is printed in low
              contrast.
            </p>
            <p className="mt-6 max-w-[60ch] text-base leading-8 text-zinc-300">
              Many packaged products and warehouse labels use 1D barcodes that
              are less common than QR codes. Scannow is designed to decode these
              formats in the browser so you can keep the process fast, private
              and accessible on the device you already have.
            </p>
          </div>

          <ScannerViewfinder />
        </div>

        <section className="mt-16">
          <div className="grid gap-5 md:grid-cols-3">
            <FeatureCard
              title="1D barcode support"
              description="Decode EAN-13, UPC-A, Code 128, Code 39, ITF and Codabar in one workflow."
            />
            <FeatureCard
              title="Mobile-friendly"
              description="Many phone cameras miss difficult black-and-white labels; this tool helps fill the gap."
              variant="accent"
            />
            <FeatureCard
              title="Local processing"
              description="Everything runs in the browser so the scan stays on the same device."
            />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-4xl tracking-[-0.06em] text-white md:text-5xl">
            How do I scan a barcode?
          </h2>
          <div className="mt-8">
            <HowTo steps={steps} />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-4xl tracking-[-0.06em] text-white md:text-5xl">
            Frequently asked questions
          </h2>
          <div className="mt-8">
            <Faq items={faqItems} />
          </div>
        </section>

        <div className="mt-16 flex flex-wrap gap-4 text-sm text-zinc-300">
          <Link href="/qr-code-scanner" className="hover:text-lime-300">
            QR code scanner
          </Link>
          <Link href="/barcode-generator" className="hover:text-lime-300">
            Barcode generator
          </Link>
          <Link href="/qr-code-generator" className="hover:text-lime-300">
            QR code generator
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
