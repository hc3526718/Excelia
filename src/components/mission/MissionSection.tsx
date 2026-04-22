"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useMemo, useRef } from "react";

const MISSION =
  "Our mission is to shrink nutmeg waste streams by reclaiming every viable part of the crop—processing co‑product into Excelia topper instead of letting valuable organic matter leave the value chain. We believe sustainability means using each plant fully: what nourishes kitchens can nourish soil life too. Nutmeg‑based topper returns slow‑release carbon and minerals to the rhizosphere, supports microbial balance, improves moisture retention and aeration, and dresses beds with a warm, speckled finish that looks as intentional as it is ecological—proof that responsible sourcing and premium aesthetics can share the same ground.";

function MissionWord({
  children,
  progress,
  index,
  total,
}: {
  children: string;
  progress: MotionValue<number>;
  index: number;
  total: number;
}) {
  const start = index / Math.max(1, total);
  const end = Math.min(1, (index + 1.25) / Math.max(1, total));
  const opacity = useTransform(progress, [start, end], [0.12, 1]);
  const y = useTransform(progress, [start, end], [10, 0]);

  return (
    <motion.span
      style={{ opacity, y }}
      className="inline-block font-[family-name:var(--font-barlow)] text-lg leading-relaxed text-[var(--excelia-forest)] sm:text-xl"
    >
      {children}
    </motion.span>
  );
}

export function MissionSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.25"],
  });

  const words = useMemo(() => MISSION.split(/\s+/).filter(Boolean), []);

  return (
    <section
      ref={ref}
      id="mission"
      className="scroll-mt-28 bg-[var(--excelia-cream)] px-4 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-3 lg:items-stretch lg:gap-0 lg:overflow-hidden lg:rounded-2xl lg:border lg:border-[var(--excelia-stone)]/40 lg:shadow-[0_24px_60px_rgba(45,77,54,0.06)]">
        <div className="relative min-h-[280px] overflow-hidden rounded-2xl lg:col-span-1 lg:min-h-full lg:rounded-none lg:border-0">
          <Image
            src="/assets/NutmegImg.jpg"
            alt="Whole nutmeg and growing plants"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 33vw, 100vw"
            priority={false}
          />
        </div>

        <div className="flex flex-col justify-center px-0 py-2 lg:col-span-2 lg:px-12 lg:py-16 xl:px-16">
          <p className="font-[family-name:var(--font-barlow)] text-xs font-semibold uppercase tracking-[0.25em] text-[var(--excelia-tan)]">
            Our Mission
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-instrument-serif)] text-3xl italic text-[var(--excelia-forest)] sm:text-4xl">
            Whole‑plant thinking, field‑ready impact
          </h2>
          <div className="mt-10 flex flex-wrap gap-x-2 gap-y-2">
            {words.map((word, i) => (
              <MissionWord
                key={`${word}-${i}`}
                progress={scrollYProgress}
                index={i}
                total={words.length}
              >
                {word}
              </MissionWord>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
