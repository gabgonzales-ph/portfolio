"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MIN_HEIGHT = 8; // px, at scroll 0
const MAX_HEIGHT = 50; // px, at full threshold
const MAX_OPACITY = 0.6;

export default function TopScrollBlur() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { height: MIN_HEIGHT },
        {
          height: MAX_HEIGHT,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "5px top",
            end: "100px top",
            scrub: 1,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="fixed inset-x-0 top-0 z-40 pointer-events-none"
      style={{
        height: MIN_HEIGHT,
        opacity: MAX_OPACITY,
        background:
          "linear-gradient(to bottom, var(--background) 0%, transparent 100%)",
      }}
    />
  );
}