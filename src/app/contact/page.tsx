import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedContactForm } from "@/components/contact/UnifiedContactForm";
import { PAGE_CONTAINER_CLASS } from "@/components/footer/ExceliaFooter";
import { PageGreenBand } from "@/components/layout/PageGreenBand";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Contact Excelia",
  description:
    "Reach Excelia by email for gardener questions, trade routes, press, and partnerships.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageGreenBand className="pt-6 sm:pt-8">
        <p className="font-[family-name:var(--font-barlow)] text-xs font-semibold uppercase tracking-[0.28em] text-[var(--excelia-gold)]">
          Contact
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-instrument-serif)] text-4xl italic leading-tight sm:text-5xl">
          Reach us by email
        </h1>
        <p className="mt-5 max-w-2xl font-[family-name:var(--font-barlow)] text-[15px] leading-relaxed text-white/88 sm:text-base">
          We keep mail at the centre on purpose. It suits a heritage register and
          leaves a single thread your team can follow.
        </p>
      </PageGreenBand>

      <div className={`${PAGE_CONTAINER_CLASS} pb-28 pt-12 lg:pt-16`}>
        <p className="font-[family-name:var(--font-barlow)] text-[15px] leading-relaxed text-[var(--excelia-forest)] sm:text-base">
          Pick the reason that fits, add your details, and send. Your client
          opens with a draft you can edit before it goes.
        </p>
        <UnifiedContactForm />

        <div className="mt-16 border-t border-[var(--excelia-stone)]/35 pt-10">
          <p className="font-[family-name:var(--font-barlow)] text-[13px] leading-relaxed text-[var(--excelia-olive)]">
            We list a UK registered office or a Grenada operational line only once
            the details are confirmed. No placeholder addresses on the site.
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
        </div>
      </div>
    </PageShell>
  );
}
