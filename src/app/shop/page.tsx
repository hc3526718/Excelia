import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageGreenBand } from "@/components/layout/PageGreenBand";
import { PageSection } from "@/components/layout/PageSection";
import { PageShell } from "@/components/layout/PageShell";
import { CoverageCalculator } from "@/components/shop/CoverageCalculator";

export const metadata: Metadata = {
  title: "Shop: natural nutmeg shell mulch",
  description:
    "Excelia natural nutmeg shells in 5kg and 10kg hessian sacks from Grenada, sun dried for the garden.",
};

const PRODUCTS = [
  {
    sku: "EXL-SHELL-5",
    title: "Natural nutmeg shells",
    weight: "5 kg",
    sack: "Hessian sack",
    coverage: "~5 m²",
    longevity:
      "Seasons of use depending on depth and rain; shells keep breaking down gently.",
    bullets: ["Borders", "Paths", "Pot dressing"],
    pills: ["Compostable", "Aromatic", "Weed suppressing"],
  },
  {
    sku: "EXL-SHELL-10",
    title: "Natural nutmeg shells",
    weight: "10 kg",
    sack: "Hessian sack",
    coverage: "~11 m²",
    longevity:
      "Seasons of use depending on depth and rain; shells keep breaking down gently.",
    bullets: ["Borders", "Paths", "Pot dressing"],
    pills: ["Compostable", "Aromatic", "Weed suppressing"],
  },
];

function ProductBlock({
  product,
}: {
  product: (typeof PRODUCTS)[number];
}) {
  return (
    <article className="overflow-hidden rounded-3xl border border-[var(--excelia-stone)]/45 bg-white/75 shadow-[0_28px_70px_rgba(45,77,54,0.1)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(45,77,54,0.14)]">
      <div className="grid gap-0 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
        <div className="relative aspect-[5/4] min-h-[280px] bg-[var(--excelia-cream)] lg:aspect-auto lg:min-h-[420px]">
          <Image
            src="/assets/NutmegImg.jpg"
            alt="Hessian sack product photograph: replace with slide seven hero when ready"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={product.sku.endsWith("5")}
          />
          <span className="absolute bottom-4 left-4 rounded-full bg-[var(--excelia-forest)]/92 px-4 py-2 font-[family-name:var(--font-barlow)] text-[11px] font-semibold uppercase tracking-[0.14em] text-white shadow-md">
            From Crochu, Grenada
          </span>
        </div>

        <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:py-14">
          <p className="font-[family-name:var(--font-barlow)] text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--excelia-tan)]">
            {product.sku}
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-instrument-serif)] text-3xl italic leading-tight text-[var(--excelia-forest)] sm:text-4xl">
            {product.title}
          </h2>
          <p className="mt-4 font-[family-name:var(--font-barlow)] text-[15px] text-[var(--excelia-olive)]">
            {product.weight} · {product.sack}
          </p>

          <dl className="mt-8 grid gap-4 font-[family-name:var(--font-barlow)] text-[15px] text-[var(--excelia-forest)] sm:grid-cols-2">
            <div className="rounded-xl bg-[var(--excelia-cream)]/90 px-4 py-3">
              <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--excelia-tan)]">
                Coverage guide
              </dt>
              <dd className="mt-1 font-semibold">{product.coverage}</dd>
            </div>
            <div className="rounded-xl bg-[var(--excelia-cream)]/90 px-4 py-3 sm:col-span-2 lg:col-span-1">
              <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--excelia-tan)]">
                Longevity
              </dt>
              <dd className="mt-1 leading-snug">{product.longevity}</dd>
            </div>
          </dl>

          <div className="mt-8">
            <p className="font-[family-name:var(--font-barlow)] text-xs font-semibold uppercase tracking-[0.2em] text-[var(--excelia-tan)]">
              Ideal for
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {product.bullets.map((b) => (
                <li
                  key={b}
                  className="rounded-full border border-[var(--excelia-stone)]/55 bg-white px-4 py-2 font-[family-name:var(--font-barlow)] text-sm font-medium text-[var(--excelia-forest)]"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {product.pills.map((p) => (
              <span
                key={p}
                className="rounded-full bg-[var(--excelia-forest)]/09 px-3 py-1.5 font-[family-name:var(--font-barlow)] text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--excelia-forest)]"
              >
                {p}
              </span>
            ))}
          </div>

          <div className="mt-10 border-t border-[var(--excelia-stone)]/35 pt-8">
            <p className="font-[family-name:var(--font-barlow)] text-xs font-semibold uppercase tracking-[0.2em] text-[var(--excelia-tan)]">
              Customer reviews
            </p>
            <p className="mt-3 font-[family-name:var(--font-barlow)] text-sm italic text-[var(--excelia-olive)]">
              Reviews show here once gardeners send first notes from their beds.
            </p>
          </div>

          <Link
            href="/contact"
            className="mt-8 inline-flex w-fit items-center justify-center rounded-full bg-[var(--excelia-rust)] px-8 py-3.5 font-[family-name:var(--font-barlow)] text-[15px] font-semibold text-white shadow-sm transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-md"
          >
            Enquire to order
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function ShopPage() {
  return (
    <PageShell>
      <PageGreenBand bleedTop>
        <p className="font-[family-name:var(--font-barlow)] text-xs font-semibold uppercase tracking-[0.28em] text-[var(--excelia-gold)]">
          Shop
        </p>
        <h1 className="mt-3 max-w-2xl font-[family-name:var(--font-instrument-serif)] text-4xl italic leading-tight sm:text-5xl">
          Natural nutmeg shells
        </h1>
        <p className="mt-6 max-w-2xl font-[family-name:var(--font-barlow)] text-[15px] leading-relaxed text-white/88 sm:text-base">
          Two weights, one shell from Grenadian harvests. Imagery below is a
          stand in until the hessian sack shot from slide seven exports.
        </p>
      </PageGreenBand>

      <PageSection className="mt-8 lg:mt-10">
        <div className="space-y-16 lg:space-y-20">
          {PRODUCTS.map((p) => (
            <ProductBlock key={p.sku} product={p} />
          ))}
        </div>
      </PageSection>

      <PageSection className="pb-24 pt-12 lg:mt-4 lg:pt-16">
        <CoverageCalculator />
      </PageSection>
    </PageShell>
  );
}
