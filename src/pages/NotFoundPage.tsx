import { AppShell } from "../components/AppShell.tsx";
import { ButtonLink } from "../components/ButtonLink.tsx";
import { ConditionHero } from "../components/ConditionHero.tsx";

/** Shown for any URL that matches no route. */
export function NotFoundPage() {
  return (
    <AppShell alert="yellow">
      <title>Page not found · HomeShip</title>
      <ConditionHero
        condition="Off course"
        message="There's nothing at this address. The link may be wrong, or the page has moved."
      >
        <ButtonLink variant="primary" to="/">
          Return to base
        </ButtonLink>
      </ConditionHero>
    </AppShell>
  );
}
