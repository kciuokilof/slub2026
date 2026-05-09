"use client";

import { useEffect, useState } from "react";

const WEDDING_DATE = new Date("2026-10-24T14:00:00+02:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft {
  const diff = WEDDING_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const fade = (delay: number): React.CSSProperties => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 800ms ease-out ${delay}ms, transform 800ms ease-out ${delay}ms`,
  });

  const countdownItems = [
    { value: timeLeft.days, label: "dni" },
    { value: timeLeft.hours, label: "godzin" },
    { value: timeLeft.minutes, label: "minut" },
    { value: timeLeft.seconds, label: "sekund" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/hero.png)" }}
      />
      <div className="absolute inset-0 bg-wedding-900/55" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white py-20">
        <p
          className="text-sm md:text-base font-light tracking-[0.3em] uppercase text-white/80"
          style={fade(0)}
        >
          Zapraszamy na nasz ślub
        </p>

        <h1
          className="mt-6 font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal"
          style={fade(150)}
        >
          Jagna & Kamil
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
          Nie możemy się doczekać, aż będziemy świętować ten dzień razem z Wami.
        </p>

        {/* Countdown */}
        <div className="mt-10 flex justify-center gap-6 md:gap-10" style={fade(550)}>
          {countdownItems.map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <span className="font-serif text-4xl md:text-5xl font-light tabular-nums">
                {mounted ? String(item.value).padStart(2, "0") : "--"}
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
      </div>
    </section>
  );
}
