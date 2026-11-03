import Link from "next/link";

import { BRAND } from "@/lib/brand";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/404",
  title: "Page not found | Scannow",
  description: "The page you requested is not available.",
});

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 py-20">
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-lime-500">
        404
      </p>
      <h1 className="text-5xl font-bold tracking-tight text-white">
        Page not found
      </h1>
      <p className="mt-6 max-w-xl text-lg text-zinc-300">
        The page you requested may have moved or no longer exists.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/"
          className="rounded-full bg-lime-400 px-5 py-3 font-medium text-zinc-950"
        >
          Go home
        </Link>
        <Link
          href="/qr-code-generator"
          className="rounded-full border border-white/20 px-5 py-3 text-white"
        >
          Create a QR code
        </Link>
      </div>
      <p className="mt-10 text-sm text-zinc-400">
        {BRAND.name} — {BRAND.tagline}
      </p>
    </main>
  );
}
