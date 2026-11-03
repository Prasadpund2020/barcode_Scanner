import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs";
import Faq from "@/components/Faq";
import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";
import GeneratorCard from "@/components/GeneratorCard";
import HowTo from "@/components/HowTo";
import Nav from "@/components/Nav";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/upi-qr-code-generator",
  title: "Free UPI QR Code Generator for Payments | Scannow",
  description:
    "Generate a UPI QR code with your UPI ID and amount. Free, no sign-up, print-ready for shops and invoices.",
});

const faqItems = [
  {
    question: "What is a UPI QR code?",
    answer:
      "A UPI QR code is a payment QR that encodes a payment address and optional amount for a buyer to scan.",
  },
  {
    question: "Is a UPI QR code safe?",
    answer:
      "Yes, when you provide the right UPI ID and amount, it lets the receiver scan a payment request directly through the payment app.",
  },
  {
    question: "Can I add an amount?",
    answer:
      "Yes. Many UPI QR flows include a payment amount and currency so the payer sees the exact amount before sending.",
  },
  {
    question: "Can I print this for a shop?",
    answer:
      "Yes. You can print or display it at a checkout counter, invoice or service desk.",
  },
  {
    question: "Do I need an app?",
    answer:
      "The payer uses their preferred UPI-enabled app to read and complete the payment.",
  },
];

const steps = [
  {
    title: "Enter your UPI ID",
    description:
      "Add the receiving virtual payment address you want clients to pay to.",
  },
  {
    title: "Add payment details",
    description:
      "Include the amount and optional name or notes for the payment transaction.",
  },
  {
    title: "Print or share",
    description:
      "Download the QR code for invoices, shop counters or digital payment notes.",
  },
];

export default function UpiQRPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[1280px] px-[var(--gutter)] py-8 md:py-12">
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { href: "/upi-qr-code-generator", label: "UPI QR code generator" },
          ]}
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-lime-400">
              UPI QR code generator
            </p>
            <h1 className="mt-4 font-display text-5xl tracking-[-0.06em] text-white md:text-7xl">
              UPI QR Code Generator
            </h1>
            <p className="answer mt-6 max-w-[54ch] text-lg leading-8 text-zinc-300">
              A UPI QR code helps a buyer send money by scanning a payment code
              that contains the payee address and amount. It makes quick digital
              payment easier for shops, small businesses and service providers.
            </p>
            <p className="mt-6 max-w-[60ch] text-base leading-8 text-zinc-300">
              QR-based payments reduce typing errors and help people pay from a
              mobile app without entering long UPI IDs manually. Scannow gives
              you a fast, browser-based way to build the code for invoices,
              counters and digital payment pages.
            </p>
          </div>

          <GeneratorCard />
        </div>

        <section className="mt-16">
          <div className="grid gap-5 md:grid-cols-3">
            <FeatureCard
              title="Simpler checkout"
              description="Buyers scan the code and pay with their preferred UPI-enabled app."
            />
            <FeatureCard
              title="Clear amounts"
              description="Add the payment total so the payer sees the exact amount before confirming."
              variant="accent"
            />
            <FeatureCard
              title="Print friendly"
              description="Use it on invoices, cards or shop counter displays with easy scanning from a phone."
            />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-4xl tracking-[-0.06em] text-white md:text-5xl">
            How do I generate a UPI QR code?
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
          <Link href="/qr-code-generator" className="hover:text-lime-300">
            QR code generator
          </Link>
          <Link href="/wifi-qr-code-generator" className="hover:text-lime-300">
            Wi‑Fi QR code generator
          </Link>
          <Link href="/vcard-qr-code-generator" className="hover:text-lime-300">
            vCard QR code generator
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
