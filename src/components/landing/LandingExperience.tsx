"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { type FormEvent, useCallback, useState } from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { FeaturedProducts } from "@/components/products/FeaturedProducts";
import { MissionSection } from "@/components/mission/MissionSection";
import { PillarsSection } from "@/components/pillars/PillarsSection";
import { StorySection } from "@/components/story/StorySection";

const STICKER_TILTS_DEG = [14, 31, 22] as const;

/** Right-column sticker zone only — offsets keep separation */
const STICKERS = [
  {
    src: "/assets/Island_Sticker.png",
    alt: "Island sticker",
    className: "right-0 top-8 z-[3]",
    tiltIndex: 0 as const,
  },
  {
    src: "/assets/Flag_Sticker.png",
    alt: "Flag sticker",
    className: "right-[13.5rem] top-16 z-[2] sm:right-[15rem] sm:top-20",
    tiltIndex: 1 as const,
  },
  {
    src: "/assets/Logo_Sticker.png",
    alt: "Logo sticker",
    className: "right-12 bottom-8 z-[1] sm:right-16 sm:bottom-10",
    tiltIndex: 2 as const,
  },
];

function ContactFooter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;
    const subject = encodeURIComponent("Excelia — contact");
    const body = encodeURIComponent(
      `Please reach me at: ${trimmed}\n\n`,
    );
    window.location.href = `mailto:hello@excelia.example?subject=${subject}&body=${body}`;
  };

  return (
    <footer
      id="contact"
      className="scroll-mt-24 border-t border-[var(--excelia-stone)]/40 bg-[var(--excelia-forest)] px-4 py-16 text-[var(--excelia-cream)] sm:px-8"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-start lg:gap-12">
        <div className="min-w-0 max-w-lg lg:max-w-none">
          <p className="font-[family-name:var(--font-barlow)] text-xs font-semibold uppercase tracking-[0.25em] text-[var(--excelia-gold)]">
            Contact
          </p>
          <p className="mt-3 font-[family-name:var(--font-barlow)] text-sm leading-relaxed text-white/85">
            Partner with Excelia for nutmeg‑smart soil programs, allocation updates,
            and sustainability reporting—we reply to growers, retailers, and brand
            teams routing spice waste back to the ground.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-6 flex max-w-md flex-col gap-3 sm:flex-row sm:items-center"
          >
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="min-h-12 w-full flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 font-[family-name:var(--font-barlow)] text-sm text-white placeholder:text-white/45 outline-none ring-0 transition-[background,border] focus:border-white/40 focus:bg-white/15"
            />
            <button
              type="submit"
              className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-[var(--excelia-rust)] px-8 font-[family-name:var(--font-barlow)] text-sm font-semibold text-white shadow-sm transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-md"
            >
              Submit
            </button>
          </form>

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

        <div className="relative ml-0 min-h-[240px] w-full shrink-0 lg:min-h-[280px] lg:max-w-none">
          <div className="relative mx-auto h-[240px] w-full max-w-md sm:h-[260px] lg:absolute lg:inset-0 lg:mx-0 lg:h-full lg:max-w-none">
            {STICKERS.map((s) => (
              <div
                key={s.src}
                className={`pointer-events-none absolute ${s.className}`}
                style={{
                  transform: `rotate(${STICKER_TILTS_DEG[s.tiltIndex]}deg)`,
                }}
              >
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={280}
                  height={280}
                  className="h-auto w-[min(56vw,210px)] drop-shadow-[0_14px_26px_rgba(0,0,0,0.34)] sm:w-[min(48vw,230px)] lg:w-[210px]"
                  sizes="(max-width: 1024px) 56vw, 230px"
                />
              </div>
            ))}
          </div>
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
          className="relative z-0"
        >
          <StorySection />
          <PillarsSection />
          <MissionSection />
          <FeaturedProducts />
          <ContactFooter />
        </motion.div>
      )}
    </>
  );
}
