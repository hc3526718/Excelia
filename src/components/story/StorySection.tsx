"use client";

import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useMemo, useRef } from "react";

const STORY =
  "Excelia upcycles nutmeg co‑product into a refined soil topper—closing the loop on spice waste while feeding soil life, improving structure, and giving beds a distinctive, natural finish.";

function StoryWord({
  children,
  progress,
  index,
  total,
}: {
  children: string;
  progress: MotionValue<number>;
  index: number;
  total: number;
}) {
  const start = index / Math.max(1, total);
  const end = Math.min(1, (index + 1.08) / Math.max(1, total));
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const y = useTransform(progress, [start, end], [14, 0]);

  return (
    <motion.span
      style={{ opacity, y }}
      className="inline-block whitespace-nowrap font-[family-name:var(--font-barlow)] text-lg font-medium leading-relaxed text-[var(--excelia-olive)] sm:text-xl md:text-[1.35rem]"
    >
      {children}
    </motion.span>
  );
}

export function StorySection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    /** Completes over a shorter scroll distance */
    offset: ["start 0.96", "start 0.58"],
  });

  const words = useMemo(() => STORY.split(/\s+/).filter(Boolean), []);

  return (
    <section
      ref={ref}
      id="story"
      className="scroll-mt-24 border-t border-[var(--excelia-stone)]/35 bg-[var(--excelia-cream)] px-4 py-12 sm:px-8 sm:py-14 lg:px-12"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="inline-block max-w-full text-center">
          <span className="inline-flex max-w-full flex-wrap justify-center gap-x-2 gap-y-2 [text-wrap:balance]">
            {words.map((word, i) => (
              <StoryWord
                key={`${word}-${i}`}
                progress={scrollYProgress}
                index={i}
                total={words.length}
              >
                {word}
              </StoryWord>
            ))}
          </span>
        </p>
      </div>
    </section>
  );
}
