"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useCallback, useState } from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { FeaturedProducts } from "@/components/products/FeaturedProducts";
import { MissionSection } from "@/components/mission/MissionSection";
import { StorySection } from "@/components/story/StorySection";

const STICKER_TILTS_DEG = [14, 31, 22] as const;

const STICKERS = [
  {
    src: "/assets/Island_Sticker.png",
    alt: "Island sticker",
    offsetClass: "left-0 top-3 z-[3]",
    tiltIndex: 0 as const,
  },
  {
    src: "/assets/Flag_Sticker.png",
    alt: "Flag sticker",
    offsetClass: "left-[4.5rem] top-1 z-[2] sm:left-[5.25rem]",
    tiltIndex: 1 as const,
  },
  {
    src: "/assets/Logo_Sticker.png",
    alt: "Logo sticker",
    offsetClass: "left-[8.75rem] top-5 z-[1] sm:left-[10rem] sm:top-6",
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

          <nav
            className="mt-8 border-t border-white/15 pt-6 font-[family-name:var(--font-barlow)] text-sm text-white/90"
            aria-label="Footer"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--excelia-gold)]">
              Explore
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
              <li>
                <Link
                  className="transition-opacity hover:opacity-75"
                  href="#about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="transition-opacity hover:opacity-75"
                  href="#mission"
                >
                  Mission
                </Link>
              </li>
              <li>
                <Link
                  className="transition-opacity hover:opacity-75"
                  href="#contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className="transition-opacity hover:opacity-75"
                  href="#shop"
                >
                  Shop Now
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="relative mx-auto h-[150px] w-full max-w-[300px] shrink-0 sm:h-[170px] sm:max-w-[340px] lg:mx-0 lg:h-[180px] lg:w-[300px]">
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
                width={240}
                height={240}
                className="h-auto w-[min(58vw,168px)] drop-shadow-[0_12px_22px_rgba(0,0,0,0.32)] sm:w-[min(58vw,188px)]"
                sizes="(max-width: 640px) 58vw, 188px"
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
