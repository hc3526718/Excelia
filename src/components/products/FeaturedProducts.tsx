import Link from "next/link";

const PRODUCTS = [
  {
    name: "Garden Signature",
    detail:
      "Balanced topper for raised beds and borders—invites beneficial soil life while lending a nutmeg‑flecked surface you will notice between rows.",
  },
  {
    name: "Planter Elite",
    detail:
      "Finer grading for containers and indoor specimens; improves moisture rhythm around roots without sacrificing the earthy, artisanal look.",
  },
  {
    name: "Landscape Weave",
    detail:
      "Hardier blend for slopes and restoration beds—anchors soil structure, slows runoff, and carries our whole‑plant sustainability story outdoors.",
  },
];

export function FeaturedProducts() {
  return (
    <section
      id="products"
      className="scroll-mt-24 border-t border-[var(--excelia-stone)]/40 bg-[var(--excelia-cream)] px-4 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[minmax(0,340px)_1fr] lg:items-start lg:gap-16">
        <div className="max-w-lg space-y-6">
          <p className="font-[family-name:var(--font-barlow)] text-xs font-semibold uppercase tracking-[0.25em] text-[var(--excelia-tan)]">
            Featured products
          </p>
          <h2 className="font-[family-name:var(--font-instrument-serif)] text-3xl italic leading-tight text-[var(--excelia-forest)] sm:text-[2.25rem]">
            Three finishes, one circular idea
          </h2>
          <p className="font-[family-name:var(--font-barlow)] text-base leading-relaxed text-[var(--excelia-olive)]">
            Each blend routes nutmeg co‑product into purposeful ground cover—cutting
            waste, feeding soil ecology, and elevating the visual texture of your
            plantings. Choose the grade that matches your scale; the ethos stays the
            same: respect the fruit, respect the land.
          </p>
          <Link
            id="shop"
            href="#contact"
            className="inline-flex w-fit items-center justify-center rounded-full bg-[var(--excelia-rust)] px-8 py-3.5 font-[family-name:var(--font-barlow)] text-[15px] font-semibold text-white shadow-sm transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-md sm:text-base"
          >
            Request allocation
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-3 lg:gap-5">
          {PRODUCTS.map((product) => (
            <article
              key={product.name}
              className="flex flex-col rounded-2xl border border-[var(--excelia-stone)]/50 bg-white/70 p-6 shadow-[0_18px_50px_rgba(45,77,54,0.08)] backdrop-blur-sm transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(45,77,54,0.12)]"
            >
              <h3 className="font-[family-name:var(--font-barlow)] text-lg font-semibold text-[var(--excelia-forest)]">
                {product.name}
              </h3>
              <p className="mt-4 flex-1 font-[family-name:var(--font-barlow)] text-sm leading-relaxed text-[var(--excelia-olive)]">
                {product.detail}
              </p>
              <div className="mt-6 h-1 w-12 rounded-full bg-[var(--excelia-gold)]/90" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
