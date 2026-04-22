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
      className="scroll-mt-24 border-t border-white/10 bg-[var(--excelia-forest)] px-4 py-16 sm:px-8 lg:px-12"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3 md:gap-10 lg:gap-14">
        {PILLARS.map((item) => (
          <article key={item.kicker} className="flex gap-5">
            <Image
              src={item.icon}
              alt={item.alt}
              width={80}
              height={80}
              className="mt-1 h-16 w-16 shrink-0 object-contain sm:h-[4.5rem] sm:w-[4.5rem]"
            />
            <div className="min-w-0">
              <h2 className="font-[family-name:var(--font-barlow)] text-xs font-semibold uppercase tracking-[0.28em] text-[var(--excelia-gold)]">
                {item.kicker}
              </h2>
              <p className="mt-4 font-[family-name:var(--font-barlow)] text-[15px] leading-relaxed text-[#f2efe8]/94 sm:text-base">
                <span className="mr-2 font-medium text-[#faf8f3]">→</span>
                {item.body}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
