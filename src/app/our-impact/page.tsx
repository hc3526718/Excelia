import type { Metadata } from "next";
import Image from "next/image";
import { HeritageRule } from "@/components/about/HeritageRule";
import { PAGE_CONTAINER_CLASS } from "@/components/footer/ExceliaFooter";
import { PageGreenBand } from "@/components/layout/PageGreenBand";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Why Excelia: our impact",
  description:
    "Nutmeg shells from Grenada, sun dried, compostable in your beds, with Crochu and growers at the centre.",
};

const PILLAR_ICONS = [
  {
    kicker: "GRENADA-GROWN",
    src: "/assets/Basket.png",
    alt: "Harvest basket",
    body:
      "Shells come from nutmeg estates in Grenada, second in world production, where harvest leaves piles of shell that once read as waste beside the spice.",
  },
  {
    kicker: "SUN-CURED",
    src: "/assets/Sun.png",
    alt: "Sun",
    body:
      "Shells dry under Caribbean sun so their oils stay in the tissue and the pieces hold together for paths and borders.",
  },
  {
    kicker: "FULLY COMPOSTABLE",
    src: "/assets/Hand.png",
    alt: "Soil and hand",
    body:
      "Excelia shells soften into soil across seasons. They return organic matter without leaving plastic grit or quarry stone behind.",
  },
];

export default function OurImpactPage() {
  return (
    <PageShell>
      <PageGreenBand className="pt-6 sm:pt-8">
        <p className="font-[family-name:var(--font-barlow)] text-xs font-semibold uppercase tracking-[0.28em] text-[var(--excelia-gold)]">
          Why Excelia
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-instrument-serif)] text-4xl italic leading-tight sm:text-5xl">
          Soil, shells, and sense
        </h1>
        <p className="mt-5 max-w-2xl font-[family-name:var(--font-barlow)] text-[15px] leading-relaxed text-white/88 sm:text-base">
          Heritage here means provenance and people. This page lays out what
          ordinary mulches cost the ground, how we work differently, and how we
          stay accountable to Crochu.
        </p>
      </PageGreenBand>

      <div className={`${PAGE_CONTAINER_CLASS} pb-28 pt-12 lg:pt-16`}>
        <section aria-labelledby="problem-heading">
          <h2
            id="problem-heading"
            className="font-[family-name:var(--font-instrument-serif)] text-3xl italic text-[var(--excelia-forest)] sm:text-[2.25rem]"
          >
            Conventional mulches and their limits
          </h2>
          <div className="mt-8 space-y-5 font-[family-name:var(--font-barlow)] text-[15px] leading-relaxed text-[var(--excelia-forest)] sm:text-base">
            <p>
              <strong>Gravel</strong> rides out of quarries on diesel, ships
              long distances, and sits on beds without feeding soil life.
            </p>
            <p>
              <strong>Bark mulch</strong> often ties back to industrial timber
              flows where chain of custody is murky.
            </p>
            <p>
              <strong>Synthetic toppings</strong> shed microplastics and can
              tighten soil over years.
            </p>
            <p>
              People who garden for wildlife still need mulch that belongs in a
              home plot, not a motorway verge.
            </p>
          </div>
        </section>

        <HeritageRule label="Botanical heritage" />

        <section aria-labelledby="answer-heading">
          <h2
            id="answer-heading"
            className="font-[family-name:var(--font-instrument-serif)] text-3xl italic text-[var(--excelia-forest)] sm:text-[2.25rem]"
          >
            How Excelia answers that brief
          </h2>
          <p className="mt-6 font-[family-name:var(--font-barlow)] text-[15px] leading-relaxed text-[var(--excelia-olive)] sm:text-base">
            Same three marks you see on the home page, written for how the
            shells are actually handled.
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

        <section
          aria-labelledby="community-heading"
          className="mt-14 border-t border-[var(--excelia-stone)]/35 pt-14 sm:mt-16 sm:pt-16"
        >
          <h2
            id="community-heading"
            className="font-[family-name:var(--font-instrument-serif)] text-3xl italic text-[var(--excelia-forest)] sm:text-[2.25rem]"
          >
            Community and heritage
          </h2>
          <div className="mt-8 space-y-5 font-[family-name:var(--font-barlow)] text-[15px] leading-relaxed text-[var(--excelia-forest)] sm:text-base">
            <p>
              In <strong>Crochu, St. Andrew&apos;s</strong>, farming is concrete
              work on steep plots. Excelia honours that by sourcing with care,
              partnering where programmes line up, and pushing value toward
              growers rather than only tonnage alone.
            </p>
            <p>
              We align with networks such as the{" "}
              <strong>Grenada Co-operative Nutmeg Association (GCNA)</strong>{" "}
              when programmes match, supporting livelihoods and real value from
              the crop our name rests on.
            </p>
          </div>
        </section>

        <figure className="relative mt-10 overflow-hidden rounded-2xl border border-[var(--excelia-stone)]/45 bg-[var(--excelia-forest)]/08 shadow-[0_22px_55px_rgba(45,77,54,0.12)]">
          <div className="relative aspect-[16/10] w-full max-h-[420px] sm:max-h-[480px]">
            <Image
              src="/assets/NutmegImg.jpg"
              alt="Placeholder: replace with farmer in cocoa grove from slide 9"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>
          <figcaption className="border-t border-[var(--excelia-stone)]/35 bg-[var(--excelia-cream)] px-4 py-3 font-[family-name:var(--font-barlow)] text-[11px] leading-snug text-[var(--excelia-olive)]">
            Temporary image. Swap for documentary photography from Grenada when
            assets land.
          </figcaption>
        </figure>

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
            Nutmeg is more than the kernel inside. The shell wraps what becomes
            spice, oils, and sauce. That same shell can leave the island as
            mulch instead of landfill. One harvest feeds several markets. When the
            cleaned GCNA diagram from slide eight is ready, drop it into the box
            below so the closed loop reads at a glance.
          </p>
          <div
            className="relative mt-8 flex min-h-[200px] items-center justify-center rounded-xl border border-dashed border-[var(--excelia-stone)]/55 bg-[var(--excelia-cream)]/80 px-4 py-16 text-center font-[family-name:var(--font-barlow)] text-sm text-[var(--excelia-olive)]"
            role="img"
            aria-label="Placeholder for GCNA value diagram"
          >
            GCNA value diagram from slide eight: shell to garden, kernel to spice
          </div>
        </section>
      </div>
    </PageShell>
  );
}
