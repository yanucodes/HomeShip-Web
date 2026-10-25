import { useState } from "react";
import { formatShortDate, formatStardate } from "../lib/stardate.ts";
import styles from "./TopBar.module.css";

/** Brand mark and name on the left, cosmetic stardate on the right. */
export function TopBar() {
  // Reading the clock is a side effect, so it can't happen on every render.
  // A lazy initializer runs once, on mount. The time is frozen after that,
  // which is fine for a date shown on a page that's rarely open overnight.
  const [now] = useState(() => new Date());

  return (
    <header className={styles.topbar}>
      <div className={styles.brand}>
        <div className={styles.mark} aria-hidden="true" />
        <div>
          <h1 className={styles.name}>HomeShip</h1>
          <p className={styles.date}>{formatShortDate(now)}</p>
        </div>
      </div>
      <p className={styles.stardate}>{formatStardate(now)}</p>
    </header>
  );
}
