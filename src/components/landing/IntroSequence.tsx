"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Stage = "center" | "morph" | "handoff";

const HOLD_MS = 2200;
const MORPH_MS = 1300;
/** Brief beat so the glass bar reads before crossfade into the solid nav */
const BAR_SETTLE_MS = 200;
const HANDOFF_MS = 560;

const glassSurface =
  "border border-white/45 bg-white/[0.18] shadow-[0_28px_90px_rgba(15,40,25,0.18),inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur-[38px] backdrop-saturate-[1.7]";

type IntroSequenceProps = {
  onMorphComplete: () => void;
  onComplete: () => void;
};

export function IntroSequence({
  onMorphComplete,
  onComplete,
}: IntroSequenceProps) {
  const [stage, setStage] = useState<Stage>("center");
  const morphRef = useRef(onMorphComplete);
  const doneRef = useRef(onComplete);

  useEffect(() => {
    morphRef.current = onMorphComplete;
  }, [onMorphComplete]);

  useEffect(() => {
    doneRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const tMorph = window.setTimeout(() => setStage("morph"), HOLD_MS);
    const tRevealNav = window.setTimeout(() => {
      morphRef.current();
    }, HOLD_MS + MORPH_MS);
    const tHandoff = window.setTimeout(() => {
      setStage("handoff");
    }, HOLD_MS + MORPH_MS + BAR_SETTLE_MS);
    const tDone = window.setTimeout(() => {
      doneRef.current();
    }, HOLD_MS + MORPH_MS + BAR_SETTLE_MS + HANDOFF_MS);

    return () => {
      window.clearTimeout(tMorph);
      window.clearTimeout(tRevealNav);
      window.clearTimeout(tHandoff);
      window.clearTimeout(tDone);
    };
  }, []);

  const isBar = stage === "morph" || stage === "handoff";

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[90] flex justify-center pt-6 sm:pt-8"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.32 }}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(237,233,226,0)_0%,rgba(237,233,226,0.2)_45%,rgba(237,233,226,0.55)_100%)]"
        aria-hidden
      />

      <motion.div
        layout
        className={`relative mx-auto overflow-hidden ${glassSurface} ${
          isBar
            ? "mt-0 h-[78px] w-[min(72rem,calc(100vw-2rem))] rounded-2xl px-4 py-2.5 sm:px-5"
            : "mt-[min(18vh,120px)] w-[min(560px,92vw)] rounded-[28px] px-10 pb-11 pt-11 sm:px-12 sm:pb-12 sm:pt-12"
        }`}
        initial={false}
        animate={{
          opacity: stage === "handoff" ? 0 : 1,
        }}
        transition={{
          opacity: {
            duration: HANDOFF_MS / 1000,
            ease: [0.22, 1, 0.36, 1],
          },
          layout: { duration: MORPH_MS / 1000, ease: [0.22, 1, 0.36, 1] },
        }}
      >
        <motion.div
          className={`flex h-full min-h-0 items-center ${
            isBar
              ? "flex-row justify-start gap-3"
              : "min-h-[300px] flex-col justify-center gap-10 text-center sm:min-h-[360px] sm:gap-12"
          }`}
          layout
        >
          <motion.div layoutId="excelia-brand-logo" className="relative shrink-0 leading-none">
            <Image
              src="/assets/Excelia_Logo.png"
              alt=""
              width={420}
              height={132}
              className={`pointer-events-none w-auto select-none ${isBar ? "h-11 sm:h-[52px]" : "h-40 sm:h-48 md:h-56"}`}
              priority
              aria-hidden
            />
          </motion.div>

          <AnimatePresence mode="wait">
            {!isBar && (
              <motion.div
                key="titles"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.38 }}
                className="flex flex-col items-center gap-8 sm:gap-10"
              >
                <Image
                  src="/assets/Excelia_Name.png"
                  alt="Excelia"
                  width={560}
                  height={112}
                  className="h-[clamp(7rem,18vw,11rem)] w-auto sm:h-[clamp(8rem,20vw,13rem)]"
                  priority
                />
                <p className="max-w-xl px-2 font-[family-name:var(--font-instrument-serif)] text-[clamp(1.65rem,4.5vw,2.75rem)] italic leading-snug text-[var(--excelia-forest)]">
                  We grow Carribbean Roots
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-[0.55] mix-blend-soft-light"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.65), transparent 55%), radial-gradient(ellipse at 70% 80%, rgba(150,73,45,0.12), transparent 50%)",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
