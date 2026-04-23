"use client";

const WORDMARK_PNG = "/assets/Excelia_Name.png";

/**
 * Excelia_Name.svg is a wrapper around the same PNG; use the PNG as `src` so the
 * wordmark always paints. (SVG-as-img with nested &lt;image&gt; is often blank in Edge/Chrome.)
 * `loading="eager"` avoids being affected by the browser’s lazy-image “intervention”
 * (deferred load events / placeholder phases) on critical brand marks.
 */
export function ExceliaWordmark({
  className,
  priority,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- static public assets
    <img
      src={WORDMARK_PNG}
      alt="Excelia"
      width={640}
      height={160}
      className={className}
      loading="eager"
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : "auto"}
      draggable={false}
    />
  );
}
