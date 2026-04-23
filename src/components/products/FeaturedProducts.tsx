import Link from "next/link";

const PRODUCTS = [
  {
    name: "5kg hessian sack",
    detail:
      "Natural nutmeg shells for borders, paths, and pot dressing — compact volume for smaller beds or first tries.",
    weight: "5 kg",
  },
  {
    name: "10kg hessian sack",
    detail:
      "The same shells, scaled for generous coverage — ideal when you already know how Excelia behaves in your soil.",
    weight: "10 kg",
  },
];

export function FeaturedProducts() {
  return (
    <section
      id="featured-products"
      className="relative isolate z-0 scroll-mt-24 border-t border-[var(--excelia-stone)]/40 bg-[var(--excelia-cream)] px-4 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[minmax(0,340px)_1fr] lg:items-start lg:gap-16">
        <div className="max-w-lg space-y-6">
          <p className="font-[family-name:var(--font-barlow)] text-xs font-semibold uppercase tracking-[0.25em] text-[var(--excelia-tan)]">
            Natural nutmeg shells
          </p>
          <h2 className="font-[family-name:var(--font-instrument-serif)] text-3xl italic leading-tight text-[var(--excelia-forest)] sm:text-[2.25rem]">
            Two sacks, one honest line
          </h2>
          <p className="font-[family-name:var(--font-barlow)] text-base leading-relaxed text-[var(--excelia-olive)]">
            We ship heritage co-product as mulch — not an endless catalogue of
            variants. Pick the bag that fits your ground; the story and the
            shell stay the same.
          </p>
          <Link
            href="/shop"
            className="inline-flex w-fit items-center justify-center rounded-full bg-[var(--excelia-rust)] px-8 py-3.5 font-[family-name:var(--font-barlow)] text-[15px] font-semibold text-white shadow-sm transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-md sm:text-base"
          >
            View bags &amp; coverage
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:gap-10">
          {PRODUCTS.map((product) => (
            <article
              key={product.name}
              className="flex flex-col rounded-2xl border border-[var(--excelia-stone)]/50 bg-white/70 p-8 shadow-[0_18px_50px_rgba(45,77,54,0.08)] backdrop-blur-sm transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(45,77,54,0.12)]"
            >
              <p className="font-[family-name:var(--font-barlow)] text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--excelia-tan)]">
                {product.weight}
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-barlow)] text-xl font-semibold text-[var(--excelia-forest)]">
                {product.name}
              </h3>
              <p className="mt-4 flex-1 font-[family-name:var(--font-barlow)] text-sm leading-relaxed text-[var(--excelia-olive)]">
                {product.detail}
              </p>
              <div className="mt-8 h-1 w-12 rounded-full bg-[var(--excelia-gold)]/90" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
