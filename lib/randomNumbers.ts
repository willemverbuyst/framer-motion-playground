import {
	chain as _chain,
	padStart as _padStart,
	random as _random,
	range as _range,
	toString as _toString,
} from "lodash";

export function generateRandomNumbers(
	lower: number,
	upper: number,
	numberOfRandomNumbers: number,
) {
	const arr = _range(numberOfRandomNumbers);

	return _chain(arr)
		.map(() => _random(lower, upper))
		.sortBy()
		.map((n) => _padStart(_toString(n), 6, "0"))
		.chunk(10)
		.value();
}
