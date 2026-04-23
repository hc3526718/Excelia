"use client";

type ContactStickerProps = {
  src: string;
  alt: string;
  width: number;
  rotateDeg?: number;
  /** px — slight vertical stagger (positive = lower) */
  yOffsetPx?: number;
};

/**
 * Shadow uses filter:drop-shadow on the image only (follows alpha) — no rectangular
 * box-shadow on a wrapper, which reads as flat “tiles” on forest-green backgrounds.
 */
export function ContactSticker({
  src,
  alt,
  width,
  rotateDeg = 0,
  yOffsetPx = 0,
}: ContactStickerProps) {
  return (
    <span
      className="inline-block overflow-visible leading-[0]"
      style={{
        transform: `translateY(${yOffsetPx}px) rotate(${rotateDeg}deg)`,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={width}
        className="block max-w-none select-none border-0 bg-transparent align-bottom outline-none"
        style={{
          width: `${width}px`,
          height: "auto",
          verticalAlign: "bottom",
          filter:
            "drop-shadow(0 10px 18px rgba(0,0,0,0.28)) drop-shadow(0 2px 4px rgba(0,0,0,0.15))",
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
        }}
        draggable={false}
        loading="lazy"
        decoding="async"
      />
    </span>
  );
}
