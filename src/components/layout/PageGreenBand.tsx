import { PAGE_CONTAINER_CLASS } from "@/lib/pageLayout";

type PageGreenBandProps = {
  children: React.ReactNode;
  /** Pull the band under the fixed header so forest green reaches the viewport top. */
  bleedTop?: boolean;
  className?: string;
  innerClassName?: string;
};

export function PageGreenBand({
  children,
  bleedTop = false,
  className = "",
  innerClassName = "",
}: PageGreenBandProps) {
  const vertical =
    bleedTop === true
      ? "-mt-24 pt-24 pb-12 sm:-mt-28 sm:pt-28 sm:pb-14 lg:-mt-32 lg:pt-32 lg:pb-16"
      : "py-12 sm:py-14 lg:py-16";

  return (
    <section
      className={`relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 bg-[var(--excelia-forest)] text-[var(--excelia-cream)] ${vertical} ${className}`}
    >
      <div className={`${PAGE_CONTAINER_CLASS} ${innerClassName}`}>
        {children}
      </div>
    </section>
  );
}
