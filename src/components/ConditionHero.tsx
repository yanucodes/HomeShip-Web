import type { ReactNode } from "react";
import styles from "./ConditionHero.module.css";

type ConditionHeroProps = {
  /** Headline condition, e.g. "All systems nominal". */
  condition: string;
  message: string;
  /** Right-hand side of the hero, e.g. actions. */
  children: ReactNode;
};

/**
 * Ship-condition banner: a lamp in the current accent colour, the condition
 * and a message, with free content on the right. The lamp pulses faster as
 * the alert state (set by an ancestor's data-alert) worsens.
 */
export function ConditionHero({
  condition,
  message,
  children,
}: ConditionHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.readout}>
        <div className={styles.lamp} aria-hidden="true" />
        <div>
          <p className={styles.tag}>Ship condition</p>
          <p className={styles.condition}>{condition}</p>
          <p className={styles.message}>{message}</p>
        </div>
      </div>
      <div className={styles.divider} aria-hidden="true" />
      <div className={styles.side}>{children}</div>
    </section>
  );
}
