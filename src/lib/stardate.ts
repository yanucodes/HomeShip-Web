const MS_PER_DAY = 86_400_000;
const MINUTES_PER_TENTH_OF_DAY = 144;

const shortDate = new Intl.DateTimeFormat("en-US", {
  weekday: "short",
  month: "short",
  day: "numeric",
});

/** Local date without punctuation, e.g. "Mon Jun 15". */
export function formatShortDate(date: Date): string {
  return shortDate
    .formatToParts(date)
    .filter((part) => part.type !== "literal")
    .map((part) => part.value)
    .join(" ");
}

/**
 * Cosmetic stardate, e.g. "TJD · 26296.5": two-digit UTC year, day of the
 * year, and which tenth of the UTC day it is.
 */
export function formatStardate(date: Date): string {
  const year = date.getUTCFullYear();
  const dayOfYear = Math.floor(
    (date.getTime() - Date.UTC(year, 0, 0)) / MS_PER_DAY,
  );
  const minutesToday = date.getUTCHours() * 60 + date.getUTCMinutes();
  const tenthOfDay = Math.floor(minutesToday / MINUTES_PER_TENTH_OF_DAY);

  const yy = String(year % 100).padStart(2, "0");
  const ddd = String(dayOfYear).padStart(3, "0");
  return `TJD · ${yy}${ddd}.${tenthOfDay}`;
}
