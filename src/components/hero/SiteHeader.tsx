"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ExceliaWordmark } from "@/components/brand/ExceliaWordmark";

function UserIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="7"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BasketIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M6 7h15l-1.5 9h-12L6 7zm0 0L5 3H2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
        fill="currentColor"
      />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M5 7h14M5 12h14M5 17h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

type SiteHeaderProps = {
  visible: boolean;
};

const MOBILE_NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/our-impact", label: "Why Excelia" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader({ visible }: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (mq.matches) setMobileMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      <motion.header
        className="fixed left-0 right-0 top-2 z-[2147483000] flex justify-center px-3 sm:top-3 sm:px-5 lg:top-4 lg:px-8"
        initial={false}
        animate={{
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          pointerEvents: visible ? "auto" : "none",
        }}
        aria-hidden={!visible}
      >
        <nav
          className="grid w-full max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-x-2 gap-y-1 rounded-[14px] bg-white px-2 py-1 shadow-[0_12px_40px_rgba(45,77,54,0.14)] sm:gap-x-3 sm:rounded-[16px] sm:px-4 sm:py-1.5 md:grid-cols-[1fr_auto_1fr] md:px-5 md:py-2"
          aria-label="Primary"
        >
          <div className="flex min-w-0 items-center justify-self-start gap-1 sm:gap-2">
            <button
              type="button"
              className="inline-flex size-9 shrink-0 items-center justify-center rounded-full text-[var(--excelia-rust)] transition-colors hover:bg-black/[0.04] md:hidden"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-overlay"
              onClick={() => setMobileMenuOpen((o) => !o)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <CloseIcon className="size-5" />
              ) : (
                <MenuIcon className="size-5" />
              )}
            </button>

            <ul className="hidden min-w-0 flex-wrap items-center gap-x-2 gap-y-0.5 font-[family-name:var(--font-barlow)] text-[10px] font-semibold leading-tight sm:gap-x-5 sm:text-sm md:flex md:text-[15px]">
              {MOBILE_NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-[var(--excelia-rust)] transition-opacity hover:opacity-75"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/"
            className="relative z-[1] mx-auto block max-w-[min(72vw,420px)] shrink-0 translate-y-[1px] sm:max-w-[min(62vw,480px)] md:max-w-[520px]"
            aria-label="Excelia home"
          >
            <ExceliaWordmark
              priority
              className="mx-auto block h-[2.35rem] w-auto max-w-full sm:h-16 md:h-[4.75rem] lg:h-[5.25rem] xl:h-[5.75rem]"
            />
          </Link>

          <div className="flex min-w-0 items-center justify-end justify-self-end gap-1 sm:gap-2 md:gap-3">
            <button
              type="button"
              className="inline-flex size-8 shrink-0 items-center justify-center rounded-full text-[var(--excelia-rust)] transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-black/[0.04] sm:size-10"
              aria-label="Account"
            >
              <UserIcon className="size-4 sm:size-5" />
            </button>
            <Link
              href="/shop"
              className="inline-flex size-8 shrink-0 items-center justify-center rounded-full text-[var(--excelia-rust)] transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-black/[0.04] sm:size-10"
              aria-label="Shop"
            >
              <BasketIcon className="size-4 sm:size-5" />
            </Link>
            <Link
              href="/shop"
              className="inline-flex min-h-8 shrink-0 items-center justify-center rounded-full bg-[var(--excelia-rust)] px-2.5 py-1.5 font-[family-name:var(--font-barlow)] text-[10px] font-semibold leading-none text-white shadow-sm transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-md sm:min-h-10 sm:px-5 sm:text-sm md:px-6 md:text-[15px]"
            >
              Shop Now
            </Link>
          </div>
        </nav>
      </motion.header>

      {mobileMenuOpen ? (
        <div
          id="mobile-nav-overlay"
          className="fixed inset-0 z-[2147483100] md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div className="absolute inset-0 bg-[var(--excelia-forest)]">
            <Image
              src="/assets/Imageback.png"
              alt=""
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
            <div
              className="absolute inset-0 bg-[var(--excelia-forest)]/55"
              aria-hidden
            />
          </div>

          <div className="relative flex h-full flex-col px-6 pb-10 pt-[calc(env(safe-area-inset-top)+5.5rem)]">
            <nav
              className="flex flex-1 flex-col justify-center gap-2 font-[family-name:var(--font-barlow)] text-xl font-semibold tracking-wide text-[var(--excelia-cream)]"
              aria-label="Mobile primary"
            >
              <Link
                href="/"
                className="rounded-xl px-4 py-4 transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              {MOBILE_NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-4 py-4 transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/shop"
                className="mt-4 inline-flex w-fit items-center rounded-full bg-[var(--excelia-rust)] px-8 py-3.5 text-[15px] font-semibold text-white shadow-md transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Shop Now
              </Link>
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}
