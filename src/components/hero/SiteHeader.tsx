"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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

type SiteHeaderProps = {
  visible: boolean;
};

export function SiteHeader({ visible }: SiteHeaderProps) {
  return (
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
        className="grid w-full max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-x-2 gap-y-1 rounded-[14px] bg-white px-2 py-1 shadow-[0_12px_40px_rgba(45,77,54,0.14)] sm:gap-x-3 sm:rounded-[16px] sm:px-4 sm:py-1.5 md:px-5 md:py-2"
        aria-label="Primary"
      >
        <ul className="flex min-w-0 flex-wrap items-center justify-self-start gap-x-2 gap-y-0.5 font-[family-name:var(--font-barlow)] text-[10px] font-semibold leading-tight sm:gap-x-5 sm:text-sm md:text-[15px]">
          <li>
            <Link
              className="text-[var(--excelia-rust)] transition-opacity hover:opacity-75"
              href="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="text-[var(--excelia-rust)] transition-opacity hover:opacity-75"
              href="/our-impact"
            >
              Why Excelia
            </Link>
          </li>
          <li>
            <Link
              className="text-[var(--excelia-rust)] transition-opacity hover:opacity-75"
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>

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
            className="inline-flex size-8 shrink-0 items-center justify-center rounded-full text-[var(--excelia-rust)] transition-colors hover:bg-black/[0.04] sm:size-10"
            aria-label="Account"
          >
            <UserIcon className="size-4 sm:size-5" />
          </button>
          <Link
            href="/shop"
            className="inline-flex size-8 shrink-0 items-center justify-center rounded-full text-[var(--excelia-rust)] transition-colors hover:bg-black/[0.04] sm:size-10"
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
  );
}
