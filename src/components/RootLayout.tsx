import { Outlet, ScrollRestoration } from "react-router";

/**
 * Root route: renders the matched page. Pages bring their own AppShell,
 * because each one sets its own alert state.
 */
export function RootLayout() {
  return (
    <>
      {/* Scroll to top on new pages, restore position on back/forward. */}
      <ScrollRestoration />
      <Outlet />
    </>
  );
}
