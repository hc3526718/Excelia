"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { IntroSequence } from "@/components/landing/IntroSequence";
import { PingPongVideo } from "./PingPongVideo";

const VIDEO_MASK =
  "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 52%, rgba(255,255,255,0.94) 62%, rgba(255,255,255,0.78) 74%, rgba(255,255,255,0.48) 86%, rgba(255,255,255,0.2) 94%, rgba(255,255,255,0) 100%)";

type HeroSectionProps = {
  onIntroFullyComplete: () => void;
};

export function HeroSection({ onIntroFullyComplete }: HeroSectionProps) {
  const [introOverlayOpen, setIntroOverlayOpen] = useState(true);
  const [navReveal, setNavReveal] = useState(false);

  const handleMorphComplete = useCallback(() => {
    setNavReveal(true);
  }, []);

  const handleIntroComplete = useCallback(() => {
    setIntroOverlayOpen(false);
    onIntroFullyComplete();
  }, [onIntroFullyComplete]);

  const showBody = !introOverlayOpen;

  return (
    <section
      id="about"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-[var(--excelia-cream)]"
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

      <div className="relative z-10 flex flex-1 flex-col px-4 pb-16 pt-6 sm:px-6 lg:px-10">
        <motion.header
          className="mx-auto w-full max-w-6xl"
          initial={false}
          animate={{
            opacity: navReveal ? 1 : 0,
          }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            pointerEvents: navReveal ? "auto" : "none",
          }}
        >
          <nav
            className="grid w-full grid-cols-1 items-center gap-4 rounded-[16px] bg-white px-3 py-2.5 shadow-[0_12px_40px_rgba(45,77,54,0.12)] sm:px-5 md:grid-cols-[1fr_auto_1fr] md:gap-6 md:py-3"
            aria-label="Primary"
          >
            <div className="flex min-h-[52px] justify-center md:justify-start md:items-center">
              {navReveal ? (
                <Link href="/" className="block leading-none">
                  <motion.div layoutId="excelia-brand-logo" className="relative">
                    <Image
                      src="/assets/Excelia_Logo.png"
                      alt="Excelia"
                      width={240}
                      height={68}
                      className="h-[52px] w-auto sm:h-14"
                      priority
                    />
                  </motion.div>
                </Link>
              ) : (
                <div
                  className="inline-block opacity-0"
                  aria-hidden
                  style={{ width: 200, height: 52 }}
                />
              )}
            </div>

            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 font-[family-name:var(--font-barlow)] text-[14px] font-medium text-[var(--excelia-forest)] md:justify-center">
              <li>
                <a className="transition-opacity hover:opacity-70" href="#about">
                  About
                </a>
              </li>
              <li>
                <a
                  className="transition-opacity hover:opacity-70"
                  href="#mission"
                >
                  Mission
                </a>
              </li>
              <li>
                <a
                  className="transition-opacity hover:opacity-70"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>

            <div className="flex justify-center md:justify-end">
              <a
                href="#shop"
                className="inline-flex items-center justify-center rounded-full bg-[var(--excelia-rust)] px-8 py-3.5 font-[family-name:var(--font-barlow)] text-[15px] font-semibold text-white shadow-sm transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-md sm:px-10 sm:py-4 sm:text-base"
              >
                Shop Now
              </a>
            </div>
          </nav>
        </motion.header>

        <motion.div
          className="mx-auto flex flex-1 flex-col items-center justify-center px-2 pb-8 pt-12 text-center sm:px-4 md:pt-16"
          initial={false}
          animate={{ opacity: showBody ? 1 : 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ pointerEvents: showBody ? "auto" : "none" }}
        >
          <h1 className="max-w-5xl space-y-0 sm:space-y-0">
            <span className="block font-[family-name:var(--font-barlow)] text-[clamp(2.15rem,5.2vw,3.75rem)] font-semibold tracking-[-4px] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
              Soil that honours every nutmeg
            </span>
            <span className="mt-1 block font-[family-name:var(--font-instrument-serif)] text-[clamp(3.25rem,13vw,96px)] italic leading-[0.92] text-white drop-shadow-[0_6px_28px_rgba(0,0,0,0.35)] md:mt-0 md:leading-[0.9]">
              turning waste into growth
            </span>
          </h1>

          <a
            href="#products"
            className="mt-12 inline-flex items-center justify-center rounded-full bg-white px-11 py-5 font-[family-name:var(--font-barlow)] text-lg font-semibold text-[var(--excelia-forest)] shadow-[0_16px_40px_rgba(0,0,0,0.18)] transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_20px_48px_rgba(0,0,0,0.22)] sm:px-12 sm:py-[1.35rem] sm:text-xl"
          >
            Start from the topper
          </a>
        </motion.div>
      </div>
    </section>
  );
}
