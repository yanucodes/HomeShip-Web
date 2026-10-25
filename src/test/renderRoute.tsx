import { render } from "@testing-library/react";
import { createMemoryRouter, type RouteObject } from "react-router";
import { RouterProvider } from "react-router/dom";
import { routes } from "../routes.ts";

/**
 * Renders the app at `path` in an in-memory router, so tests exercise the
 * real route tree (links, 404, error boundary) without a browser URL bar.
 *
 * @param path - The URL to start at, e.g. "/".
 * @param routeTree - Routes to mount; defaults to the app's.
 * @returns The router, to inspect `router.state.location` after navigating.
 */
export function renderRoute(path: string, routeTree: RouteObject[] = routes) {
  const router = createMemoryRouter(routeTree, { initialEntries: [path] });
  render(<RouterProvider router={router} />);
  return router;
}
