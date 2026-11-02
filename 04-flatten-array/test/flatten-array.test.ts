
import { describe, it, expect } from "vitest";
import { flatten } from "../src";

describe("flatten", () => {
  // Basic cases
  it("should flatten an array with one nested level", () => {
    expect(flatten([1, [2, 3], 4])).toEqual([1, 2, 3, 4]);
  });

  it("should flatten an array with multiple nested levels", () => {
    expect(flatten([1, [2, [3, 4]], 5])).toEqual([1, 2, 3, 4, 5]);
  });

  // Different data types
  it("should flatten nested string arrays", () => {
    expect(flatten([[["a"]], ["b", ["c"]]])).toEqual(["a", "b", "c"]);
  });

  it("should handle mixed data types", () => {
    expect(flatten([1, ["hello", [true, null]], undefined])).toEqual([
      1,
      "hello",
      true,
      null,
      undefined,
    ]);
  });

  // Edge cases
  it("should return an empty array for empty input", () => {
    expect(flatten([])).toEqual([]);
  });

  it("should handle empty nested arrays", () => {
    expect(flatten([1, [], [2, [], 3]])).toEqual([1, 2, 3]);
  });

  it("should handle an array containing only empty arrays", () => {
    expect(flatten([[], [[]], [[[]]]])).toEqual([]);
  });

  it("should handle an array without nested arrays", () => {
    expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);
  });

  // Deep nesting
  it("should flatten deeply nested arrays", () => {
    expect(flatten([[[[[1]]]]])).toEqual([1]);
  });

  // Preserve order
  it("should preserve the original element order", () => {
    expect(flatten([[3, 1], [5, [2, 4]], 6])).toEqual([
      3, 1, 5, 2, 4, 6,
    ]);
  });
});
