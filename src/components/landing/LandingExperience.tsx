"use client";

import { LayoutGroup, motion } from "framer-motion";
import { useCallback, useState } from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { FeaturedProducts } from "@/components/products/FeaturedProducts";
import { MissionSection } from "@/components/mission/MissionSection";
import { StorySection } from "@/components/story/StorySection";

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
  const [pageReady, setPageReady] = useState(false);

  const handleIntroFullyComplete = useCallback(() => {
    setPageReady(true);
  }, []);

  return (
    <LayoutGroup>
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
    </LayoutGroup>
  );
}
