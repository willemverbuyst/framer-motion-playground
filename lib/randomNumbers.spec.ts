import _ from "lodash"; // Importing lodash for comparison purposes
import { describe, expect, test } from "vitest";
import { generateRandomNumbers } from "./randomNumbers";

describe("generateRandomNumbers", () => {
  test("should generate the correct number of random numbers", () => {
    const lower = 1;
    const upper = 100;
    const numberOfRandomNumbers = 50;

    const result = generateRandomNumbers(lower, upper, numberOfRandomNumbers);

    // Flatten the result to count all numbers
    const flattenedResult = _.flatten(result);

    expect(flattenedResult.length).toBe(numberOfRandomNumbers);
  });

  test("should generate numbers within the specified range", () => {
    const lower = 1;
    const upper = 100;
    const numberOfRandomNumbers = 50;

    const result = generateRandomNumbers(lower, upper, numberOfRandomNumbers);

    // Flatten the result and check that each number is within range
    const flattenedResult = _.flatten(result);

    for (const number of flattenedResult) {
      const numericValue = Number.parseInt(number, 10);
      expect(numericValue).toBeGreaterThanOrEqual(lower);
      expect(numericValue).toBeLessThanOrEqual(upper);
    }
  });

  test("should return numbers as strings padded with zeros to a length of 6", () => {
    const lower = 1;
    const upper = 999999;
    const numberOfRandomNumbers = 50;

    const result = generateRandomNumbers(lower, upper, numberOfRandomNumbers);

    const flattenedResult = _.flatten(result);

    for (const number of flattenedResult) {
      expect(number).toHaveLength(6);
      expect(number).toMatch(/^\d{6}$/); // Should be 6 digits long
    }
  });

  test("should return sorted numbers", () => {
    const lower = 1;
    const upper = 999999;
    const numberOfRandomNumbers = 50;

    const result = generateRandomNumbers(lower, upper, numberOfRandomNumbers);

    const flattenedResult = _.flatten(result);
    const sortedResult = _.sortBy(flattenedResult);

    expect(flattenedResult).toEqual(sortedResult);
  });

  test("should return a chunked array with sub-arrays of length 10", () => {
    const lower = 1;
    const upper = 100;
    const numberOfRandomNumbers = 50;

    const result = generateRandomNumbers(lower, upper, numberOfRandomNumbers);

    // Check that each chunk has a length of 10, except possibly the last one
    result.forEach((chunk, index) => {
      if (index < Math.floor(numberOfRandomNumbers / 10)) {
        expect(chunk).toHaveLength(10);
      } else {
        // The last chunk could have fewer elements
        expect(chunk.length).toBeLessThanOrEqual(10);
      }
    });
  });
});
