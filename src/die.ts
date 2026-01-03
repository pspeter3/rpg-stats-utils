export class Die {
  readonly sides: number;

  constructor(sides: number) {
    if (sides < 1) {
      throw new Error("A die must have at least one side.");
    }
    this.sides = sides;
  }

  *values(): Generator<number> {
    for (let i = 1; i <= this.sides; i++) {
      yield i;
    }
  }

  [Symbol.iterator](): Iterator<number> {
    return this.values();
  }
}
