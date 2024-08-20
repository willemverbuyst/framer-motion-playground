import { toString as _toString, chain, padStart, random, range, } from "lodash";

export function generateRandomNumbers(
  lower: number,
  upper: number,
  numberOfRandomNumbers: number,
) {
  const arr = range(numberOfRandomNumbers);

  return chain(arr)
    .map(() => random(lower, upper))
    .sortBy()
    .map((n) => padStart(_toString(n), 6, "0"))
    .chunk(10)
    .value();
}
