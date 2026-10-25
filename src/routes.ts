import type { RouteObject } from "react-router";
import { RootLayout } from "./components/RootLayout.tsx";
import { ErrorPage } from "./pages/ErrorPage.tsx";
import { LandingPage } from "./pages/LandingPage.tsx";
import { NotFoundPage } from "./pages/NotFoundPage.tsx";

/**
 * The app's route tree. Kept apart from the router itself so tests can
 * mount the same routes in a memory router.
 */
export const routes: RouteObject[] = [
  {
    path: "/",
    Component: RootLayout,
    ErrorBoundary: ErrorPage,
    children: [
      { index: true, Component: LandingPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
];
