import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeritageRule } from "@/components/about/HeritageRule";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "About Excelia — Catherine Excelia Baptiste",
  description:
    "The story of Sister — Grenadian estate owner, nutmeg trader, and the woman behind the Excelia name.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <article className="mx-auto max-w-3xl px-4 pb-24 pt-10 sm:px-6 lg:max-w-[46rem] lg:pt-14">
        <p className="font-[family-name:var(--font-barlow)] text-xs font-semibold uppercase tracking-[0.28em] text-[var(--excelia-tan)]">
          About
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-instrument-serif)] text-4xl italic leading-tight text-[var(--excelia-forest)] sm:text-5xl">
          The woman behind the name
        </h1>

        {/* Act 1 — Hero: replace /assets/about-polaroid.jpg when deck polaroid + wallpaper asset is exported */}
        <div className="relative mt-10 overflow-hidden rounded-2xl border border-[var(--excelia-stone)]/40 bg-[#3d2f28] shadow-[0_28px_80px_rgba(45,77,54,0.2)]">
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
              alt="Portrait placeholder — replace with Catherine Excelia Baptiste polaroid from brand deck"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 560px"
              priority
            />
          </div>
          <p className="relative border-t border-white/10 bg-black/35 px-4 py-3 text-center font-[family-name:var(--font-barlow)] text-[11px] leading-snug text-white/80">
            Replace this image with the polaroid hero from the deck, full-bleed on floral
            vintage wallpaper — keep the wallpaper visible; it carries the brand.
          </p>
        </div>

        <div className="prose prose-neutral mt-10 max-w-none font-[family-name:var(--font-barlow)] text-[15px] leading-relaxed text-[var(--excelia-forest)] prose-p:mb-5 sm:text-base">
          <p className="text-lg font-medium sm:text-xl">
            <strong>Catherine Excelia Baptiste</strong> was born in{" "}
            <strong>1892</strong> in <strong>Crochu, St. Andrew&apos;s</strong>,
            Grenada. To those who knew her, she was &ldquo;
            <strong>Sister</strong>.&rdquo; She was an estate owner and a trader
            in nutmeg and cocoa — a woman who moved between the hills of
            Grenada and the wider world, building a life from the crops that grew
            at her doorstep.
          </p>
          <p>
            Her story isn&apos;t decoration for a marketing deck. It&apos;s the
            reason this brand exists — and why the word &ldquo;Excelia&rdquo; on
            every sack is more than a label.
          </p>
        </div>

        <HeritageRule label="Nutmeg · heritage" />

        <section aria-labelledby="act2-heading">
          <h2
            id="act2-heading"
            className="font-[family-name:var(--font-instrument-serif)] text-3xl italic text-[var(--excelia-forest)] sm:text-[2.25rem]"
          >
            The legacy
          </h2>
          <div className="mt-8 space-y-5 font-[family-name:var(--font-barlow)] text-[15px] leading-relaxed text-[var(--excelia-forest)] sm:text-base">
            <p>
              From the <strong>1930s</strong> estate economy of Grenada to
              gardens in the United Kingdom today, there is a single thread:
              respect for the land, the fruit, and the people who work it.
              Excelia isn&apos;t a fabricated heritage name pulled from a naming
              agency — <strong>Excelia was Sister&apos;s middle name.</strong>
            </p>
            <p>
              That isn&apos;t trivia. It&apos;s the bridge between a Grenadian
              estate past and a modern soil-topper brand with roots you can name.
              Authenticity isn&apos;t claimed here; it&apos;s inherited.
            </p>
          </div>
        </section>

        <HeritageRule />

        <section aria-labelledby="act3-heading">
          <h2
            id="act3-heading"
            className="font-[family-name:var(--font-instrument-serif)] text-3xl italic text-[var(--excelia-forest)] sm:text-[2.25rem]"
          >
            Carrying it forward
          </h2>
          <div className="mt-8 space-y-5 font-[family-name:var(--font-barlow)] text-[15px] leading-relaxed text-[var(--excelia-forest)] sm:text-base">
            <p>
              I didn&apos;t choose this story at a whiteboard — I inherited a
              name that already meant something in Crochu before it meant
              anything on a website. Excelia exists because nutmeg shells
              shouldn&apos;t be waste, and because Sister&apos;s legacy deserves
              to travel in something more honest than buzzwords.
            </p>
            <p>
              What we&apos;re building is small, serious, and soil-first: a way
              to put Grenadian nutmeg co-product back into the ground —
              deliberately, beautifully, and without apology. The line between the
              woman who traded nutmeg a century ago and the work we do today
              isn&apos;t marketing. It&apos;s the point.
            </p>
          </div>
        </section>

        <div className="mt-16 flex flex-wrap gap-4 border-t border-[var(--excelia-stone)]/35 pt-10">
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
      </article>
    </PageShell>
  );
}
