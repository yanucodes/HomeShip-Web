import { describe, expect, it } from "vitest";
import { formatShortDate, formatStardate } from "./stardate.ts";

describe("formatShortDate", () => {
  it("formats the local date as weekday, month and day", () => {
    // Local-time constructor, so the result doesn't depend on the machine's zone.
    expect(formatShortDate(new Date(2026, 5, 15, 12))).toBe("Mon Jun 15");
  });
});

describe("formatStardate", () => {
  it("starts the year at day 001, tenth 0", () => {
    expect(formatStardate(new Date("2026-01-01T00:00:00Z"))).toBe(
      "TJD · 26001.0",
    );
  });

  it("counts the tenth of the UTC day", () => {
    expect(formatStardate(new Date("2026-10-23T12:00:00Z"))).toBe(
      "TJD · 26296.5",
    );
  });

  it("ends a leap year at day 366, tenth 9", () => {
    expect(formatStardate(new Date("2028-12-31T23:59:00Z"))).toBe(
      "TJD · 28366.9",
    );
  });
});
