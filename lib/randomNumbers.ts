import _ from "lodash";

export function generateRandomNumbers(
	lower: number,
	upper: number,
	numberOfRandomNumbers: number,
) {
	const arr = _.range(numberOfRandomNumbers);

	return _(arr)
		.map(() => _.random(lower, upper))
		.sortBy()
		.map((n) => _.padStart(_.toString(n), 6, "0"))
		.chunk(10)
		.value();
}
