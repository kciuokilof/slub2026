"use client";

import { useScrollReveal, revealStyle } from "@/hooks/use-scroll-reveal";

export function Footer() {
  const { ref, visible } = useScrollReveal(0.3);

  return (
    <footer className="py-10 text-center border-t border-wedding-200" ref={ref}>
      <p
        className="font-script text-2xl font-light text-wedding-700 tracking-wide"
        style={revealStyle(visible, 0, { duration: 800 })}
      >
        Jagna & Kamil · 24.10.2026
      </p>
    </footer>
  );
}
