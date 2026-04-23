"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { type FormEvent, useCallback, useState } from "react";
import { ContactSticker } from "@/components/contact/ContactSticker";
import { SiteHeader } from "@/components/hero/SiteHeader";
import { HeroSection } from "@/components/hero/HeroSection";
import { FeaturedProducts } from "@/components/products/FeaturedProducts";
import { MissionSection } from "@/components/mission/MissionSection";
import { PillarsSection } from "@/components/pillars/PillarsSection";
import { StorySection } from "@/components/story/StorySection";
import {
  IconInstagram,
  IconTikTok,
  IconX,
  IconYouTube,
} from "@/components/footer/SocialIcons";

const STICKERS = [
  {
    src: "/assets/Island_Sticker.png",
    alt: "Island sticker",
    rotateDeg: -11,
    width: 156,
    yOffsetPx: -6,
  },
  {
    src: "/assets/Flag_Sticker.png",
    alt: "Flag sticker",
    rotateDeg: 13,
    width: 156,
    yOffsetPx: 5,
  },
  {
    src: "/assets/Logo_Sticker.png",
    alt: "Logo sticker",
    rotateDeg: -9,
    width: 156,
    yOffsetPx: -2,
  },
];

const FOOTER_EXPLORE_LINKS = [
  { href: "/about", label: "About" },
  { href: "/our-impact", label: "Why Excelia" },
  { href: "/contact", label: "Contact" },
  { href: "/shop", label: "Shop" },
];

const FOOTER_LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/shipping", label: "Shipping" },
  { href: "/returns", label: "Returns" },
];

const FOOTER_SOCIAL = [
  {
    href: "https://www.tiktok.com/",
    label: "TikTok",
    Icon: IconTikTok,
  },
  {
    href: "https://www.instagram.com/",
    label: "Instagram",
    Icon: IconInstagram,
  },
  {
    href: "https://www.youtube.com/",
    label: "YouTube",
    Icon: IconYouTube,
  },
  {
    href: "https://x.com/",
    label: "X",
    Icon: IconX,
  },
];

const footerLinkClass =
  "text-[var(--excelia-forest)] underline-offset-4 opacity-90 transition-[opacity,text-decoration-color] hover:opacity-70 hover:underline";

function SiteFooterExplore() {
  return (
    <div className="border-t border-[var(--excelia-stone)]/35 bg-[var(--excelia-cream)] px-3 pb-12 pt-10 text-[var(--excelia-forest)] sm:px-8 sm:pb-14 sm:pt-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-x-16 lg:gap-x-28">
          <nav
            className="font-[family-name:var(--font-barlow)] text-xs text-[var(--excelia-forest)] sm:text-sm"
            aria-label="Explore"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--excelia-gold)] sm:text-xs">
              Explore
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              {FOOTER_EXPLORE_LINKS.map((item) => (
                <li key={item.href}>
                  <Link className={footerLinkClass} href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav
            className="font-[family-name:var(--font-barlow)] text-xs text-[var(--excelia-forest)] sm:text-sm"
            aria-label="Legal"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--excelia-gold)] sm:text-xs">
              Legal
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              {FOOTER_LEGAL_LINKS.map((item) => (
                <li key={item.href}>
                  <Link className={footerLinkClass} href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-[var(--excelia-stone)]/35 pt-8">
          <p className="sr-only">Social</p>
          {FOOTER_SOCIAL.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="inline-flex size-10 items-center justify-center rounded-full text-[var(--excelia-forest)] opacity-85 transition-[opacity,background] hover:bg-black/[0.05] hover:opacity-100 sm:size-11"
            >
              <Icon className="size-5 sm:size-[1.35rem]" />
            </a>
          ))}
        </div>
      </div>
    </div>
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
    <footer className="relative isolate z-0">
      <div
        id="contact"
        className="scroll-mt-20 border-t border-[var(--excelia-stone)]/40 bg-[var(--excelia-forest)] px-3 py-10 text-[var(--excelia-cream)] sm:scroll-mt-24 sm:px-8 sm:py-12"
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,min(28rem,100%))_auto] lg:items-end lg:gap-x-16 xl:gap-x-24">
          <div className="min-w-0 lg:max-w-none">
            <p className="font-[family-name:var(--font-barlow)] text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--excelia-gold)] sm:text-xs sm:tracking-[0.25em]">
              Contact
            </p>
            <p className="mt-2 font-[family-name:var(--font-barlow)] text-[13px] leading-relaxed text-white/85 sm:mt-3 sm:text-sm">
              Partner with Excelia for nutmeg‑smart soil programs, allocation
              updates, and sustainability reporting—we reply to growers,
              retailers, and brand teams routing spice waste back to the ground.
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

          <div className="min-w-0 max-w-[100%] overflow-visible lg:justify-self-end">
            <div className="-mx-3 overflow-x-auto overflow-y-visible px-3 pb-1 sm:mx-0 sm:overflow-visible sm:pb-0 lg:mx-0">
              <div className="flex min-w-min flex-nowrap items-end justify-end gap-0.5 lg:gap-px">
                {STICKERS.map((s) => (
                  <ContactSticker
                    key={s.src}
                    src={s.src}
                    alt={s.alt}
                    width={s.width}
                    rotateDeg={s.rotateDeg}
                    yOffsetPx={s.yOffsetPx}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <SiteFooterExplore />
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
