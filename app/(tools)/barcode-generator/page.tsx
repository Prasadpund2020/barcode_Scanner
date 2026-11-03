import Link from "next/link";

import BarcodeGeneratorCard from "@/components/BarcodeGeneratorCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import Faq from "@/components/Faq";
import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";
import HowTo from "@/components/HowTo";
import Nav from "@/components/Nav";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/barcode-generator",
  title: "Free Barcode Generator – Code 128, EAN-13, UPC | Scannow",
  description:
    "Create barcodes online: Code 128, Code 39, EAN-13, UPC-A and ITF. Automatic check digits. Download PNG or SVG.",
});

const faqItems = [
  {
    question: "Can I generate a Code 128 barcode for free?",
    answer:
      "Yes. Scannow creates free Code 128 and other code types in the browser without sign-up.",
  },
  {
    question: "What barcode formats are supported?",
    answer:
      "The generator supports Code 128, Code 39, EAN-13, UPC-A, ITF and Codabar.",
  },
  {
    question: "Do I need to install software?",
    answer:
      "No. The generator runs entirely in the browser and downloads a clean output file instantly.",
  },
  {
    question: "How do I print a barcode?",
    answer:
      "Generate the barcode, download SVG or PNG, then print it at any size that stays readable.",
  },
  {
    question: "Do check digits update automatically?",
    answer:
      "Yes, the generator formats standard values so common barcode checksums are preserved for valid codes.",
  },
];

const steps = [
  {
    title: "Choose a format",
    description:
      "Select the barcode standard that matches your label, use case or inventory workflow.",
  },
  {
    title: "Enter the value",
    description:
      "Type the product code or identifier you want to encode for printing or sharing.",
  },
  {
    title: "Download or print",
    description:
      "Save the output as SVG or PNG and print it at the right size for your workflow.",
  },
];

export default function BarcodeGeneratorPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[1280px] px-[var(--gutter)] py-8 md:py-12">
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { href: "/barcode-generator", label: "Barcode generator" },
          ]}
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-lime-400">
              Barcode generator
            </p>
            <h1 className="mt-4 font-display text-5xl tracking-[-0.06em] text-white md:text-7xl">
              Free Barcode Generator
            </h1>
            <p className="answer mt-6 max-w-[54ch] text-lg leading-8 text-zinc-300">
              A barcode generator turns product codes, inventory IDs, and label
              data into a readable 1D symbol. Use it to create EAN-13, UPC-A,
              Code 128 and other common codes without installing software.
            </p>
            <p className="mt-6 max-w-[60ch] text-base leading-8 text-zinc-300">
              Barcode labels are used on boxes, tags, forms, and product
              packaging. A clear barcode makes quick scanning easier for
              warehouse teams, shop floor staff, and retail counters. Scannow
              keeps the process simple: pick a format, add your value, then
              export an SVG or PNG for printing.
            </p>
          </div>

          <BarcodeGeneratorCard />
        </div>

        <section className="mt-16">
          <div className="grid gap-5 md:grid-cols-3">
            <FeatureCard
              title="Fast output"
              description="Generate a clean barcode in seconds and export it for print or digital sharing."
            />
            <FeatureCard
              title="Common standards"
              description="Use the right format for retail, fulfillment, inventory and shipping workflows."
              variant="accent"
            />
            <FeatureCard
              title="No sign-up"
              description="Create and download codes in the browser without accounts, limits or uploads."
            />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-4xl tracking-[-0.06em] text-white md:text-5xl">
            How do I make a barcode?
          </h2>
          <div className="mt-8">
            <HowTo steps={steps} />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-4xl tracking-[-0.06em] text-white md:text-5xl">
            Which barcode type should I use?
          </h2>
          <div className="mt-8 overflow-hidden rounded-[24px] border border-white/10 bg-[#101218]">
            <table className="w-full text-left text-sm text-zinc-200">
              <thead className="bg-white/5 text-zinc-300">
                <tr>
                  <th className="p-4">Format</th>
                  <th className="p-4">Typical use</th>
                  <th className="p-4">Best for</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-white/10">
                  <td className="p-4">Code 128</td>
                  <td className="p-4">General inventory and shipping</td>
                  <td className="p-4">High-density text labels</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="p-4">EAN-13</td>
                  <td className="p-4">Retail products</td>
                  <td className="p-4">Product identification</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="p-4">UPC-A</td>
                  <td className="p-4">US retail</td>
                  <td className="p-4">Consumer packaging</td>
                </tr>
              </tbody>
            </table>
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
          <Link href="/qr-code-generator" className="hover:text-lime-300">
            QR code generator
          </Link>
          <Link href="/qr-code-scanner" className="hover:text-lime-300">
            QR code scanner
          </Link>
          <Link href="/barcode-scanner-online" className="hover:text-lime-300">
            Barcode scanner online
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
