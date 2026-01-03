import assert from "node:assert/strict";
import test from "node:test";
import { Die } from "./die.ts";

test("d6", () => {
  assert.deepEqual(new Die(6).values().toArray(), [1, 2, 3, 4, 5, 6]);
});
