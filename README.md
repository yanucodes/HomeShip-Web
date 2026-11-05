# HomeShip Web

React client for HomeShip, an app that turns shared household chores into a spaceship journey: your home is the ship, your household is the crew, and neglected chores and supplies raise the alert level.

> **Work in progress.** Only the public landing page exists so far, and the client doesn't talk to the API yet. The sign-up and login links lead to the 404 page until those pages are built.

## Status

- **Done:** landing page, client-side routing, 404 and error pages, CI
- **Next:** API client, then sign-up and login
- **Later:** the ship console (tasks, supplies, crew)

## Tech stack

Vite, React, TypeScript (strict), React Router, CSS Modules, Vitest, React Testing Library, ESLint, Prettier.

## Getting started

Requires the Node version in `.nvmrc`.

```bash
npm ci        # install exactly the lockfile
npm run dev   # dev server on http://localhost:5173
```

## Checks

CI runs all of these on every pull request and on every push to `main`:

```bash
npm run format:check
npm run lint
npm run typecheck
npm run test:run
npm run build
```

## Related repositories

- [HomeShip](https://github.com/yanucodes/HomeShip): the backend API (FastAPI)
- [HomeShip-Spec](https://github.com/yanucodes/HomeShip-Spec): the behavior spec shared by all implementations
