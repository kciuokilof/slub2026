import { describe, expect, it } from "vitest";
import {
  CEREMONY_WINDOW_MS,
  WEDDING_DATE,
  formatElapsedPl,
  getWeddingState,
  pad,
} from "./wedding";

const START = WEDDING_DATE.getTime();

describe("getWeddingState", () => {
  it("is 'before' well ahead of the wedding", () => {
    const now = START - (1000 * 60 * 60 * 24 * 2 + 1000 * 60 * 60 * 3); // 2d 3h before
    const state = getWeddingState(now);
    expect(state.phase).toBe("before");
    expect(state.countdown.days).toBe(2);
    expect(state.countdown.hours).toBe(3);
    expect(state.elapsed).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it("is 'before' one second before the start", () => {
    const state = getWeddingState(START - 1000);
    expect(state.phase).toBe("before");
    expect(state.countdown.seconds).toBe(1);
  });

  it("switches to 'during' exactly at the start moment", () => {
    const state = getWeddingState(START);
    expect(state.phase).toBe("during");
    expect(state.countdown).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
    expect(state.elapsed).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it("stays 'during' 13 minutes in", () => {
    const state = getWeddingState(START + 13 * 60 * 1000);
    expect(state.phase).toBe("during");
    expect(state.elapsed.minutes).toBe(13);
  });

  it("stays 'during' one ms before the window closes", () => {
    const state = getWeddingState(START + CEREMONY_WINDOW_MS - 1);
    expect(state.phase).toBe("during");
  });

  it("switches to 'after' exactly when the window closes", () => {
    const state = getWeddingState(START + CEREMONY_WINDOW_MS);
    expect(state.phase).toBe("after");
    expect(state.elapsed.minutes).toBe(30);
  });

  it("reports elapsed days when long after the wedding", () => {
    const now = START + 1000 * 60 * 60 * 24 * 3 + 1000 * 60 * 60 * 5; // 3d 5h after
    const state = getWeddingState(now);
    expect(state.phase).toBe("after");
    expect(state.elapsed.days).toBe(3);
    expect(state.elapsed.hours).toBe(5);
  });

  it("accepts a Date as well as ms", () => {
    expect(getWeddingState(new Date(START)).phase).toBe("during");
  });

  it("never returns negative durations", () => {
    const s = getWeddingState(START + 5000);
    expect(s.countdown.days).toBeGreaterThanOrEqual(0);
    expect(s.countdown.seconds).toBeGreaterThanOrEqual(0);
  });
});

describe("pad", () => {
  it("zero-pads single digits", () => {
    expect(pad(3)).toBe("03");
    expect(pad(0)).toBe("00");
  });
  it("leaves two digits untouched", () => {
    expect(pad(42)).toBe("42");
  });
});

describe("formatElapsedPl", () => {
  it("uses 'przed chwilą' at zero", () => {
    expect(formatElapsedPl({ days: 0, hours: 0, minutes: 0, seconds: 0 })).toBe(
      "przed chwilą",
    );
  });

  it("handles the '13 minutes ago' example", () => {
    expect(
      formatElapsedPl({ days: 0, hours: 0, minutes: 13, seconds: 20 }),
    ).toBe("13 minut temu");
  });

  it("uses correct Polish plural forms", () => {
    expect(formatElapsedPl({ days: 0, hours: 0, minutes: 1, seconds: 0 })).toBe(
      "1 minutę temu",
    );
    expect(formatElapsedPl({ days: 0, hours: 0, minutes: 2, seconds: 0 })).toBe(
      "2 minuty temu",
    );
    expect(formatElapsedPl({ days: 0, hours: 0, minutes: 5, seconds: 0 })).toBe(
      "5 minut temu",
    );
    expect(formatElapsedPl({ days: 0, hours: 0, minutes: 22, seconds: 0 })).toBe(
      "22 minuty temu",
    );
  });

  it("prefers the largest meaningful unit", () => {
    expect(formatElapsedPl({ days: 2, hours: 3, minutes: 4, seconds: 5 })).toBe(
      "2 dni temu",
    );
    expect(formatElapsedPl({ days: 1, hours: 0, minutes: 0, seconds: 0 })).toBe(
      "1 dzień temu",
    );
    expect(formatElapsedPl({ days: 0, hours: 1, minutes: 30, seconds: 0 })).toBe(
      "1 godzinę temu",
    );
  });
});
