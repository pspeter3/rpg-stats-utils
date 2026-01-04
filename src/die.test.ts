import assert from "node:assert/strict";
import test from "node:test";
import { Die } from "./die.ts";

test("d6", () => {
  assert.deepEqual(new Die(6).values().toArray(), [1, 2, 3, 4, 5, 6]);
});

test("Die is iterable", () => {
  const die = new Die(4);
  assert.deepEqual([...die], [1, 2, 3, 4]);
});

test("constructor rejects dice with fewer than one side", () => {
  assert.throws(
    () => new Die(0),
    new Error("A die must have at least one side."),
  );
});
