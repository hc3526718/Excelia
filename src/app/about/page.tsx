import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeritageRule } from "@/components/about/HeritageRule";
import { PAGE_CONTAINER_CLASS } from "@/components/footer/ExceliaFooter";
import { PageGreenBand } from "@/components/layout/PageGreenBand";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "About Excelia: Catherine Excelia Baptiste",
  description:
    "Sister, Grenadian estate owner and nutmeg trader, and the woman behind the Excelia name.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageGreenBand className="pt-6 sm:pt-8">
        <p className="font-[family-name:var(--font-barlow)] text-xs font-semibold uppercase tracking-[0.28em] text-[var(--excelia-gold)]">
          About
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-instrument-serif)] text-4xl italic leading-tight sm:text-5xl">
          The woman behind the name
        </h1>
        <p className="mt-5 max-w-2xl font-[family-name:var(--font-barlow)] text-[15px] leading-relaxed text-white/88 sm:text-base">
          Catherine Excelia Baptiste lived in Crochu when nutmeg and cocoa paid
          the bills. Her middle name is on every sack on purpose.
        </p>
      </PageGreenBand>

      <div className={`${PAGE_CONTAINER_CLASS} pb-24 pt-12 lg:pt-16`}>
        <div className="relative mt-2 overflow-hidden rounded-2xl border border-[var(--excelia-stone)]/40 bg-[#3d2f28] shadow-[0_28px_80px_rgba(45,77,54,0.2)]">
          <div
            className="absolute inset-0 opacity-[0.14] mix-blend-overlay"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, #5c4a3a 0, #5c4a3a 1px, transparent 1px, transparent 8px)`,
            }}
            aria-hidden
          />
          <div className="relative mx-auto aspect-[4/5] max-h-[min(78vh,640px)] w-full max-w-lg sm:aspect-[3/4]">
            <Image
              src="/assets/NutmegImg.jpg"
              alt="Placeholder portrait: swap for Catherine Excelia Baptiste polaroid from brand deck"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 560px"
              priority
            />
          </div>
          <p className="relative border-t border-white/10 bg-black/35 px-4 py-3 text-center font-[family-name:var(--font-barlow)] text-[11px] leading-snug text-white/80">
            Replace with the polaroid hero from the deck, edge to edge on floral
            vintage wallpaper. Keep the wallpaper in frame; it does real brand
            work.
          </p>
        </div>

        <div className="prose prose-neutral mt-10 max-w-none font-[family-name:var(--font-barlow)] text-[15px] leading-relaxed text-[var(--excelia-forest)] prose-p:mb-5 sm:text-base">
          <p className="text-lg font-medium sm:text-xl">
            <strong>Catherine Excelia Baptiste</strong> was born in{" "}
            <strong>1892</strong> in <strong>Crochu, St. Andrew&apos;s</strong>,
            Grenada. People who knew her called her &ldquo;
            <strong>Sister</strong>.&rdquo; She ran an estate and traded nutmeg
            and cocoa, moving between the Grenadian hills and ports abroad,
            living off what grew within reach.
          </p>
          <p>
            Her story is not wallpaper for a slide deck. It is why this brand
            exists, and why &ldquo;Excelia&rdquo; printed on a sack is the name
            she already carried.
          </p>
        </div>

        <HeritageRule label="Nutmeg heritage" />

        <PageGreenBand className="my-14 sm:my-16">
          <h2
            id="act2-heading"
            className="font-[family-name:var(--font-instrument-serif)] text-3xl italic sm:text-[2.25rem]"
          >
            The legacy
          </h2>
          <div className="mt-8 space-y-5 font-[family-name:var(--font-barlow)] text-[15px] leading-relaxed text-white/92 sm:text-base">
            <p>
              From <strong>1930s</strong> estate life in Grenada to gardens in
              the United Kingdom today, one thread stays steady: respect for the
              land, the crop, and the hands that tend both. Excelia was never
              invented by an agency.{" "}
              <strong>Excelia was Sister&apos;s middle name.</strong>
            </p>
            <p>
              That detail matters. It ties a Grenadian estate past to a soil
              topper sold today under a name you can trace. The story is
              inherited, not borrowed.
            </p>
          </div>
        </PageGreenBand>

        <HeritageRule />

        <PageGreenBand className="my-6 sm:my-8">
          <h2
            id="act3-heading"
            className="font-[family-name:var(--font-instrument-serif)] text-3xl italic sm:text-[2.25rem]"
          >
            Carrying it forward
          </h2>
          <div className="mt-8 space-y-5 font-[family-name:var(--font-barlow)] text-[15px] leading-relaxed text-white/92 sm:text-base">
            <p>
              I did not sketch this lineage on a whiteboard. The name meant
              something in Crochu before it appeared online. Excelia exists
              because nutmeg shells deserve better than dump piles, and
              Sister&apos;s memory deserves plain language.
            </p>
            <p>
              What we are building stays small, serious, and soil led: shells
              from Grenadian harvests worked back into the ground with care.
              The link between the woman who traded nutmeg a century ago and the
              work happening now is the whole reason to bother.
            </p>
          </div>
        </PageGreenBand>

        <div className="mt-14 flex flex-wrap gap-4 border-t border-[var(--excelia-stone)]/35 pt-10">
          <Link
            href="/our-impact"
            className="inline-flex rounded-full border border-[var(--excelia-forest)]/40 px-6 py-3 font-[family-name:var(--font-barlow)] text-sm font-semibold text-[var(--excelia-forest)] transition-colors hover:bg-[var(--excelia-forest)]/08"
          >
            Why Excelia
          </Link>
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-[var(--excelia-rust)] px-6 py-3 font-[family-name:var(--font-barlow)] text-sm font-semibold text-white shadow-sm transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-md"
          >
            Contact
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
