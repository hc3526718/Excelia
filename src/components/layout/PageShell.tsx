"use client";

import { SiteHeader } from "@/components/hero/SiteHeader";

/** Inner-site pages show the fixed header immediately (no landing intro gate). */
export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader visible />
      <div className="min-h-screen bg-[var(--excelia-cream)] pt-[4.5rem] pb-16 sm:pt-[5rem] lg:pt-[5.25rem]">
        {children}
      </div>
    </>
  );
}
