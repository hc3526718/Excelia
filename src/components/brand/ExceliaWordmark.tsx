"use client";

/**
 * Plain <img> wordmark — avoids Next/Image SVG optimization quirks so embedded
 * raster inside Excelia_Name.svg resolves reliably everywhere.
 */
export function ExceliaWordmark({
  className,
  priority,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- intentional for SVG+raster bundle
    <img
      src="/assets/Excelia_Name.svg"
      alt="Excelia"
      width={640}
      height={160}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      draggable={false}
    />
  );
}
