"use client";

import { useEffect, useRef, useState } from "react";

const WORDMARK_SVG = "/assets/Excelia_Name.svg";
const WORDMARK_PNG = "/assets/Excelia_Name.png";

/**
 * SVG wordmark often fails when used as `<img src>` because nested `<image href>`
 * references may not resolve the same as loading the SVG directly; PNG is the real artwork.
 * We prefer SVG when it loads with real dimensions; otherwise fall back to PNG.
 */
export function ExceliaWordmark({
  className,
  priority,
}: {
  className?: string;
  priority?: boolean;
}) {
  const [src, setSrc] = useState(WORDMARK_SVG);
  const ranProbe = useRef(false);

  useEffect(() => {
    if (ranProbe.current) return;
    ranProbe.current = true;

    const probe = new Image();
    probe.onload = () => {
      if (probe.naturalWidth < 4 || probe.naturalHeight < 4) {
        setSrc(WORDMARK_PNG);
      }
    };
    probe.onerror = () => setSrc(WORDMARK_PNG);
    probe.src = WORDMARK_SVG;
  }, []);

  return (
    // eslint-disable-next-line @next/next/no-img-element -- raster/SVG wordmark asset bundle
    <img
      src={src}
      alt="Excelia"
      width={640}
      height={160}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      draggable={false}
      onError={() => setSrc(WORDMARK_PNG)}
    />
  );
}
