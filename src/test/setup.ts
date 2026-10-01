import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// Testing Library only auto-cleans up when test globals are enabled; we keep
// them off (explicit imports), so unmount rendered components after each test.
afterEach(() => {
  cleanup();
});
