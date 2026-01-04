# Repository Guidelines

## Project Structure & Module Organization

Code lives in `src/`, authored in strict TypeScript with ECMAScript modules enabled through `type: module`. Domain logic sits in single-purpose files such as `src/die.ts`, and related tests stay co-located as `*.test.ts` (see `src/die.test.ts`) so that utilities and coverage evolve together. There is no separate assets directory; documentation sits in the repo root alongside `README.md` and this guide. Keep new helpers small and exported via named exports so consumers can tree-shake effectively.

## Build, Test, and Development Commands

All lifecycle commands run through npm scripts backed by Wireit caching. Use `npm run test` for the full pre-submit suite (format, spec, types). Run `npm run test:spec` to execute Node’s built-in test runner (`node --test`) against `src/**/*.test.ts`. Validate typings with `npm run test:types`, which shells out to `tsc --noEmit`. Formatting checks are provided via `npm run test:format`, and `npm run fix` applies Prettier with caching across Markdown, `.github`, and `src/**/*.ts`.

## Coding Style & Naming Conventions

Prettier (plus `prettier-plugin-organize-imports`) controls layout, so defer to `npm run fix` rather than manual tweaks. Files, variables, and functions favor lower camelCase; new modules should use short filenames with kebab case (e.g., `dice-bag.ts`). TypeScript is configured with `strict`, `exactOptionalPropertyTypes`, and other safety flags in `tsconfig.json`, so add explicit return types and avoid implicit anys. Keep imports sorted, prefer const assertions for immutable data, and rely on two-space indentation and 100-character lines as provided by Prettier defaults.

## Testing Guidelines

Author tests with Node’s test runner by placing cases in `*.test.ts`. Name test blocks after observable behavior (`test("roll produces values within range", ...)`) and stub randomness deterministically when possible. The repo does not enforce numeric coverage, but aim for meaningful assertions around probability math and edge cases (e.g., zero-faced dice). Always run `npm run test` before sending a PR to ensure specs, formatting, and type checks stay in sync.
