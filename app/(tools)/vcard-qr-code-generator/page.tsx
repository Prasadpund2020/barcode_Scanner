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
  path: "/vcard-qr-code-generator",
  title: "vCard QR Code Generator – Digital Business Card | Scannow",
  description:
    "Turn your contact details into a vCard QR code. Scan to save name, phone, email and website. Free and private.",
});

const faqItems = [
  {
    question: "What is a vCard QR code?",
    answer:
      "A vCard QR code stores contact details in a standard format so a user can save the data to their phone contacts.",
  },
  {
    question: "Can I include my website and email?",
    answer:
      "Yes. A vCard QR code can include a name, phone, email, job title, company and website URL.",
  },
  {
    question: "Will the contact save automatically?",
    answer:
      "On supported phones, scanning the code can open a contact card and let the user save it quickly.",
  },
  {
    question: "Is it good for business cards?",
    answer:
      "Yes. It is a common choice for digital business cards that work on print or screens.",
  },
  {
    question: "Can I use it for personal branding?",
    answer:
      "Yes. It is useful for networking, portfolios, freelance work and local business details.",
  },
];

const steps = [
  {
    title: "Add your contact info",
    description:
      "Enter your name, phone, email, company and website details in the vCard content.",
  },
  {
    title: "Customize the design",
    description:
      "Adjust the colors and QR styling so it matches your brand or printed materials.",
  },
  {
    title: "Download or share",
    description:
      "Save the QR code and place it on a business card, website or social profile.",
  },
];

export default function VcardQRPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[1280px] px-[var(--gutter)] py-8 md:py-12">
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            {
              href: "/vcard-qr-code-generator",
              label: "vCard QR code generator",
            },
          ]}
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-lime-400">
              vCard QR code generator
            </p>
            <h1 className="mt-4 font-display text-5xl tracking-[-0.06em] text-white md:text-7xl">
              vCard QR Code Generator
            </h1>
            <p className="answer mt-6 max-w-[54ch] text-lg leading-8 text-zinc-300">
              A vCard QR code turns contact details into a scannable digital
              card. The user can read the information and save it to their
              contacts in one step.
            </p>
            <p className="mt-6 max-w-[60ch] text-base leading-8 text-zinc-300">
              This format is helpful for professionals, service providers, trade
              businesses and event contacts. Instead of swapping numbers or
              typing email addresses manually, a quick scan captures the details
              on a user’s phone in a standard format.
            </p>
          </div>

          <GeneratorCard />
        </div>

        <section className="mt-16">
          <div className="grid gap-5 md:grid-cols-3">
            <FeatureCard
              title="Easy contact capture"
              description="Save a modern contact card that works across many phone models and apps."
            />
            <FeatureCard
              title="Professional look"
              description="Use it on business cards, portfolio pages or client meeting materials."
              variant="accent"
            />
            <FeatureCard
              title="Always accessible"
              description="A printed or digital vCard QR code is easy for people to scan with a phone camera."
            />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-4xl tracking-[-0.06em] text-white md:text-5xl">
            How do I create a vCard QR code?
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
          <Link href="/upi-qr-code-generator" className="hover:text-lime-300">
            UPI QR code generator
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
