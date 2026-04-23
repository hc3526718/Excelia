"use client";

import Image from "next/image";

type ContactStickerProps = {
  src: string;
  alt: string;
  width: number;
  rotateDeg?: number;
  /** px — slight vertical stagger (positive = lower) */
  yOffsetPx?: number;
};

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
      <Image
        src={src}
        alt={alt}
        width={width}
        height={width}
        className="h-auto max-w-none select-none"
        sizes={`${width}px`}
        style={{ width: `${width}px`, height: "auto" }}
        draggable={false}
      />
    </span>
  );
}
