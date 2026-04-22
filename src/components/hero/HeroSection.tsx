import Image from "next/image";
import Link from "next/link";
import { PingPongVideo } from "./PingPongVideo";

function ArrowSquareIcon() {
  return (
    <span
      className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/25"
      aria-hidden
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="size-4 rotate-45 text-white"
        aria-hidden
      >
        <path
          d="M5 12h14M12 5l7 7-7 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

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

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[90vh] flex-col overflow-hidden bg-[var(--excelia-cream)]">
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
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
            className="grid w-full grid-cols-1 items-center gap-4 rounded-[16px] bg-white px-4 py-3 shadow-[0_12px_40px_rgba(45,77,54,0.12)] sm:px-6 md:grid-cols-[1fr_auto_1fr] md:gap-6"
            aria-label="Primary"
          >
            <div className="flex justify-center md:justify-start">
              <Link href="/" className="relative py-1">
                <Image
                  src="/assets/Excelia_Logo.png"
                  alt="Excelia"
                  width={140}
                  height={40}
                  className="h-9 w-auto sm:h-10"
                  priority
                />
              </Link>
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
                className="inline-flex items-center gap-2 rounded-full bg-[var(--excelia-rust)] px-4 py-2.5 font-[family-name:var(--font-barlow)] text-sm font-semibold text-white shadow-sm transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-md"
              >
                <ArrowSquareIcon />
                Shop Now
              </a>
            </div>
          </nav>
        </header>

        <div className="mx-auto flex flex-1 flex-col items-center justify-center px-2 pb-8 pt-12 text-center sm:px-4 md:pt-16">
          <h1 className="max-w-5xl space-y-1 sm:space-y-2">
            <span className="block font-[family-name:var(--font-barlow)] text-[clamp(1.75rem,4vw,3rem)] font-semibold tracking-[-4px] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
              Agency that makes your
            </span>
            <span className="block font-[family-name:var(--font-instrument-serif)] text-[clamp(2.75rem,12vw,84px)] italic leading-[0.95] text-white drop-shadow-[0_6px_28px_rgba(0,0,0,0.35)]">
              videos & reels viral
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl font-[family-name:var(--font-barlow)] text-[18px] font-medium leading-relaxed text-white/95 drop-shadow-[0_2px_16px_rgba(0,0,0,0.35)]">
            Short-form video editing for Influencers, Creators and Brands
          </p>

          <a
            href="#workreel"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-[family-name:var(--font-barlow)] text-base font-semibold text-[var(--excelia-forest)] shadow-[0_16px_40px_rgba(0,0,0,0.18)] transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_20px_48px_rgba(0,0,0,0.22)]"
          >
            <PlayIcon className="size-5 text-[var(--excelia-rust)] transition-transform group-hover:scale-110" />
            See Our Workreel
          </a>
        </div>
      </div>
    </section>
  );
}
