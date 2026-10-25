import { useEffect } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router";
import { AppShell } from "../components/AppShell.tsx";
import { ButtonLink } from "../components/ButtonLink.tsx";
import { ConditionHero } from "../components/ConditionHero.tsx";
import { NotFoundPage } from "./NotFoundPage.tsx";
import styles from "./ErrorPage.module.css";

/**
 * Root error boundary: replaces the page when rendering (or, later, loading
 * data) throws, instead of leaving a blank screen.
 */
export function ErrorPage() {
  const error = useRouteError();
  const isNotFound = isRouteErrorResponse(error) && error.status === 404;

  // Reporting is a side effect, so it runs after render, once per error.
  // TEMPORARY: console only. In production this goes to error monitoring
  // (e.g. Sentry) so we learn about crashes users don't report.
  useEffect(() => {
    if (!isNotFound) {
      console.error(error);
    }
  }, [error, isNotFound]);

  // A 404 thrown on purpose (e.g. a future loader that finds no ship) is not
  // a failure; show the normal not-found page.
  if (isNotFound) {
    return <NotFoundPage />;
  }

  return (
    <AppShell alert="red">
      <title>Error · HomeShip</title>
      <ConditionHero
        condition="System failure"
        message="Something went wrong on our side. Returning to base restarts the app."
      >
        {/* reloadDocument: a full page load, so the restart also clears
            whatever state caused the crash. */}
        <ButtonLink variant="primary" to="/" reloadDocument>
          Return to base
        </ButtonLink>
      </ConditionHero>

      {/* Details only in development: in production they can leak
          internals and mean nothing to users. */}
      {import.meta.env.DEV && error instanceof Error && (
        <pre className={styles.details}>{error.stack ?? error.message}</pre>
      )}
    </AppShell>
  );
}
