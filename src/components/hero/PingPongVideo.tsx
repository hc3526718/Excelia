"use client";

import { useEffect, useRef } from "react";

const PLAYBACK_RATE = 0.75;

type PingPongVideoProps = {
  src: string;
  className?: string;
};

export function PingPongVideo({ src, className }: PingPongVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let rafId = 0;

    const playForward = () => {
      video.playbackRate = PLAYBACK_RATE;
      void video.play();
    };

    const onEnded = () => {
      let lastTs = performance.now();

      const stepReverse = (now: number) => {
        const dt = Math.min((now - lastTs) / 1000, 1 / 30);
        lastTs = now;
        const step = dt * PLAYBACK_RATE;
        const next = video.currentTime - step;

        if (next <= 0.03) {
          video.currentTime = 0;
          playForward();
          return;
        }

        video.currentTime = next;
        rafId = requestAnimationFrame(stepReverse);
      };

      rafId = requestAnimationFrame(stepReverse);
    };

    video.addEventListener("ended", onEnded);
    video.playbackRate = PLAYBACK_RATE;
    void video.play();

    return () => {
      cancelAnimationFrame(rafId);
      video.removeEventListener("ended", onEnded);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      src={src}
      muted
      autoPlay
      playsInline
      preload="auto"
      aria-hidden
    />
  );
}
