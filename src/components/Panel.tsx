import { useId, type ReactNode } from "react";
import styles from "./Panel.module.css";

type PanelProps = {
  /** Small uppercase heading; wrap a word in <b> to highlight it. */
  title: ReactNode;
  children: ReactNode;
};

/** Bordered console panel with a heading strip. */
export function Panel({ title, children }: PanelProps) {
  // Labelling the section by its heading makes it a named landmark for
  // screen readers. useId gives an id that's unique even if the panel
  // is rendered many times.
  const titleId = useId();

  return (
    <section className={styles.panel} aria-labelledby={titleId}>
      <header className={styles.header}>
        <h2 id={titleId} className={styles.title}>
          {title}
        </h2>
      </header>
      <div className={styles.body}>{children}</div>
    </section>
  );
}
