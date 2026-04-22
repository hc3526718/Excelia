"use client";

import { useEffect, useRef } from "react";

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
      video.playbackRate = 1;
      void video.play();
    };

    const onEnded = () => {
      let lastTs = performance.now();

      const reverse = (now: number) => {
        const dt = Math.min((now - lastTs) / 1000, 1 / 24);
        lastTs = now;
        const next = video.currentTime - dt;
        if (next <= 0.03) {
          video.currentTime = 0;
          playForward();
          return;
        }
        video.currentTime = next;
        rafId = requestAnimationFrame(reverse);
      };

      rafId = requestAnimationFrame(reverse);
    };

    video.addEventListener("ended", onEnded);
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
