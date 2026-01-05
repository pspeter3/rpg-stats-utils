# Repository Guidelines

## Project Structure & Module Organization

- Keep all code in `src/` with ECMAScript modules (`type: module`).
- Write single-purpose modules (e.g., `src/die.ts`) and co-locate `*.test.ts`.
- Store docs in the repo root; no dedicated assets directory.
- Export helpers via named exports to keep tree-shaking efficient.

## Build, Test, and Development Commands

- Run everything through npm scripts backed by Wireit.
- `npm run test` runs format, spec, and types.
- `npm run test:spec` runs Node’s built-in test runner over `src/**/*.test.ts`.
- `npm run test:types` shells out to `tsc --noEmit`.
- `npm run test:format` checks Prettier; `npm run fix` applies formatting.

## Coding Style & Naming Conventions

- Lean on Prettier + `prettier-plugin-organize-imports`; avoid manual formatting.
- Use lower camelCase names; new files use kebab case (e.g., `dice-bag.ts`).
- Follow strict TypeScript settings; add explicit return types and avoid implicit anys.
- Keep imports sorted, use const assertions for immutable data, and stick to two-space indentation.

## Testing Guidelines

- Place Node test runner suites in `*.test.ts`.
- Name tests after observable behavior and stub randomness deterministically.
- Cover probability logic and edge cases such as zero-faced dice.
- Always run `npm run test` before sending a PR.
