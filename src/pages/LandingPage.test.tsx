import { screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderRoute } from "../test/renderRoute.tsx";

describe("LandingPage", () => {
  it("shows the app name as the page heading", () => {
    renderRoute("/");

    expect(
      screen.getByRole("heading", { level: 1, name: "HomeShip" }),
    ).toBeInTheDocument();
  });

  it("sets the document title", () => {
    renderRoute("/");

    expect(document.title).toBe("HomeShip — your apartment is your spaceship");
  });

  it("links to sign-up and log-in", () => {
    renderRoute("/");
    const account = screen.getByRole("navigation", { name: "Account" });

    expect(
      within(account).getByRole("link", { name: "Sign up" }),
    ).toHaveAttribute("href", "/signup");
    expect(
      within(account).getByRole("link", { name: "Log in" }),
    ).toHaveAttribute("href", "/login");
  });

  it("lists the three features in the about panel", () => {
    renderRoute("/");
    const about = screen.getByRole("region", { name: "About this app" });

    const titles = within(about)
      .getAllByRole("heading", { level: 3 })
      .map((heading) => heading.textContent);
    expect(titles).toEqual([
      "Track every chore",
      "Never run out",
      "Share the mission",
    ]);
  });
});
