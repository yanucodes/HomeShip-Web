import { AppShell } from "../components/AppShell.tsx";
import { ButtonLink } from "../components/ButtonLink.tsx";
import { ConditionHero } from "../components/ConditionHero.tsx";
import { Panel } from "../components/Panel.tsx";
import styles from "./LandingPage.module.css";

const FEATURES = [
  {
    tag: "Maintenance",
    title: "Track every chore",
    description:
      "Recurring or one-off tasks with due dates, postpones, and a clear alert state.",
  },
  {
    tag: "Cargo Bay",
    title: "Never run out",
    description: "Keep supplies stocked and get alerted before you hit empty.",
  },
  {
    tag: "Crew",
    title: "Share the mission",
    description:
      "Bring your household aboard and keep the ship green together.",
  },
] as const;

/** Public landing page: what HomeShip is, and the way in. */
export function LandingPage() {
  return (
    <AppShell alert="green">
      <title>HomeShip — your apartment is your spaceship</title>
      <ConditionHero
        condition="All systems nominal"
        message="Register to start your journey"
      >
        {/* TEMPORARY: /signup and /login show the 404 page until their
            own pages land. */}
        <nav className={styles.auth} aria-label="Account">
          <ButtonLink variant="primary" to="/signup">
            Sign up
          </ButtonLink>
          <ButtonLink variant="secondary" to="/login">
            Log in
          </ButtonLink>
        </nav>
      </ConditionHero>

      <div className={styles.panels}>
        <Panel
          title={
            <>
              About this <b>app</b>
            </>
          }
        >
          <p className={styles.lead}>
            <b>Your apartment is your spaceship and you are the crew.</b>
          </p>
          <p className={styles.text}>
            HomeShip turns household chores and shopping into a shared mission.
            Every chore is a system to maintain and every supply is cargo to
            keep stocked. Stay on top of them and your ship runs at{" "}
            <b>green alert</b>, travelling a light-year for every alert-free
            day. Let things slip and the ship escalates to yellow, red, and
            finally autodestruct: a friendly nudge that something needs
            attention.
          </p>
          <p className={styles.text}>
            Invite your housemates as crew, split the work, and watch how far
            your ship has travelled together.
          </p>

          <ul className={styles.features}>
            {FEATURES.map((feature) => (
              <li key={feature.title} className={styles.feature}>
                <p className={styles.featureTag}>{feature.tag}</p>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureText}>{feature.description}</p>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </AppShell>
  );
}
