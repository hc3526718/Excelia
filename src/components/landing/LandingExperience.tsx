"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { FeaturedProducts } from "@/components/products/FeaturedProducts";
import { MissionSection } from "@/components/mission/MissionSection";
import { StorySection } from "@/components/story/StorySection";

/** Stable clockwise tilts (0–45°) so SSR/client match */
const STICKER_TILTS_DEG = [14, 31, 22] as const;

const STICKERS = [
  {
    src: "/assets/Island_Sticker.png",
    alt: "Island sticker",
    offsetClass: "left-0 top-2 z-[3]",
    tiltIndex: 0 as const,
  },
  {
    src: "/assets/Flag_Sticker.png",
    alt: "Flag sticker",
    offsetClass: "left-14 top-0 z-[2] sm:left-20",
    tiltIndex: 1 as const,
  },
  {
    src: "/assets/Logo_Sticker.png",
    alt: "Logo sticker",
    offsetClass: "left-28 top-6 z-[1] sm:left-36 sm:top-8",
    tiltIndex: 2 as const,
  },
];

function ContactFooter() {
  return (
    <footer
      id="contact"
      className="scroll-mt-24 border-t border-[var(--excelia-stone)]/40 bg-[var(--excelia-forest)] px-4 py-16 text-[var(--excelia-cream)] sm:px-8"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
        <div className="max-w-lg">
          <p className="font-[family-name:var(--font-barlow)] text-xs font-semibold uppercase tracking-[0.25em] text-[var(--excelia-gold)]">
            Contact
          </p>
          <p className="mt-3 font-[family-name:var(--font-barlow)] text-sm leading-relaxed text-white/85">
            Partner with Excelia for nutmeg‑smart soil programs, allocation updates,
            and sustainability reporting—we reply to growers, retailers, and brand
            teams routing spice waste back to the ground.
          </p>
          <a
            href="mailto:hello@excelia.example"
            className="mt-6 inline-flex w-fit shrink-0 rounded-full border border-white/25 bg-white/10 px-6 py-3 font-[family-name:var(--font-barlow)] text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            hello@excelia.example
          </a>
        </div>

        <div className="relative mx-auto h-[220px] w-full max-w-[420px] shrink-0 sm:h-[260px] sm:max-w-[480px] lg:mx-0 lg:h-[280px] lg:w-[380px]">
          {STICKERS.map((s) => (
            <div
              key={s.src}
              className={`pointer-events-none absolute ${s.offsetClass}`}
              style={{
                transform: `rotate(${STICKER_TILTS_DEG[s.tiltIndex]}deg)`,
              }}
            >
              <Image
                src={s.src}
                alt={s.alt}
                width={340}
                height={340}
                className="h-auto w-[min(72vw,280px)] drop-shadow-[0_18px_35px_rgba(0,0,0,0.35)] sm:w-[min(72vw,320px)]"
                sizes="(max-width: 640px) 72vw, 320px"
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function LandingExperience() {
  const [pageReady, setPageReady] = useState(false);

  const handleIntroFullyComplete = useCallback(() => {
    setPageReady(true);
  }, []);

  return (
    <>
      <HeroSection onIntroFullyComplete={handleIntroFullyComplete} />

      {pageReady && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <StorySection />
          <MissionSection />
          <FeaturedProducts />
          <ContactFooter />
        </motion.div>
      )}
    </>
  );
}
