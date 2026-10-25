import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { RouteObject } from "react-router";
import { afterEach, describe, expect, it, vi } from "vitest";
import { routes } from "./routes.ts";
import { renderRoute } from "./test/renderRoute.tsx";

/** The app's routes plus one child route whose page throws while rendering. */
function routesWithBrokenPage(): RouteObject[] {
  function BrokenPage(): never {
    throw new Error("Simulated render failure");
  }
  const [root] = routes;
  // Narrows the union: only non-index routes can have children.
  if (!root || root.index) {
    throw new Error("Expected a root layout route");
  }
  return [
    {
      ...root,
      children: [
        ...(root.children ?? []),
        { path: "broken", Component: BrokenPage },
      ],
    },
  ];
}

describe("routing", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("shows the not-found page for an unknown URL", () => {
    renderRoute("/no/such/page");

    expect(screen.getByText("Off course")).toBeInTheDocument();
    expect(document.title).toBe("Page not found · HomeShip");
  });

  it("navigates from the not-found page back to the landing page", async () => {
    const user = userEvent.setup();
    const router = renderRoute("/no/such/page");

    await user.click(screen.getByRole("link", { name: "Return to base" }));

    expect(router.state.location.pathname).toBe("/");
    expect(screen.getByText("All systems nominal")).toBeInTheDocument();
  });

  it("navigates client-side when a landing page link is clicked", async () => {
    const user = userEvent.setup();
    const router = renderRoute("/");

    await user.click(screen.getByRole("link", { name: "Sign up" }));

    expect(router.state.location.pathname).toBe("/signup");
  });

  it("shows the error page when a page throws while rendering", () => {
    // React and the router both log the caught error; keep test output clean.
    vi.spyOn(console, "error").mockImplementation(() => {});
    vi.spyOn(console, "warn").mockImplementation(() => {});

    renderRoute("/broken", routesWithBrokenPage());

    expect(screen.getByText("System failure")).toBeInTheDocument();
    expect(document.title).toBe("Error · HomeShip");
  });
});
