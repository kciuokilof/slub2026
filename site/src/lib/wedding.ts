export const WEDDING_DATE = new Date("2026-10-24T14:00:00+02:00");

/**
 * How long after the wedding start we keep showing the "happening now" state.
 * After this window elapses we switch to the "after / we're married" state.
 */
export const CEREMONY_WINDOW_MS = 30 * 60 * 1000; // 30 minutes

export type WeddingPhase = "before" | "during" | "after";

export interface Duration {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface WeddingState {
  phase: WeddingPhase;
  /** Time remaining until the wedding. Zero once phase !== "before". */
  countdown: Duration;
  /** Time elapsed since the wedding started. Zero while phase === "before". */
  elapsed: Duration;
}

function toDuration(diffMs: number): Duration {
  const clamped = Math.max(0, diffMs);
  return {
    days: Math.floor(clamped / (1000 * 60 * 60 * 24)),
    hours: Math.floor((clamped / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((clamped / (1000 * 60)) % 60),
    seconds: Math.floor((clamped / 1000) % 60),
  };
}

const ZERO: Duration = { days: 0, hours: 0, minutes: 0, seconds: 0 };

/**
 * Pure function computing the wedding state for a given "now".
 * Kept side-effect free so it is trivially unit-testable.
 */
export function getWeddingState(
  now: number | Date = Date.now(),
  weddingDate: Date = WEDDING_DATE,
): WeddingState {
  const nowMs = now instanceof Date ? now.getTime() : now;
  const startMs = weddingDate.getTime();
  const diff = startMs - nowMs;

  if (diff > 0) {
    return { phase: "before", countdown: toDuration(diff), elapsed: ZERO };
  }

  const sinceStart = nowMs - startMs;
  if (sinceStart < CEREMONY_WINDOW_MS) {
    return { phase: "during", countdown: ZERO, elapsed: toDuration(sinceStart) };
  }

  return { phase: "after", countdown: ZERO, elapsed: toDuration(sinceStart) };
}

/** Two-digit zero padding, e.g. 3 -> "03". */
export function pad(value: number): string {
  return String(value).padStart(2, "0");
}

/**
 * Human, Polish "X temu" phrasing picking the largest meaningful unit.
 * e.g. { minutes: 13 } -> "13 minut temu".
 */
export function formatElapsedPl(elapsed: Duration): string {
  const plural = (
    n: number,
    one: string,
    few: string,
    many: string,
  ): string => {
    const mod10 = n % 10;
    const mod100 = n % 100;
    if (n === 1) return one;
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return few;
    return many;
  };

  if (elapsed.days > 0) {
    return `${elapsed.days} ${plural(elapsed.days, "dzień", "dni", "dni")} temu`;
  }
  if (elapsed.hours > 0) {
    return `${elapsed.hours} ${plural(elapsed.hours, "godzinę", "godziny", "godzin")} temu`;
  }
  if (elapsed.minutes > 0) {
    return `${elapsed.minutes} ${plural(elapsed.minutes, "minutę", "minuty", "minut")} temu`;
  }
  if (elapsed.seconds > 0) {
    return `${elapsed.seconds} ${plural(elapsed.seconds, "sekundę", "sekundy", "sekund")} temu`;
  }
  return "przed chwilą";
}
