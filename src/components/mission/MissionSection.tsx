"use client";

import Image from "next/image";

const MISSION_SHORT =
  "We reclaim nutmeg co‑product for Excelia topper—keeping organic matter in the loop, strengthening soil life, and finishing beds with a warm, intentional look.";

export function MissionSection() {
  return (
    <section
      id="mission"
      className="relative isolate z-0 scroll-mt-28 bg-[var(--excelia-forest)] px-4 py-16 sm:px-8 sm:py-20 lg:px-12"
    >
      <div className="mx-auto grid max-w-6xl gap-10 overflow-hidden rounded-2xl border border-[var(--excelia-stone)]/35 bg-[var(--excelia-cream)] shadow-[0_22px_55px_rgba(45,77,54,0.07)] lg:grid-cols-3 lg:items-stretch lg:gap-0">
        <div className="relative min-h-[280px] overflow-hidden rounded-t-2xl lg:col-span-1 lg:min-h-full lg:rounded-l-2xl lg:rounded-tr-none">
          <Image
            src="/assets/NutmegImg.jpg"
            alt="Whole nutmeg and growing plants"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 33vw, 100vw"
            priority={false}
          />
        </div>

        <div className="flex flex-col justify-center rounded-b-2xl px-6 py-10 lg:col-span-2 lg:rounded-none lg:rounded-tr-2xl lg:px-12 lg:py-16 xl:px-16">
          <p className="font-[family-name:var(--font-barlow)] text-xs font-semibold uppercase tracking-[0.25em] text-[var(--excelia-tan)]">
            Our Mission
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-instrument-serif)] text-3xl italic text-[var(--excelia-forest)] sm:text-4xl">
            Whole‑plant thinking, field‑ready impact
          </h2>
          <p className="mt-8 font-[family-name:var(--font-barlow)] text-lg leading-relaxed text-[var(--excelia-forest)] sm:text-xl">
            {MISSION_SHORT}
          </p>
        </div>
      </div>
    </section>
  );
}
