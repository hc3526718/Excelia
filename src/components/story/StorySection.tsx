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

function StoryLetter({
  char,
  progress,
  index,
  total,
}: {
  char: string;
  progress: MotionValue<number>;
  index: number;
  total: number;
}) {
  const start = index / Math.max(1, total);
  const end = Math.min(1, (index + 1.4) / Math.max(1, total));
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const y = useTransform(progress, [start, end], [22, 0]);

  if (char === " ") {
    return <span className="inline-block w-[0.25em]" />;
  }

  return (
    <motion.span
      style={{ opacity, y }}
      className="inline-block font-[family-name:var(--font-barlow)] text-lg font-medium leading-relaxed text-[var(--excelia-olive)] sm:text-xl md:text-[1.35rem]"
    >
      {char}
    </motion.span>
  );
}

export function StorySection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.88", "end 0.42"],
  });

  const chars = useMemo(() => Array.from(STORY), []);

  return (
    <section
      ref={ref}
      id="story"
      className="scroll-mt-24 border-t border-[var(--excelia-stone)]/35 bg-[var(--excelia-cream)] px-4 py-20 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-wrap gap-x-[0.12em] gap-y-1">
          {chars.map((char, i) => (
            <StoryLetter
              key={`${char}-${i}`}
              char={char}
              progress={scrollYProgress}
              index={i}
              total={chars.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
