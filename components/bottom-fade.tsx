"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useSwipe } from "@/context/theme-swipe-context";

const REVEAL_DISTANCE = 200;
const FADE_HEIGHT = 50;
const FADE_OPACITY = 0.6;

export default function BottomFade() {
  const { isSwiping } = useSwipe();
  const [revealOpacity, setRevealOpacity] = useState(1);
  const baselineScroll = useRef<number | null>(null);

  useEffect(() => {
    if (isSwiping) {
      setRevealOpacity(0);
      baselineScroll.current = null;
      return;
    }

    baselineScroll.current = window.scrollY;
    setRevealOpacity(0);

    function handleScroll() {
      if (baselineScroll.current === null) return;
      const delta = Math.abs(window.scrollY - baselineScroll.current);
      setRevealOpacity(Math.min(delta / REVEAL_DISTANCE, 1));
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSwiping]);

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 bottom-0 z-40 pointer-events-none"
      animate={isSwiping ? { y: "100%" } : { y: "0%" }}
      initial={false}
      transition={{ duration: 0.3, ease: isSwiping ? "easeIn" : "easeOut" }}
      style={{
        height: FADE_HEIGHT,
        opacity: revealOpacity * FADE_OPACITY,
        transition: "opacity 150ms linear",
        background:
          "linear-gradient(to top, var(--background) 0%, transparent 100%)",
      }}
    />
  );
}