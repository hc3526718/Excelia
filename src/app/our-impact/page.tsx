import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeritageRule } from "@/components/about/HeritageRule";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Why Excelia — Our impact",
  description:
    "A better choice than conventional mulches: Grenada-grown nutmeg shells, sun-cured, fully compostable, with community and heritage at the centre.",
};

const PILLAR_ICONS = [
  {
    kicker: "GRENADA-GROWN",
    src: "/assets/Basket.png",
    alt: "Harvest basket",
    body:
      "Sourced from nutmeg estates in Grenada — the world’s second-largest nutmeg producer — where the shells would otherwise be discarded as a by-product of spice harvesting.",
  },
  {
    kicker: "SUN-CURED",
    src: "/assets/Sun.png",
    alt: "Sun",
    body:
      "Naturally dried under the Caribbean sun, preserving the shell’s aromatic oils and structural integrity.",
  },
  {
    kicker: "FULLY COMPOSTABLE",
    src: "/assets/Hand.png",
    alt: "Soil and hand",
    body:
      "Unlike gravel or plastic alternatives, Excelia shells break down gradually into the soil, returning nutrients and leaving nothing behind.",
  },
];

export default function OurImpactPage() {
  return (
    <PageShell>
      <article className="relative mx-auto max-w-3xl px-4 pb-28 pt-10 sm:px-6 lg:max-w-[46rem] lg:pt-14">
        <div
          className="pointer-events-none absolute left-1/2 top-24 -z-10 h-[min(420px,55vh)] w-[min(90vw,520px)] -translate-x-1/2 opacity-[0.06]"
          aria-hidden
          style={{
            backgroundImage: `radial-gradient(ellipse at center, var(--excelia-forest) 0%, transparent 70%)`,
          }}
        />

        <p className="font-[family-name:var(--font-barlow)] text-xs font-semibold uppercase tracking-[0.28em] text-[var(--excelia-tan)]">
          Why Excelia
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-instrument-serif)] text-4xl italic leading-tight text-[var(--excelia-forest)] sm:text-5xl">
          Soil, shells, and sense
        </h1>
        <p className="mt-6 font-[family-name:var(--font-barlow)] text-[15px] leading-relaxed text-[var(--excelia-olive)] sm:text-base">
          Heritage isn&apos;t a slogan here — it&apos;s where the shells come
          from and who grows the spice. This page is about impact: what&apos;s
          wrong with ordinary mulches, what Excelia does differently, and how we
          stay rooted in Crochu.
        </p>

        <section className="mt-16" aria-labelledby="problem-heading">
          <h2
            id="problem-heading"
            className="font-[family-name:var(--font-instrument-serif)] text-3xl italic text-[var(--excelia-forest)] sm:text-[2.25rem]"
          >
            The problem with conventional mulches
          </h2>
          <div className="mt-8 space-y-5 font-[family-name:var(--font-barlow)] text-[15px] leading-relaxed text-[var(--excelia-forest)] sm:text-base">
            <p>
              <strong>Gravel</strong> is extracted from quarries, shipped, and
              laid with heavy energy use — and it never returns organic matter to
              the soil.
            </p>
            <p>
              <strong>Bark mulch</strong> often traces back to forestry that is
              high-volume or poorly certified; supply chains can be opaque.
            </p>
            <p>
              <strong>Synthetic alternatives</strong> shed microplastics and
              can degrade soil structure over time.
            </p>
            <p>
              Gardeners who care about biodiversity deserve a mulch that fits
              how they already garden — without trade-offs that belong on an
              industrial site, not in a bed or path at home.
            </p>
          </div>
        </section>

        <HeritageRule label="Botanical · heritage" />

        <section aria-labelledby="answer-heading">
          <h2
            id="answer-heading"
            className="font-[family-name:var(--font-instrument-serif)] text-3xl italic text-[var(--excelia-forest)] sm:text-[2.25rem]"
          >
            The Excelia answer
          </h2>
          <p className="mt-6 font-[family-name:var(--font-barlow)] text-[15px] leading-relaxed text-[var(--excelia-olive)] sm:text-base">
            Three principles — the same icons you&apos;ll see on the home page,
            with copy grounded in how the product is actually made.
          </p>

          <div className="mt-12 grid gap-12 sm:gap-14">
            {PILLAR_ICONS.map((p) => (
              <div
                key={p.kicker}
                className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-8"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={88}
                  height={88}
                  className="mx-auto h-[4.5rem] w-[4.5rem] shrink-0 object-contain sm:mx-0 sm:h-20 sm:w-20"
                />
                <div>
                  <h3 className="text-center font-[family-name:var(--font-barlow)] text-xs font-semibold uppercase tracking-[0.28em] text-[var(--excelia-forest)] sm:text-left">
                    {p.kicker}
                  </h3>
                  <p className="mt-4 text-center font-[family-name:var(--font-barlow)] text-[15px] leading-relaxed text-[var(--excelia-forest)] sm:text-left sm:text-base">
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <HeritageRule />

        <section aria-labelledby="community-heading">
          <h2
            id="community-heading"
            className="font-[family-name:var(--font-instrument-serif)] text-3xl italic text-[var(--excelia-forest)] sm:text-[2.25rem]"
          >
            Community &amp; heritage
          </h2>
          <div className="mt-8 space-y-5 font-[family-name:var(--font-barlow)] text-[15px] leading-relaxed text-[var(--excelia-forest)] sm:text-base">
            <p>
              In <strong>Crochu, St. Andrew&apos;s</strong>, farming isn&apos;t
              abstract — it&apos;s families, steep plots, and harvests that have
              to pay. Excelia is built to respect that: sourcing with sense,
              partnering where it counts, and putting value back into the chain
              beyond a commodity price alone.
            </p>
            <p>
              We work alongside networks like the{" "}
              <strong>Grenada Co-operative Nutmeg Association (GCNA)</strong>{" "}
              where programmes align — improving grower livelihoods and
              value-addition from the crop our name comes from.
            </p>
          </div>

          {/* Replace with slide 9 documentary photo when available */}
          <figure className="relative mt-10 overflow-hidden rounded-2xl border border-[var(--excelia-stone)]/45 bg-[var(--excelia-forest)]/08 shadow-[0_22px_55px_rgba(45,77,54,0.12)]">
            <div className="relative aspect-[16/10] w-full max-h-[420px] sm:max-h-[480px]">
              <Image
                src="/assets/NutmegImg.jpg"
                alt="Placeholder — replace with farmer in cocoa grove (slide 9) from brand deck"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 720px"
              />
            </div>
            <figcaption className="border-t border-[var(--excelia-stone)]/35 bg-[var(--excelia-cream)] px-4 py-3 font-[family-name:var(--font-barlow)] text-[11px] leading-snug text-[var(--excelia-olive)]">
              Stand-in imagery — swap for authentic Grenadian documentary
              photography from the deck.
            </figcaption>
          </figure>
        </section>

        <section
          className="mt-20 scroll-mt-24 rounded-2xl border border-[var(--excelia-stone)]/40 bg-white/60 p-6 shadow-[0_18px_45px_rgba(45,77,54,0.06)] sm:p-10"
          aria-labelledby="pod-heading"
        >
          <h2
            id="pod-heading"
            className="font-[family-name:var(--font-instrument-serif)] text-2xl italic text-[var(--excelia-forest)] sm:text-3xl"
          >
            From pod to garden
          </h2>
          <p className="mt-4 font-[family-name:var(--font-barlow)] text-[15px] leading-relaxed text-[var(--excelia-forest)] sm:text-base">
            Nutmeg isn&apos;t only the kernel. The shell wraps what becomes spice,
            oils, and sauces — and the shell itself can leave the island as a
            soil-amending mulch instead of landfill. One crop, many uses: the
            diagram from our GCNA deck slide makes that closed loop visible;
            drop the cleaned asset here when exported.
          </p>
          <div
            className="relative mt-8 flex min-h-[200px] items-center justify-center rounded-xl border border-dashed border-[var(--excelia-stone)]/55 bg-[var(--excelia-cream)]/80 px-4 py-16 text-center font-[family-name:var(--font-barlow)] text-sm text-[var(--excelia-olive)]"
            role="img"
            aria-label="Placeholder for value-addition diagram"
          >
            GCNA value-addition diagram (slide 8) — shell to garden, kernel to
            spice
          </div>
        </section>

        <div className="mt-16 flex flex-wrap gap-4 border-t border-[var(--excelia-stone)]/35 pt-10">
          <Link
            href="/about"
            className="inline-flex rounded-full border border-[var(--excelia-forest)]/40 px-6 py-3 font-[family-name:var(--font-barlow)] text-sm font-semibold text-[var(--excelia-forest)] transition-colors hover:bg-[var(--excelia-forest)]/08"
          >
            The story of Sister
          </Link>
          <Link
            href="/shop"
            className="inline-flex rounded-full bg-[var(--excelia-rust)] px-6 py-3 font-[family-name:var(--font-barlow)] text-sm font-semibold text-white shadow-sm transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-md"
          >
            Shop nutmeg shells
          </Link>
        </div>
      </article>
    </PageShell>
  );
}
