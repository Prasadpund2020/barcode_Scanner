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
  path: "/qr-code-generator",
  title: "Free QR Code Generator – Custom, No Sign-up | Scannow",
  description:
    "Make a free QR code for a link, text or contact. Change colours and shape, then download SVG, PNG or PDF. No expiry, no limits.",
});

const faqItems = [
  {
    question: "Is the QR code generator really free?",
    answer:
      "Yes. Scannow lets you create QR codes online without a paid plan, sign-up or expiry check.",
  },
  {
    question: "Can I change the colors of my QR code?",
    answer:
      "Yes. The generator includes live color selection so you can match your brand, print, or event theme.",
  },
  {
    question: "Does a QR code expire?",
    answer:
      "Static QR codes do not expire. If you create a QR code for a website or text, it remains valid until the destination changes.",
  },
  {
    question: "What file types can I download?",
    answer:
      "You can download the QR code as SVG, PNG or PDF for print, web or sharing workflows.",
  },
  {
    question: "Is my QR code data private?",
    answer:
      "The code content is generated in your browser and is not uploaded to a server unless you choose to share the file externally.",
  },
];

const steps = [
  {
    title: "Pick a QR type",
    description:
      "Choose a URL, text, Wi‑Fi, vCard or UPI format for your code.",
  },
  {
    title: "Customize the design",
    description:
      "Set a foreground color, error level and module shape to match your use case.",
  },
  {
    title: "Download it",
    description:
      "Save the output as SVG, PNG or PDF for print or digital sharing.",
  },
];

export default function QRGeneratorPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[1280px] px-[var(--gutter)] py-8 md:py-12">
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { href: "/qr-code-generator", label: "QR code generator" },
          ]}
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-lime-400">
              QR code generator
            </p>
            <h1 className="mt-4 font-display text-5xl tracking-[-0.06em] text-white md:text-7xl">
              Free QR Code Generator
            </h1>
            <p className="answer mt-6 max-w-[54ch] text-lg leading-8 text-zinc-300">
              A QR code generator creates a machine-readable square layout that
              links to a website, text, contact, Wi‑Fi network or payment
              request. Use it to create a clean code in seconds without an
              account or app install.
            </p>
            <p className="mt-6 max-w-[60ch] text-base leading-8 text-zinc-300">
              QR codes are used for menus, product pages, Wi‑Fi access, event
              sign-in, contact cards and payment links. They work because phones
              can scan them quickly, even from a printed page or a digital
              screen. Scannow makes it simple to generate a reliable result and
              then download it in a format that is easy to print or share.
            </p>
          </div>

          <GeneratorCard />
        </div>

        <section className="mt-16">
          <div className="grid gap-5 md:grid-cols-3">
            <FeatureCard
              title="Easy to use"
              description="Create a QR code for a link, text or contact in just a few steps."
            />
            <FeatureCard
              title="Brand-ready"
              description="Adjust shape, color and error correction for print, signage and web content."
              variant="accent"
            />
            <FeatureCard
              title="Export clean"
              description="Download high-quality SVG, PNG or PDF files for sharing and printing."
            />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-4xl tracking-[-0.06em] text-white md:text-5xl">
            How do I make a QR code?
          </h2>
          <div className="mt-8">
            <HowTo steps={steps} />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-4xl tracking-[-0.06em] text-white md:text-5xl">
            Why QR codes work so well
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <FeatureCard
              title="Quick scans"
              description="Phones read QR codes instantly when the design has enough contrast and quiet space."
            />
            <FeatureCard
              title="Small but rich"
              description="A QR code can carry a URL, contact card, payment flow or Wi‑Fi credentials in a compact square."
              variant="accent"
            />
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
          <Link href="/wifi-qr-code-generator" className="hover:text-lime-300">
            Wi‑Fi QR code generator
          </Link>
          <Link href="/upi-qr-code-generator" className="hover:text-lime-300">
            UPI QR code generator
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
