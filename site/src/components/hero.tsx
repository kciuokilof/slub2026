"use client";

import { useEffect, useState } from "react";
import { useNow } from "@/hooks/use-now";
import {
  formatElapsedPl,
  getWeddingState,
  pad,
  type Duration,
} from "@/lib/wedding";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const now = useNow();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Until we have a client-side "now", render the pre-mount fallback.
  const state = now !== null ? getWeddingState(now) : null;

  const fade = (delay: number): React.CSSProperties => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 800ms ease-out ${delay}ms, transform 800ms ease-out ${delay}ms`,
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/hero.png)" }}
      />
      <div className="absolute inset-0 bg-wedding-900/55" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white py-20">
        {(!state || state.phase === "before") && (
          <BeforeContent countdown={state?.countdown} mounted={mounted} fade={fade} />
        )}
        {state?.phase === "during" && (
          <DuringContent elapsed={state.elapsed} fade={fade} />
        )}
        {state?.phase === "after" && (
          <AfterContent elapsed={state.elapsed} fade={fade} />
        )}
      </div>
    </section>
  );
}

type FadeFn = (delay: number) => React.CSSProperties;

/* ---------- BEFORE: countdown to the wedding ---------- */

function BeforeContent({
  countdown,
  mounted,
  fade,
}: {
  countdown: Duration | undefined;
  mounted: boolean;
  fade: FadeFn;
}) {
  const items = [
    { value: countdown?.days ?? 0, label: "dni" },
    { value: countdown?.hours ?? 0, label: "godzin" },
    { value: countdown?.minutes ?? 0, label: "minut" },
    { value: countdown?.seconds ?? 0, label: "sekund" },
  ];

  return (
    <>
      <p
        className="text-sm md:text-3xl font-semibold tracking-[0.3em] uppercase text-white/80"
        style={fade(0)}
      >
        Zapraszamy na nasz ślub
      </p>

      <h1
        className="mt-6 font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal"
        style={fade(150)}
      >
        Jagna &amp; Kamil
      </h1>

      <p
        className="mt-4 text-lg md:text-xl font-light tracking-wide text-white/90"
        style={fade(300)}
      >
        24 października 2026
      </p>

      <p
        className="mt-6 text-base md:text-lg font-light text-white/75 max-w-lg mx-auto leading-relaxed"
        style={fade(400)}
      >
        Nie możemy się doczekać, aż będziemy świętować ten dzień razem z Wami
      </p>

      {/* Countdown */}
      <div className="mt-10 flex justify-center gap-6 md:gap-10" style={fade(550)}>
        {items.map((item) => (
          <div key={item.label} className="flex flex-col items-center">
            <span className="font-serif text-4xl md:text-5xl font-light tabular-nums">
              {countdown ? pad(item.value) : "--"}
            </span>
            <span className="mt-1 text-xs md:text-sm font-light tracking-wider uppercase text-white/60">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-12" style={fade(700)}>
        <a
          href="#rsvp"
          className="inline-flex items-center justify-center rounded-lg bg-silver-400/20 backdrop-blur-sm border border-silver-300/40 px-8 py-3.5 text-sm font-medium text-white tracking-wider uppercase hover:bg-silver-400/30 transition-all duration-300"
        >
          Potwierdź przybycie
        </a>
      </div>
    </>
  );
}

/* ---------- DURING: the ceremony is happening right now ---------- */

function DuringContent({
  elapsed,
  fade,
}: {
  elapsed: Duration;
  fade: FadeFn;
}) {
  return (
    <>
      <p
        className="text-sm md:text-3xl font-semibold tracking-[0.3em] uppercase text-white/80"
        style={fade(0)}
      >
        To dzieje się właśnie teraz
      </p>

      <h1
        className="mt-6 font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal"
        style={fade(150)}
      >
        Jagna &amp; Kamil
      </h1>

      <p
        className="mt-4 text-lg md:text-xl font-light tracking-wide text-white/90"
        style={fade(300)}
      >
        Mówimy sobie „tak” &bull; 24 października 2026
      </p>

      <p
        className="mt-8 text-base md:text-lg font-light text-white/80 max-w-lg mx-auto leading-relaxed"
        style={fade(450)}
      >
        Trwa nasza uroczystość. Dziękujemy, że jesteście z nami w tej wyjątkowej
        chwili — rozpoczęła się {formatElapsedPl(elapsed)}.
      </p>
    </>
  );
}

/* ---------- AFTER: we're married ---------- */

function AfterContent({
  elapsed,
  fade,
}: {
  elapsed: Duration;
  fade: FadeFn;
}) {
  return (
    <>
      <p
        className="text-sm md:text-3xl font-semibold tracking-[0.3em] uppercase text-white/80"
        style={fade(0)}
      >
        Powiedzieliśmy „tak”
      </p>

      <h1
        className="mt-6 font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal"
        style={fade(150)}
      >
        Jagna &amp; Kamil
      </h1>

      <p
        className="mt-4 text-lg md:text-xl font-light tracking-wide text-white/90"
        style={fade(300)}
      >
        Mąż i żona &bull; 24 października 2026
      </p>

      <p
        className="mt-6 text-base md:text-lg font-light text-white/80 max-w-lg mx-auto leading-relaxed"
        style={fade(400)}
      >
        Wzięliśmy ślub {formatElapsedPl(elapsed)}. Z całego serca dziękujemy
        wszystkim, którzy świętowali ten dzień razem z nami.
      </p>
    </>
  );
}
