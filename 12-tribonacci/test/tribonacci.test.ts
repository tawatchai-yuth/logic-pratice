import { describe, it, expect } from "vitest";
import { f } from "../src";

describe("f", () => {
  // Basic cases
  it("should generate the sequence from three starting values", () => {
    expect(f([1, 3, 5], 5)).toEqual([1, 3, 5, 9, 17]);
  });

  it("should return the signature when n equals signature length", () => {
    expect(f([2, 2, 2], 3)).toEqual([2, 2, 2]);
  });

  it("should generate one additional value", () => {
    expect(f([10, 10, 10], 4)).toEqual([10, 10, 10, 30]);
  });

  it("should generate multiple additional values", () => {
    expect(f([1, 1, 1], 6)).toEqual([1, 1, 1, 3, 5, 9]);
  });

  // Edge cases: n
  it("should return an empty array when n is zero", () => {
    expect(f([1, 3, 5], 0)).toEqual([]);
  });

  it("should return only the first value when n is one", () => {
    expect(f([1, 3, 5], 1)).toEqual([1]);
  });

  it("should return the first two values when n is two", () => {
    expect(f([1, 3, 5], 2)).toEqual([1, 3]);
  });

  it("should return an empty array when signature is empty and n is zero", () => {
    expect(f([], 0)).toEqual([]);
  });

  // Different starting values
  it("should handle zero starting values", () => {
    expect(f([0, 0, 0], 6)).toEqual([0, 0, 0, 0, 0, 0]);
  });

  it("should handle negative starting values", () => {
    expect(f([-1, -2, -3], 5)).toEqual([-1, -2, -3, -6, -11]);
  });

  it("should handle mixed positive and negative values", () => {
    expect(f([1, -1, 2], 5)).toEqual([1, -1, 2, 2, 3]);
  });

  // Input immutability
  it("should not modify the original signature array", () => {
    const signature = [1, 3, 5];

    f(signature, 5);

    expect(signature).toEqual([1, 3, 5]);
  });

  // Invalid inputs
  it("should throw an error when signature contains more than three values", () => {
    expect(() => f([1, 2, 3, 4], 5)).toThrow(
      "signature must contain between 0 and 3 values",
    );
  });

  it("should throw an error when n is negative", () => {
    expect(() => f([1, 3, 5], -1)).toThrow("n must be a non-negative integer");
  });

  it("should throw an error when n is a decimal number", () => {
    expect(() => f([1, 3, 5], 2.5)).toThrow("n must be a non-negative integer");
  });

  it("should throw an error when n is NaN", () => {
    expect(() => f([1, 3, 5], NaN)).toThrow("n must be a non-negative integer");
  });

  // Insufficient starting values
  it("should throw an error when signature has fewer than three values and more values are required", () => {
    expect(() => f([1, 2], 3)).toThrow(
      "At least 3 starting values are required to continue",
    );
  });

  it("should throw an error when signature is empty and n is greater than zero", () => {
    expect(() => f([], 1)).toThrow(
      "At least 3 starting values are required to continue",
    );
  });
});
