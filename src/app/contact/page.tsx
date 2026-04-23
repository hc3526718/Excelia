import type { Metadata } from "next";
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
      </div>
    </PageShell>
  );
}
