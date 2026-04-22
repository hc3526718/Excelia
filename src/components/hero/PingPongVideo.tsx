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
    let reversing = false;
    let lastTs = performance.now();

    const playForward = () => {
      reversing = false;
      video.playbackRate = PLAYBACK_RATE;
      void video.play();
    };

    const stepReverse = (now: number) => {
      if (!reversing) return;
      const dt = Math.min((now - lastTs) / 1000, 1 / 30);
      lastTs = now;
      const step = dt * PLAYBACK_RATE;
      const next = video.currentTime - step;

      if (next <= 0.02) {
        video.currentTime = 0;
        reversing = false;
        playForward();
        return;
      }

      video.currentTime = next;
      rafId = requestAnimationFrame(stepReverse);
    };

    const beginReverse = () => {
      if (reversing) return;
      reversing = true;
      video.pause();
      lastTs = performance.now();
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(stepReverse);
    };

    const onTimeUpdate = () => {
      if (reversing) return;
      const d = video.duration;
      if (!Number.isFinite(d) || d <= 0) return;
      if (video.currentTime >= d - 0.05) {
        beginReverse();
      }
    };

    const onEnded = () => {
      if (!reversing) beginReverse();
    };

    video.playbackRate = PLAYBACK_RATE;
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("ended", onEnded);
    void video.play();

    return () => {
      cancelAnimationFrame(rafId);
      video.removeEventListener("timeupdate", onTimeUpdate);
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
