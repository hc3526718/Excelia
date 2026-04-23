"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Stage = "center" | "morph" | "handoff";

const HOLD_MS = 2200;
const MORPH_MS = 1300;
const BAR_SETTLE_MS = 200;
const HANDOFF_MS = 560;

const panelBase =
  "rounded-2xl border border-black/[0.06] bg-white shadow-[0_12px_40px_rgba(45,77,54,0.12)]";

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
      className="pointer-events-none fixed inset-0 z-[19900] flex justify-center pt-3 sm:pt-4"
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
        className={`relative mx-auto overflow-hidden ${panelBase} ${
          isBar
            ? "mt-0 h-[78px] w-[min(72rem,calc(100vw-2rem))] px-4 py-2 sm:px-5"
            : "mt-[min(2vh,16px)] w-[min(300px,88vw)] max-h-[min(34svh,260px)] max-w-none px-3 pb-2.5 pt-2.5 sm:max-h-[min(38svh,300px)] sm:px-4 sm:pb-3 sm:pt-3"
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
              ? "flex-row justify-start gap-2"
              : "flex-col justify-center gap-1 text-center sm:gap-1.5"
          }`}
          layout={false}
        >
          <motion.div
            className="relative shrink-0 leading-none"
            animate={{ opacity: isBar ? 0 : 1 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/assets/Excelia_Logo.png"
              alt=""
              width={520}
              height={160}
              className={`pointer-events-none w-auto select-none ${isBar ? "h-11 sm:h-12" : "h-[clamp(2.65rem,11vw,4rem)] sm:h-[clamp(3rem,10vw,4.75rem)]"}`}
              priority
              aria-hidden
            />
          </motion.div>

          <AnimatePresence mode="wait">
            {!isBar && (
              <motion.div
                key="titles"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.28 }}
                className="flex flex-col items-center gap-1 sm:gap-1.5"
              >
                <Image
                  src="/assets/Excelia_Name.png"
                  alt="Excelia"
                  width={640}
                  height={128}
                  className="h-[clamp(2rem,8vw,3.25rem)] w-auto sm:h-[clamp(2.35rem,7vw,4rem)]"
                  priority
                />
                <p className="max-w-lg px-1 font-[family-name:var(--font-instrument-serif)] text-[clamp(0.8rem,2.4vw,1.2rem)] italic leading-snug text-[var(--excelia-forest)] sm:text-[clamp(0.95rem,2.8vw,1.35rem)]">
                  We grow Caribbean Roots
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
