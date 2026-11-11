
import { describe, it, expect } from "vitest";
import { sortDigitsDescending } from "../src";

describe("sortDigitsDescending", () => {
  // Basic cases
  it("should sort digits in descending order", () => {
    expect(sortDigitsDescending(3008)).toBe(8300);
  });

  it("should sort digits of a four-digit number", () => {
    expect(sortDigitsDescending(1989)).toBe(9981);
  });

  it("should sort digits of a number with all different digits", () => {
    expect(sortDigitsDescending(2679)).toBe(9762);
  });

  it("should sort digits of another number correctly", () => {
    expect(sortDigitsDescending(9163)).toBe(9631);
  });

  // Duplicate digits
  it("should handle repeated digits", () => {
    expect(sortDigitsDescending(5555)).toBe(5555);
  });

  it("should handle multiple repeated digits", () => {
    expect(sortDigitsDescending(112233)).toBe(332211);
  });

  it("should handle numbers containing zero", () => {
    expect(sortDigitsDescending(10203)).toBe(32100);
  });

  it("should handle numbers with multiple zeros", () => {
    expect(sortDigitsDescending(100000)).toBe(100000);
  });

  // Edge cases
  it("should return the same value for a single-digit number", () => {
    expect(sortDigitsDescending(7)).toBe(7);
  });

  it("should handle the largest single-digit number", () => {
    expect(sortDigitsDescending(9)).toBe(9);
  });

  it("should handle a number with digits already in descending order", () => {
    expect(sortDigitsDescending(987654321)).toBe(987654321);
  });

  it("should handle a number with digits in ascending order", () => {
    expect(sortDigitsDescending(123456789)).toBe(987654321);
  });

  // Invalid inputs
  it("should throw an error for zero", () => {
    expect(() => sortDigitsDescending(0)).toThrow(
      "Input must be a positive integer",
    );
  });

  it("should throw an error for negative numbers", () => {
    expect(() => sortDigitsDescending(-123)).toThrow(
      "Input must be a positive integer",
    );
  });

  it("should throw an error for decimal numbers", () => {
    expect(() => sortDigitsDescending(12.34)).toThrow(
      "Input must be a positive integer",
    );
  });
});
