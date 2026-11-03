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
  path: "/qr-code-scanner",
  title: "Online QR Code Scanner – Scan with Camera or Image | Scannow",
  description:
    "Scan QR codes online with your camera or an uploaded image. Nothing is uploaded; decoding happens on your device.",
});

const faqItems = [
  {
    question: "Does the QR scanner upload my images?",
    answer:
      "No. The decoder runs locally in the browser, so the code never leaves your device while scanning.",
  },
  {
    question: "Can I scan from a photo?",
    answer:
      "Yes. You can upload an image and scan it directly without using a separate app.",
  },
  {
    question: "What if the QR code is blurry?",
    answer:
      "Try a clearer image, better lighting or a closer camera angle before retrying the scan.",
  },
  {
    question: "Does it work offline?",
    answer:
      "The scanner can be used when the page is already loaded, and the browser handles the decode locally.",
  },
  {
    question: "Can I read QR codes with my phone camera?",
    answer:
      "Yes, the browser camera scanner works on supported mobile browsers and desktop devices.",
  },
];

const steps = [
  {
    title: "Start the camera",
    description:
      "Allow access to your camera when the browser asks for permission.",
  },
  {
    title: "Center the code",
    description:
      "Point the camera at the QR code with clear lighting and a steady angle.",
  },
  {
    title: "Copy the result",
    description:
      "Read the decoded message and copy it if needed for sharing or later use.",
  },
];

export default function QRScannerPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[1280px] px-[var(--gutter)] py-8 md:py-12">
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { href: "/qr-code-scanner", label: "QR code scanner" },
          ]}
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-lime-400">
              QR code scanner
            </p>
            <h1 className="mt-4 font-display text-5xl tracking-[-0.06em] text-white md:text-7xl">
              Online QR Code Scanner
            </h1>
            <p className="answer mt-6 max-w-[54ch] text-lg leading-8 text-zinc-300">
              A QR code scanner reads the code from a camera or a saved image
              and returns the decoded content on the same device. It is useful
              for links, text, Wi‑Fi details and contact cards.
            </p>
            <p className="mt-6 max-w-[60ch] text-base leading-8 text-zinc-300">
              Camera-based scanning is helpful when you are moving between
              locations, checking packaging, or reading a printed link from
              signage. Scannow keeps the decryption local to the browser so the
              process stays private and simple.
            </p>
          </div>

          <ScannerViewfinder />
        </div>

        <section className="mt-16">
          <div className="grid gap-5 md:grid-cols-3">
            <FeatureCard
              title="Camera ready"
              description="Use your device camera to read a code quickly and without a separate app."
            />
            <FeatureCard
              title="Image upload"
              description="Open a saved image to decode a QR code without a second device."
              variant="accent"
            />
            <FeatureCard
              title="Private decode"
              description="Scanning stays local in the browser so no data is uploaded to a remote server."
            />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-4xl tracking-[-0.06em] text-white md:text-5xl">
            How do I scan a QR code?
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
          <Link href="/barcode-scanner-online" className="hover:text-lime-300">
            Barcode scanner online
          </Link>
          <Link href="/qr-code-generator" className="hover:text-lime-300">
            QR code generator
          </Link>
          <Link href="/wifi-qr-code-generator" className="hover:text-lime-300">
            Wi‑Fi QR code generator
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
