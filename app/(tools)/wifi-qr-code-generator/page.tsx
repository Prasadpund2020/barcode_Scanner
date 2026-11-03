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
  path: "/wifi-qr-code-generator",
  title: "Wi-Fi QR Code Generator – Share Wi-Fi Easily | Scannow",
  description:
    "Create a Wi-Fi QR code so guests join your network without typing the password. Free, private, printable.",
});

const faqItems = [
  {
    question: "What is a Wi‑Fi QR code?",
    answer:
      "A Wi‑Fi QR code stores the network name and password in a format that a phone can join automatically.",
  },
  {
    question: "Does it work for WPA and WPA2?",
    answer:
      "Yes. The Wi‑Fi QR format supports common security modes, including WPA and WPA2 networks.",
  },
  {
    question: "Is my Wi‑Fi password safe?",
    answer:
      "The QR code contains the network details in plain machine-readable text. Keep it in a private or trusted location.",
  },
  {
    question: "Can I print it on a sign?",
    answer:
      "Yes. You can print a Wi‑Fi QR code on a welcome sign, desk card or guest instructions sheet.",
  },
  {
    question: "Will guests need an app?",
    answer:
      "No. Most modern phones read the QR code and offer a quick join prompt without typing the password.",
  },
];

const steps = [
  {
    title: "Set your network name",
    description:
      "Enter the SSID that guests should connect to on your Wi‑Fi network.",
  },
  {
    title: "Choose security type",
    description:
      "Match the network password format to the security mode your router uses.",
  },
  {
    title: "Print or share",
    description:
      "Save the code and place it where guests can scan it quickly and conveniently.",
  },
];

export default function WifiQRPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[1280px] px-[var(--gutter)] py-8 md:py-12">
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            {
              href: "/wifi-qr-code-generator",
              label: "Wi‑Fi QR code generator",
            },
          ]}
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-lime-400">
              Wi‑Fi QR code generator
            </p>
            <h1 className="mt-4 font-display text-5xl tracking-[-0.06em] text-white md:text-7xl">
              Wi‑Fi QR Code Generator
            </h1>
            <p className="answer mt-6 max-w-[54ch] text-lg leading-8 text-zinc-300">
              A Wi‑Fi QR code stores your network name and password in a format
              that a phone can read instantly. Guests can join your network
              without typing a long password on a tiny keyboard.
            </p>
            <p className="mt-6 max-w-[60ch] text-base leading-8 text-zinc-300">
              This is helpful for cafés, apartments, offices, hostels, guest
              rooms and small businesses. A quick scan reduces friction and
              keeps the network easy to access without needing to print a
              corporate note or read out complicated credentials every time.
            </p>
          </div>

          <GeneratorCard />
        </div>

        <section className="mt-16">
          <div className="grid gap-5 md:grid-cols-3">
            <FeatureCard
              title="Guest friendly"
              description="Guests connect in seconds without asking for the password again and again."
            />
            <FeatureCard
              title="Print-ready"
              description="Create a QR code that works on a welcome sign, guest card or desk placard."
              variant="accent"
            />
            <FeatureCard
              title="Low friction"
              description="One scan is easier and faster than reading long Wi‑Fi credentials out loud."
            />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-4xl tracking-[-0.06em] text-white md:text-5xl">
            How do I share a Wi‑Fi QR code?
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
