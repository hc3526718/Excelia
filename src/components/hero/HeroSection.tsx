"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PingPongVideo } from "./PingPongVideo";

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  );
}

const VIDEO_MASK =
  "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 52%, rgba(255,255,255,0.94) 62%, rgba(255,255,255,0.78) 74%, rgba(255,255,255,0.48) 86%, rgba(255,255,255,0.2) 94%, rgba(255,255,255,0) 100%)";

type HeroSectionProps = {
  introDone: boolean;
};

export function HeroSection({ introDone }: HeroSectionProps) {
  return (
    <section
      id="about"
      className="relative isolate flex min-h-[90vh] flex-col overflow-hidden bg-[var(--excelia-cream)]"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          maskImage: VIDEO_MASK,
          WebkitMaskImage: VIDEO_MASK,
        }}
      >
        <PingPongVideo
          src="/assets/3AgNzzqv3gbwXg9WC8wI5_output.mp4"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col px-4 pb-16 pt-6 sm:px-6 lg:px-10">
        <header className="mx-auto w-full max-w-6xl">
          <nav
            className="grid w-full grid-cols-1 items-center gap-4 rounded-[16px] bg-white px-3 py-2.5 shadow-[0_12px_40px_rgba(45,77,54,0.12)] sm:px-5 md:grid-cols-[1fr_auto_1fr] md:gap-6 md:py-3"
            aria-label="Primary"
          >
            <div className="flex min-h-[52px] justify-center md:justify-start md:items-center">
              {introDone ? (
                <Link href="/" className="block leading-none">
                  <motion.div layoutId="excelia-brand-logo" className="relative">
                    <Image
                      src="/assets/Excelia_Logo.png"
                      alt="Excelia"
                      width={200}
                      height={56}
                      className="h-12 w-auto sm:h-14"
                      priority
                    />
                  </motion.div>
                </Link>
              ) : (
                <div
                  className="inline-block opacity-0"
                  aria-hidden
                  style={{ width: 200, height: 56 }}
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
        </header>

        <div className="mx-auto flex flex-1 flex-col items-center justify-center px-2 pb-8 pt-12 text-center sm:px-4 md:pt-16">
          <h1 className="max-w-5xl space-y-1 sm:space-y-2">
            <span className="block font-[family-name:var(--font-barlow)] text-[clamp(1.75rem,4vw,3rem)] font-semibold tracking-[-4px] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
              Soil that honours every nutmeg
            </span>
            <span className="block font-[family-name:var(--font-instrument-serif)] text-[clamp(2.75rem,12vw,84px)] italic leading-[0.95] text-white drop-shadow-[0_6px_28px_rgba(0,0,0,0.35)]">
              waste turned into growth
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl font-[family-name:var(--font-barlow)] text-[18px] font-medium leading-relaxed text-white/95 drop-shadow-[0_2px_16px_rgba(0,0,0,0.35)]">
            Excelia upcycles nutmeg co‑product into a refined soil topper—closing
            the loop on spice waste while feeding soil life, improving structure,
            and giving beds a distinctive, natural finish.
          </p>

          <a
            href="#products"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-[family-name:var(--font-barlow)] text-base font-semibold text-[var(--excelia-forest)] shadow-[0_16px_40px_rgba(0,0,0,0.18)] transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_20px_48px_rgba(0,0,0,0.22)]"
          >
            <PlayIcon className="size-5 text-[var(--excelia-rust)] transition-transform group-hover:scale-110" />
            Explore the topper
          </a>
        </div>
      </div>
    </section>
  );
}
