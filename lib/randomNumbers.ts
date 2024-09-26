import {
	toString as _toString,
	chunk,
	map,
	padStart,
	random,
	range,
	sortBy,
} from "lodash";

export function generateRandomNumbers(
	lower: number,
	upper: number,
	numberOfRandomNumbers: number,
) {
	const arr = range(numberOfRandomNumbers);
	const randomNumbers = map(arr, () => random(lower, upper));
	const randomNumbersSorted = sortBy(randomNumbers);
	const randomNumbersPadded = map(randomNumbersSorted, (n) =>
		padStart(_toString(n), 6, "0"),
	);
	const randomNumbersChunked = chunk(randomNumbersPadded, 10);

	return randomNumbersChunked;
}
