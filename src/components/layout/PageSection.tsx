import { PAGE_CONTAINER_CLASS } from "@/components/footer/ExceliaFooter";

type PageSectionProps = {
  children: React.ReactNode;
  /** Classes on the outer `<section>` (spacing, borders, backgrounds). */
  className?: string;
  /** Classes merged onto the inner column (`PAGE_CONTAINER_CLASS`). */
  innerClassName?: string;
};

/** Matches footer / contact strip: each section’s content sits in `mx-auto max-w-6xl px-3 sm:px-8 lg:px-12`. */
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
