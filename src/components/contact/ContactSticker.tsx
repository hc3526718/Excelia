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
 * Plain <img> keeps Next/Image’s layout wrapper from drawing placeholder/sizing boxes
 * (the semi-transparent “squares” behind tilted stickers on green backgrounds).
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
      className="inline-block shadow-[0_12px_28px_rgba(0,0,0,0.28)]"
      style={{
        transform: `translateY(${yOffsetPx}px) rotate(${rotateDeg}deg)`,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- intentional to avoid Next/Image wrapper backgrounds */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={width}
        className="block h-auto max-w-none select-none bg-transparent"
        style={{ width: `${width}px`, height: "auto" }}
        draggable={false}
        loading="lazy"
        decoding="async"
      />
    </span>
  );
}
