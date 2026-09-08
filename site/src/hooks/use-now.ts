"use client";

import { useEffect, useState } from "react";

/**
 * Reads an optional ?now= override from the URL so we can preview any wedding
 * phase in the browser without waiting for real time. Accepts:
 *   - an ISO date string, e.g. ?now=2026-10-24T14:13:00+02:00
 *   - epoch milliseconds, e.g. ?now=1793620380000
 * Returns null when absent or unparseable.
 */
function readNowOverride(): number | null {
  if (typeof window === "undefined") return null;
  const raw = new URLSearchParams(window.location.search).get("now");
  if (!raw) return null;

  const trimmed = raw.trim();

  const asNumber = Number(trimmed);
  if (Number.isFinite(asNumber) && trimmed !== "") return asNumber;

  // URLSearchParams decodes "+" as a space, which mangles ISO timezone
  // offsets like "+02:00" into " 02:00". Restore it before parsing.
  const restored = trimmed.replace(/ (\d{2}:\d{2})$/, "+$1");

  const parsed = Date.parse(restored);
  return Number.isNaN(parsed) ? null : parsed;
}

/**
 * Ticking "current time" in ms, updated every `intervalMs`.
 *
 * - Returns null until mounted to avoid hydration mismatches.
 * - If a ?now= override is present, it stays fixed at that value (frozen),
 *   which is exactly what we want for previewing a specific phase.
 */
export function useNow(intervalMs = 1000): number | null {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const override = readNowOverride();
    if (override !== null) {
      setNow(override);
      return;
    }

    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  return now;
}
