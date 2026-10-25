import { Link, type LinkProps } from "react-router";
import styles from "./ButtonLink.module.css";

type ButtonLinkProps = LinkProps & {
  /** primary = filled in the accent colour; secondary = outlined. */
  variant: "primary" | "secondary";
};

/**
 * A router link styled as a button. It navigates, so it stays an <a>
 * (screen readers announce "link", middle-click opens a new tab).
 */
export function ButtonLink({ variant, className, ...props }: ButtonLinkProps) {
  const classes = [styles.button, styles[variant], className].filter(Boolean);
  return <Link className={classes.join(" ")} {...props} />;
}
