import { PAGE_CONTAINER_CLASS } from "@/lib/pageLayout";

type PageSectionProps = {
  children: React.ReactNode;
  /** Classes on the outer `<section>` (spacing, borders, backgrounds). */
  className?: string;
  /** Classes merged onto the inner column (`PAGE_CONTAINER_CLASS`). */
  innerClassName?: string;
};

/** Matches footer inner column: `.excelia-page-container` + `max-w-6xl` (see `globals.css`). */
export function PageSection({
  children,
  className = "",
  innerClassName = "",
}: PageSectionProps) {
  return (
    <section className={className}>
      <div className={`${PAGE_CONTAINER_CLASS} ${innerClassName}`}>
        {children}
      </div>
    </section>
  );
}
