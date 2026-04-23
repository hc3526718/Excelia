import Image from "next/image";
import { PAGE_CONTAINER_CLASS } from "@/lib/pageLayout";

const PILLARS = [
  {
    kicker: "GRENADA-GROWN",
    icon: "/assets/Basket.png",
    alt: "Basket icon",
    body:
      "Shells come from nutmeg estates in Grenada, a leading producer, where harvest once treated this material as side stream next to the spice itself.",
  },
  {
    kicker: "SUN-CURED",
    icon: "/assets/Sun.png",
    alt: "Sun icon",
    body:
      "Caribbean sun and air dry the shells so their oils stay in the tissue and the pieces hold up on paths and in borders.",
  },
  {
    kicker: "FULLY COMPOSTABLE",
    icon: "/assets/Hand.png",
    alt: "Hand icon",
    body:
      "Over seasons the shells soften into soil, return organic matter, and do not leave plastic grit or stone that never weathers down.",
  },
];

export function PillarsSection() {
  return (
    <section
      id="pillars"
      className="relative isolate z-0 scroll-mt-24 border-t border-[var(--excelia-stone)]/35 bg-[var(--excelia-cream)] py-16"
    >
      <div
        className={`${PAGE_CONTAINER_CLASS} grid gap-14 md:grid-cols-3 md:gap-12 lg:gap-16`}
      >
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
