"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ExceliaWordmark } from "@/components/brand/ExceliaWordmark";

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
      className="pointer-events-none fixed inset-0 z-[19900] flex min-h-0 items-center justify-center px-3"
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
        className={`relative mx-auto my-auto overflow-hidden ${panelBase} ${
          isBar
            ? "mt-0 h-[78px] w-[min(72rem,calc(100vw-2rem))] px-4 py-2 sm:px-5"
            : "w-[min(560px,96vw)] max-h-[min(78svh,720px)] max-w-none px-6 pb-14 pt-4 sm:w-[min(620px,94vw)] sm:max-h-[min(82svh,760px)] sm:px-10 sm:pb-16 sm:pt-5"
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
              : "flex-col justify-center gap-0 text-center"
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
              className={`pointer-events-none w-auto select-none ${isBar ? "h-11 sm:h-12" : "h-[clamp(6.9rem,26vw,10.2rem)] sm:h-[clamp(7.5rem,24vw,11.5rem)]"}`}
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
                className="flex flex-col items-center gap-0"
              >
                <ExceliaWordmark
                  priority
                  className="h-[clamp(5.7rem,20vw,8.5rem)] w-auto sm:h-[clamp(6.2rem,18vw,10rem)]"
                />
                <p className="max-w-lg px-1 pt-0.5 font-[family-name:var(--font-instrument-serif)] text-[clamp(1.9rem,5.5vw,2.8rem)] italic leading-[1.15] text-[var(--excelia-forest)] sm:pt-1 sm:text-[clamp(2.2rem,5.8vw,3rem)]">
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
