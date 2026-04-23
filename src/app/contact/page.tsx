import type { Metadata } from "next";
import Link from "next/link";
import {
  GardenerContactForm,
  PressBlurb,
  TradeEnquiryForm,
} from "@/components/contact/ContactTracks";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Contact Excelia",
  description:
    "Reach Excelia for gardener questions, trade and landscape enquiries, or press and partnerships — email-first, no chat widgets.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-3xl px-4 pb-28 pt-10 sm:px-6 lg:max-w-[46rem] lg:pt-14">
        <p className="font-[family-name:var(--font-barlow)] text-xs font-semibold uppercase tracking-[0.28em] text-[var(--excelia-tan)]">
          Contact
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-instrument-serif)] text-4xl italic leading-tight text-[var(--excelia-forest)] sm:text-5xl">
          Reach us by email
        </h1>
        <p className="mt-6 font-[family-name:var(--font-barlow)] text-[15px] leading-relaxed text-[var(--excelia-olive)] sm:text-base">
          Excelia is deliberately email-first — it fits a heritage register and
          gives growers, buyers, and partners a clear thread to follow. Choose
          the track that matches you; each opens a draft in your mail client.
        </p>

        <section className="mt-16 scroll-mt-24" aria-labelledby="gardeners-heading">
          <h2
            id="gardeners-heading"
            className="font-[family-name:var(--font-instrument-serif)] text-2xl italic text-[var(--excelia-forest)] sm:text-3xl"
          >
            For gardeners
          </h2>
          <p className="mt-4 font-[family-name:var(--font-barlow)] text-[15px] leading-relaxed text-[var(--excelia-forest)]">
            Questions about using nutmeg shells in beds, paths, or containers —
            or to hear when new batches land.
          </p>
          <GardenerContactForm />
        </section>

        <section
          className="mt-20 border-t border-[var(--excelia-stone)]/35 pt-16 scroll-mt-24"
          aria-labelledby="trade-heading"
        >
          <h2
            id="trade-heading"
            className="font-[family-name:var(--font-instrument-serif)] text-2xl italic text-[var(--excelia-forest)] sm:text-3xl"
          >
            Garden centres &amp; landscape architects
          </h2>
          <p className="mt-4 font-[family-name:var(--font-barlow)] text-[15px] leading-relaxed text-[var(--excelia-forest)]">
            Wholesale-style enquiries — volume, regions, and timing — stay on a
            dedicated route so trade buyers aren&apos;t mixed with retail
            traffic.
          </p>
          <TradeEnquiryForm />
        </section>

        <section
          className="mt-20 border-t border-[var(--excelia-stone)]/35 pt-16 scroll-mt-24"
          aria-labelledby="press-heading"
        >
          <h2
            id="press-heading"
            className="font-[family-name:var(--font-instrument-serif)] text-2xl italic text-[var(--excelia-forest)] sm:text-3xl"
          >
            Press &amp; partnerships
          </h2>
          <PressBlurb />
        </section>

        <footer className="mt-20 border-t border-[var(--excelia-stone)]/35 pt-10">
          <p className="font-[family-name:var(--font-barlow)] text-[13px] leading-relaxed text-[var(--excelia-olive)]">
            UK registered office and any Grenada operational contact can be listed
            here once confirmed — we don&apos;t publish placeholders for
            addresses.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="inline-flex rounded-full border border-[var(--excelia-forest)]/40 px-6 py-3 font-[family-name:var(--font-barlow)] text-sm font-semibold text-[var(--excelia-forest)] transition-colors hover:bg-[var(--excelia-forest)]/08"
            >
              About Sister
            </Link>
            <Link
              href="/shop"
              className="inline-flex rounded-full bg-[var(--excelia-rust)] px-6 py-3 font-[family-name:var(--font-barlow)] text-sm font-semibold text-white shadow-sm transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-md"
            >
              Shop
            </Link>
          </div>
        </footer>
      </div>
    </PageShell>
  );
}
