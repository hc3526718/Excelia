"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useCallback, useState } from "react";
import { IntroSequence } from "@/components/landing/IntroSequence";
import { PingPongVideo } from "./PingPongVideo";

const VIDEO_MASK =
  "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 52%, rgba(255,255,255,0.94) 62%, rgba(255,255,255,0.78) 74%, rgba(255,255,255,0.48) 86%, rgba(255,255,255,0.2) 94%, rgba(255,255,255,0) 100%)";

type HeroSectionProps = {
  onIntroFullyComplete: () => void;
  onNavReveal: () => void;
  navReveal: boolean;
};

export function HeroSection({
  onIntroFullyComplete,
  onNavReveal,
  navReveal,
}: HeroSectionProps) {
  const [introOverlayOpen, setIntroOverlayOpen] = useState(true);

  const handleMorphComplete = useCallback(() => {
    onNavReveal();
  }, [onNavReveal]);

  const handleIntroComplete = useCallback(() => {
    setIntroOverlayOpen(false);
    onIntroFullyComplete();
  }, [onIntroFullyComplete]);

  const showBody = !introOverlayOpen;

  return (
      <section
        id="about"
        className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[var(--excelia-cream)]"
      >
        <div
          className="pointer-events-none absolute inset-0 z-0 min-h-[100svh]"
          style={{
            maskImage: VIDEO_MASK,
            WebkitMaskImage: VIDEO_MASK,
          }}
        >
          <PingPongVideo
            src="/assets/3AgNzzqv3gbwXg9WC8wI5_output.mp4"
            className="min-h-[100svh] h-full w-full object-cover"
          />
        </div>

        <AnimatePresence>
          {introOverlayOpen && (
            <IntroSequence
              key="intro"
              onMorphComplete={handleMorphComplete}
              onComplete={handleIntroComplete}
            />
          )}
        </AnimatePresence>

        <div
          className={`relative z-[1] flex flex-1 flex-col px-3 pb-8 pt-4 sm:px-6 sm:pb-12 sm:pt-5 lg:px-10 ${
            navReveal
              ? "pt-[3.85rem] sm:pt-[5rem] md:pt-[5.35rem] lg:pt-[5.75rem]"
              : ""
          }`}
        >
          <motion.div
            className="mx-auto flex flex-1 flex-col items-center justify-center px-2 pb-4 pt-6 text-center sm:px-4 sm:pb-6 sm:pt-10 md:pb-8 md:pt-14"
            initial={false}
            animate={{ opacity: showBody ? 1 : 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ pointerEvents: showBody ? "auto" : "none" }}
          >
            <h1 className="max-w-5xl space-y-0 leading-[1.06] sm:leading-[1.02]">
              <span className="block font-[family-name:var(--font-barlow)] text-[clamp(1.35rem,4.5vw,3.25rem)] font-semibold tracking-[-2px] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)] sm:tracking-[-4px] md:text-[clamp(2.15rem,5.2vw,3.75rem)]">
                Soil that honours every nutmeg
              </span>
              <span className="mt-0 block font-[family-name:var(--font-instrument-serif)] text-[clamp(1.85rem,9.5vw,96px)] italic leading-[0.9] text-white drop-shadow-[0_6px_28px_rgba(0,0,0,0.35)] sm:text-[clamp(2.35rem,11vw,96px)] md:leading-[0.86]">
                turning waste into growth
              </span>
            </h1>

            <Link
              href="#products"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 font-[family-name:var(--font-barlow)] text-[13px] font-semibold text-[var(--excelia-forest)] shadow-[0_16px_40px_rgba(0,0,0,0.18)] transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_20px_48px_rgba(0,0,0,0.22)] sm:mt-10 sm:px-10 sm:py-4 sm:text-lg md:px-12 md:py-[1.2rem] md:text-xl"
            >
              Start from the topper
            </Link>
          </motion.div>
        </div>
      </section>
  );
}
