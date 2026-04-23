"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { type FormEvent, useCallback, useState } from "react";
import { SiteHeader } from "@/components/hero/SiteHeader";
import { HeroSection } from "@/components/hero/HeroSection";
import StickerPeel from "@/components/stickers/StickerPeel";
import { FeaturedProducts } from "@/components/products/FeaturedProducts";
import { MissionSection } from "@/components/mission/MissionSection";
import { PillarsSection } from "@/components/pillars/PillarsSection";
import { StorySection } from "@/components/story/StorySection";

/** Rotation while dragging follows pointer; resting rotate prop — within ±20° */
const STICKERS = [
  {
    src: "/assets/Island_Sticker.png",
    rotate: -14,
    peelDirection: 124,
    peelBackHoverPct: 11,
    peelBackActivePct: 70,
    shadowIntensity: 0.58,
    lightingIntensity: 0.11,
    initialPosition: { x: 6, y: 8 } as const,
    yNudgePx: 0,
    width: 208,
  },
  {
    src: "/assets/Flag_Sticker.png",
    rotate: 18,
    peelDirection: 206,
    peelBackHoverPct: 12,
    peelBackActivePct: 68,
    shadowIntensity: 0.55,
    lightingIntensity: 0.1,
    initialPosition: { x: -4, y: 14 } as const,
    yNudgePx: 22,
    width: 216,
  },
  {
    src: "/assets/Logo_Sticker.png",
    rotate: -10,
    peelDirection: 52,
    peelBackHoverPct: 10,
    peelBackActivePct: 72,
    shadowIntensity: 0.62,
    lightingIntensity: 0.09,
    initialPosition: { x: 10, y: -4 } as const,
    yNudgePx: -14,
    width: 212,
  },
];

const FOOTER_EXPLORE_LINKS = [
  { href: "#about", label: "About" },
  { href: "#mission", label: "Mission" },
  { href: "#contact", label: "Contact" },
  { href: "#shop", label: "Shop Now" },
];

function FooterBrandStickerSection() {
  return (
    <section
      className="relative overflow-x-hidden border-t border-white/20 bg-[var(--excelia-forest)] pb-14 pt-4 text-[var(--excelia-cream)] sm:pb-16 sm:pt-6"
      aria-label="Excelia emblem, site links, and stickers"
    >
      {/* Full-bleed logo (emblem) — spans viewport width */}
      <div className="relative mx-auto mb-10 w-full sm:mb-12 md:mb-14">
        <Image
          src="/assets/Excelia_Logo.png"
          alt="Excelia emblem"
          width={1800}
          height={720}
          sizes="100vw"
          className="mx-auto block h-auto w-full max-h-[min(52vh,560px)] object-contain object-center px-2 sm:px-4"
        />
      </div>

      <div className="mx-auto max-w-6xl px-3 sm:px-8">
        <nav
          className="border-t border-white/15 pt-8 font-[family-name:var(--font-barlow)] text-xs text-white/90 sm:text-sm"
          aria-label="Explore"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--excelia-gold)] sm:text-xs">
            Explore
          </p>
          <ul className="mt-3 flex flex-col gap-2">
            {FOOTER_EXPLORE_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  className="transition-opacity hover:opacity-75"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="relative mt-12 flex w-full min-w-0 justify-center sm:mt-14 lg:justify-end">
          <div className="flex max-w-full flex-wrap items-start justify-center gap-x-5 gap-y-6 sm:gap-x-8 sm:gap-y-10 lg:justify-end">
            {STICKERS.map((s) => (
              <div
                key={s.src}
                className="relative shrink-0"
                style={{
                  transform: `translateY(${s.yNudgePx}px)`,
                  width: s.width + 64,
                  height: s.width + 72,
                }}
              >
                <StickerPeel
                  imageSrc={s.src}
                  width={s.width}
                  rotate={s.rotate}
                  peelBackHoverPct={s.peelBackHoverPct}
                  peelBackActivePct={s.peelBackActivePct}
                  shadowIntensity={s.shadowIntensity}
                  lightingIntensity={s.lightingIntensity}
                  initialPosition={s.initialPosition}
                  peelDirection={s.peelDirection}
                  className="left-0 top-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

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
    <footer className="relative isolate z-0 bg-[var(--excelia-forest)] text-[var(--excelia-cream)]">
      <div
        id="contact"
        className="scroll-mt-20 border-t border-[var(--excelia-stone)]/40 px-3 py-12 sm:scroll-mt-24 sm:px-8 sm:py-16"
      >
        <div className="mx-auto max-w-6xl">
          <p className="font-[family-name:var(--font-barlow)] text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--excelia-gold)] sm:text-xs sm:tracking-[0.25em]">
            Contact
          </p>
          <p className="mt-2 max-w-lg font-[family-name:var(--font-barlow)] text-[13px] leading-relaxed text-white/85 sm:mt-3 sm:text-sm">
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
        </div>
      </div>

      <FooterBrandStickerSection />
    </footer>
  );
}

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
          <ContactFooter />
        </motion.div>
      )}

      <SiteHeader visible={navReveal} />
    </>
  );
}
