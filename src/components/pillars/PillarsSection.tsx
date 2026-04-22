import Image from "next/image";

const PILLARS = [
  {
    kicker: "GRENADA-GROWN",
    icon: "/assets/Basket.png",
    alt: "Basket icon",
    body:
      "Sourced from Grenadian estates where volcanic soil produces mineral-dense nutmeg shells.",
  },
  {
    kicker: "SUN-CURED",
    icon: "/assets/Sun.png",
    alt: "Sun icon",
    body:
      "Air-dried under Caribbean sun to preserve the shell's natural porosity and nutrient content.",
  },
  {
    kicker: "FEEDS YOUR SOIL",
    icon: "/assets/Hand.png",
    alt: "Hand icon",
    body:
      "Releases potassium, calcium, and magnesium slowly, supporting root health and soil structure for months.",
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
