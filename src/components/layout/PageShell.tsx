"use client";

import { ExceliaFullFooter } from "@/components/footer/ExceliaFooter";
import { SiteHeader } from "@/components/hero/SiteHeader";

/** Inner-site pages: header, main, then same contact strip and explore footer as the landing page. */
export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader visible />
      <div className="min-h-screen overflow-x-clip bg-[var(--excelia-cream)] pt-24 pb-0 sm:pt-28 sm:pb-0 lg:pt-32">
        {children}
      </div>
      <ExceliaFullFooter />
    </>
  );
}
