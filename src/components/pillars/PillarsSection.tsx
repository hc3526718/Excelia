import Image from "next/image";

const PILLARS = [
  {
    kicker: "GRENADA-GROWN",
    icon: "/assets/Basket.png",
    alt: "Basket icon",
    body:
      "Sourced from nutmeg estates in Grenada — the world’s second-largest nutmeg producer — where shells would otherwise be discarded after spice harvesting.",
  },
  {
    kicker: "SUN-CURED",
    icon: "/assets/Sun.png",
    alt: "Sun icon",
    body:
      "Naturally dried under the Caribbean sun, preserving the shell’s aromatic oils and structural integrity.",
  },
  {
    kicker: "FULLY COMPOSTABLE",
    icon: "/assets/Hand.png",
    alt: "Hand icon",
    body:
      "Unlike gravel or plastic alternatives, shells break down gradually into the soil, returning nutrients and leaving nothing behind.",
  },
];

export function PillarsSection() {
  return (
    <section
      id="pillars"
      className="relative isolate z-0 scroll-mt-24 border-t border-[var(--excelia-stone)]/35 bg-[var(--excelia-cream)] px-4 py-16 sm:px-8 lg:px-12"
    >
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-3 md:gap-12 lg:gap-16">
        {PILLARS.map((item) => (
          <article
            key={item.kicker}
            className="flex flex-col items-center text-center"
          >
            <Image
              src={item.icon}
              alt={item.alt}
              width={88}
              height={88}
              className="h-[4.5rem] w-[4.5rem] object-contain sm:h-20 sm:w-20"
            />
            <h2 className="mt-5 font-[family-name:var(--font-barlow)] text-xs font-semibold uppercase tracking-[0.28em] text-[var(--excelia-forest)]">
              {item.kicker}
            </h2>
            <p className="mt-4 max-w-sm font-[family-name:var(--font-barlow)] text-[15px] leading-relaxed text-[var(--excelia-olive)] sm:text-base">
              {item.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
