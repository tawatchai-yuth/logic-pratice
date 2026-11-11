
import { describe, it, expect } from "vitest";
import { toRoman, fromRoman } from "../src";

// ========================================
// toRoman
// Integer -> Roman
// ========================================

describe("toRoman", () => {
  // Basic conversion
  it.each([
    [1, "I"],
    [2, "II"],
    [3, "III"],
    [4, "IV"],
    [5, "V"],
    [6, "VI"],
    [9, "IX"],
    [10, "X"],
    [14, "XIV"],
    [19, "XIX"],
    [20, "XX"],
  ])("should convert %i to %s", (num, expected) => {
    expect(toRoman(num)).toBe(expected);
  });

  // Subtractive notation
  it.each([
    [4, "IV"],
    [9, "IX"],
    [40, "XL"],
    [90, "XC"],
    [400, "CD"],
    [900, "CM"],
  ])("should support subtractive notation for %i", (num, expected) => {
    expect(toRoman(num)).toBe(expected);
  });

  // Complex numbers
  it.each([
    [58, "LVIII"],
    [68, "LXVIII"],
    [109, "CIX"],
    [944, "CMXLIV"],
    [1989, "MCMLXXXIX"],
    [2000, "MM"],
    [2024, "MMXXIV"],
    [3999, "MMMCMXCIX"],
  ])("should convert %i correctly", (num, expected) => {
    expect(toRoman(num)).toBe(expected);
  });

  // Invalid inputs
  it.each([
    0,
    -1,
    -100,
    4000,
    5000,
    1.5,
    10.25,
    NaN,
    Infinity,
    -Infinity,
  ])("should throw an error for invalid number: %s", (num) => {
    expect(() => toRoman(num)).toThrow(
      "Number must be an integer between 1 and 3999",
    );
  });
});

// ========================================
// fromRoman
// Roman -> Integer
// ========================================

describe("fromRoman", () => {
  // Basic conversion
  it.each([
    ["I", 1],
    ["II", 2],
    ["III", 3],
    ["IV", 4],
    ["V", 5],
    ["VI", 6],
    ["IX", 9],
    ["X", 10],
    ["XIV", 14],
    ["XIX", 19],
    ["XX", 20],
  ])("should convert %s to %i", (roman, expected) => {
    expect(fromRoman(roman)).toBe(expected);
  });

  // Subtractive notation
  it.each([
    ["IV", 4],
    ["IX", 9],
    ["XL", 40],
    ["XC", 90],
    ["CD", 400],
    ["CM", 900],
  ])("should support subtractive notation: %s", (roman, expected) => {
    expect(fromRoman(roman)).toBe(expected);
  });

  // Complex numbers
  it.each([
    ["LVIII", 58],
    ["LXVIII", 68],
    ["CIX", 109],
    ["CMXLIV", 944],
    ["MCMLXXXIX", 1989],
    ["MM", 2000],
    ["MMXXIV", 2024],
    ["MMMCMXCIX", 3999],
  ])("should convert %s correctly", (roman, expected) => {
    expect(fromRoman(roman)).toBe(expected);
  });

  // Case sensitivity
  it("should support lowercase Roman numerals", () => {
    expect(fromRoman("mcmlxxxix")).toBe(1989);
  });

  it("should support mixed-case Roman numerals", () => {
    expect(fromRoman("McMlXxXiX")).toBe(1989);
  });

  // Empty and invalid characters
  it.each([
    "",
    " ",
    "ABC",
    "123",
    "IV!",
    "I V",
    "hello",
  ])("should throw an error for invalid input: %s", (roman) => {
    expect(() => fromRoman(roman)).toThrow("Invalid Roman numeral");
  });

  // Invalid Roman numeral formats
  it.each([
    "IIII",
    "VV",
    "LL",
    "DD",
    "VX",
    "IC",
    "IL",
    "XD",
    "XM",
    "IIV",
    "XXC",
    "MCMC",
    "MMMM",
  ])("should reject invalid Roman numeral format: %s", (roman) => {
    expect(() => fromRoman(roman)).toThrow();
  });
});
