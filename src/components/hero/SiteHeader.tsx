"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
      className="fixed left-0 right-0 top-3 z-[2147483000] flex justify-center px-3 sm:top-4 sm:px-5 lg:top-5 lg:px-8"
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
        className="flex w-full max-w-6xl items-center justify-between gap-1 rounded-[14px] bg-white px-2 py-1.5 shadow-[0_12px_40px_rgba(45,77,54,0.14)] sm:gap-3 sm:rounded-[16px] sm:px-4 sm:py-2.5 md:px-5 md:py-3"
        aria-label="Primary"
      >
        <ul className="flex min-w-0 flex-1 flex-wrap items-center gap-x-2 gap-y-0.5 font-[family-name:var(--font-barlow)] text-[10px] font-semibold leading-tight sm:gap-x-5 sm:text-sm md:text-[15px]">
          <li>
            <a
              className="text-[var(--excelia-rust)] transition-opacity hover:opacity-75"
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="text-[var(--excelia-rust)] transition-opacity hover:opacity-75"
              href="#mission"
            >
              Mission
            </a>
          </li>
          <li>
            <a
              className="text-[var(--excelia-rust)] transition-opacity hover:opacity-75"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>

        <Link
          href="/"
          className="mx-0.5 shrink-0 translate-y-[1px] sm:mx-1 md:mx-3"
          aria-label="Excelia home"
        >
          <Image
            src="/assets/Excelia_Name.svg"
            alt="Excelia"
            width={320}
            height={70}
            className="h-[1.75rem] w-auto sm:h-12 md:h-14 lg:h-[3.5rem] xl:h-16"
            priority
          />
        </Link>

        <div className="flex flex-1 items-center justify-end gap-1 sm:gap-2 md:gap-3">
          <button
            type="button"
            className="inline-flex size-8 items-center justify-center rounded-full text-[var(--excelia-rust)] transition-colors hover:bg-black/[0.04] sm:size-10"
            aria-label="Account"
          >
            <UserIcon className="size-4 sm:size-5" />
          </button>
          <button
            type="button"
            className="inline-flex size-8 items-center justify-center rounded-full text-[var(--excelia-rust)] transition-colors hover:bg-black/[0.04] sm:size-10"
            aria-label="Shopping basket"
          >
            <BasketIcon className="size-4 sm:size-5" />
          </button>
          <a
            href="#shop"
            className="inline-flex min-h-8 items-center justify-center rounded-full bg-[var(--excelia-rust)] px-2.5 py-1.5 font-[family-name:var(--font-barlow)] text-[10px] font-semibold leading-none text-white shadow-sm transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-md sm:min-h-10 sm:px-5 sm:text-sm md:px-6 md:text-[15px]"
          >
            Shop Now
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
