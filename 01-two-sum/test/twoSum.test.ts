
import { describe, it, expect } from "vitest";
import { twoSum } from "../src/twoSum";

describe("twoSum", () => {
  // Basic cases
  it("should return [1, 3] when two numbers add up to target", () => {
    expect(twoSum([3, 7, 5, 2], 9)).toEqual([1, 3]);
  });

  it("should return [1, 2] when numbers are not adjacent", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  // Duplicate numbers
  it("should handle duplicate numbers", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  // Negative numbers
  it("should handle negative numbers", () => {
    expect(twoSum([-1, 8, 4, 2], 6)).toEqual([2, 3]);
  });

  // Edge cases
  it("should return empty array when no solution exists", () => {
    expect(twoSum([1, 2, 3], 10)).toEqual([]);
  });

  it("should return empty array when input is empty", () => {
    expect(twoSum([], 5)).toEqual([]);
  });

  it("should handle zero values", () => {
    expect(twoSum([0, 4, 3, 0], 0)).toEqual([0, 3]);
  });

  it("should handle negative target", () => {
    expect(twoSum([-3, -4, -2, -1], -7)).toEqual([0, 1]);
  });

  // Same index validation
  it("should not use the same element twice", () => {
    expect(twoSum([3], 6)).toEqual([]);
  });
});
