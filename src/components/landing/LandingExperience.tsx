"use client";

import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import { ExceliaFullFooter } from "@/components/footer/ExceliaFooter";
import { SiteHeader } from "@/components/hero/SiteHeader";
import { HeroSection } from "@/components/hero/HeroSection";
import { FeaturedProducts } from "@/components/products/FeaturedProducts";
import { MissionSection } from "@/components/mission/MissionSection";
import { PillarsSection } from "@/components/pillars/PillarsSection";
import { StorySection } from "@/components/story/StorySection";

export function LandingExperience() {
  const [pageReady, setPageReady] = useState(false);
  const [navReveal, setNavReveal] = useState(false);

  const handleIntroFullyComplete = useCallback(() => {
    setPageReady(true);
  }, []);

  const handleNavReveal = useCallback(() => {
    setNavReveal(true);
  }, []);

  return (
    <>
      <HeroSection
        navReveal={navReveal}
        onNavReveal={handleNavReveal}
        onIntroFullyComplete={handleIntroFullyComplete}
      />

      {pageReady && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative isolate z-0"
        >
          <StorySection />
          <PillarsSection />
          <MissionSection />
          <FeaturedProducts />
          <ExceliaFullFooter />
        </motion.div>
      )}

      <SiteHeader visible={navReveal} />
    </>
  );
}
