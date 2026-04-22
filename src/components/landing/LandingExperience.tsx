"use client";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { FeaturedProducts } from "@/components/products/FeaturedProducts";
import { MissionSection } from "@/components/mission/MissionSection";

type IntroPhase = "splash" | "transition" | "ready";

function ContactFooter() {
  return (
    <footer
      id="contact"
      className="scroll-mt-24 border-t border-[var(--excelia-stone)]/40 bg-[var(--excelia-forest)] px-4 py-16 text-[var(--excelia-cream)] sm:px-8"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-[family-name:var(--font-barlow)] text-xs font-semibold uppercase tracking-[0.25em] text-[var(--excelia-gold)]">
            Contact
          </p>
          <p className="mt-3 max-w-md font-[family-name:var(--font-barlow)] text-sm leading-relaxed text-white/85">
            Partner with Excelia for nutmeg‑smart soil programs, allocation updates,
            and sustainability reporting—we reply to growers, retailers, and brand
            teams routing spice waste back to the ground.
          </p>
        </div>
        <a
          href="mailto:hello@excelia.example"
          className="inline-flex w-fit shrink-0 rounded-full border border-white/25 bg-white/10 px-6 py-3 font-[family-name:var(--font-barlow)] text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
        >
          hello@excelia.example
        </a>
      </div>
    </footer>
  );
}

export function LandingExperience() {
  const [phase, setPhase] = useState<IntroPhase>("splash");

  useEffect(() => {
    const t1 = window.setTimeout(() => setPhase("transition"), 2200);
    const t2 = window.setTimeout(() => setPhase("ready"), 2780);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  const introDone = phase === "ready";

  return (
    <LayoutGroup>
      <AnimatePresence mode="sync">
        {phase !== "ready" && (
          <div
            key="splash-shell"
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--excelia-cream)] px-6"
          >
            <div className="flex flex-col items-center gap-6 sm:gap-8">
              <motion.div layoutId="excelia-brand-logo" className="relative">
                <Image
                  src="/assets/Excelia_Logo.png"
                  alt=""
                  width={220}
                  height={72}
                  className="pointer-events-none h-24 w-auto select-none sm:h-28"
                  priority
                  aria-hidden
                />
              </motion.div>

              <AnimatePresence mode="wait">
                {phase === "splash" && (
                  <motion.div
                    key="titles"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center gap-4 text-center"
                  >
                    <Image
                      src="/assets/Excelia_Name.png"
                      alt="Excelia"
                      width={280}
                      height={56}
                      className="h-12 w-auto sm:h-14"
                      priority
                    />
                    <p className="max-w-md font-[family-name:var(--font-instrument-serif)] text-xl italic leading-snug text-[var(--excelia-forest)] sm:text-2xl">
                      We grow Carribbean Roots
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}
      </AnimatePresence>

      <motion.div
        initial={false}
        animate={{ opacity: introDone ? 1 : 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className={introDone ? "" : "pointer-events-none select-none"}
        inert={introDone ? undefined : true}
      >
        <HeroSection introDone={introDone} />
        <MissionSection />
        <FeaturedProducts />
        <ContactFooter />
      </motion.div>
    </LayoutGroup>
  );
}
