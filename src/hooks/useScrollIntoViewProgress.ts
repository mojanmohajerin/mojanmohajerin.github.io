"use client";

import { RefObject, useEffect, useState } from "react";

const clamp = (value: number) => Math.min(Math.max(value, 0), 1);

export const useScrollIntoViewProgress = (
  ref: RefObject<HTMLElement | null>,
) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationFrameId: number | null = null;

    const updateProgress = () => {
      const element = ref.current;

      if (!element) {
        return;
      }

      const rect = element.getBoundingClientRect();
      const scrollDistance = window.innerHeight + rect.height;
      const nextProgress = clamp((window.innerHeight - rect.top) / scrollDistance);

      setProgress(nextProgress);
    };

    const handleScroll = () => {
      if (animationFrameId !== null) {
        return;
      }

      animationFrameId = window.requestAnimationFrame(() => {
        updateProgress();
        animationFrameId = null;
      });
    };

    updateProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }

      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [ref]);

  return progress;
};
