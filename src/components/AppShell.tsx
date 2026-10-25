import type { ReactNode } from "react";
import type { AlertState } from "../domain/alertState.ts";
import { TopBar } from "./TopBar.tsx";
import styles from "./AppShell.module.css";

type AppShellProps = {
  /** Themes everything inside: sets data-alert, which drives --accent. */
  alert: AlertState;
  children: ReactNode;
};

/** Page frame: starfield background, top bar, centred content column. */
export function AppShell({ alert, children }: AppShellProps) {
  return (
    <div data-alert={alert}>
      <div className={styles.stars} aria-hidden="true" />
      <div className={styles.shell}>
        <TopBar />
        <main>{children}</main>
      </div>
    </div>
  );
}
