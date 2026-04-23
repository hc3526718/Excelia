import { PAGE_CONTAINER_CLASS } from "@/lib/pageLayout";

type PageGreenBandProps = {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
};

export function PageGreenBand({
  children,
  className = "",
  innerClassName = "",
}: PageGreenBandProps) {
  return (
    <section
      className={`relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 bg-[var(--excelia-forest)] py-12 text-[var(--excelia-cream)] sm:py-14 lg:py-16 ${className}`}
    >
      <div className={`${PAGE_CONTAINER_CLASS} ${innerClassName}`}>
        {children}
      </div>
    </section>
  );
}
