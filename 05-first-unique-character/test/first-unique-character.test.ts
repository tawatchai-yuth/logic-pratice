
import { describe, it, expect } from "vitest";
import { firstUniqueChar } from "../src";

describe("firstUniqueChar", () => {
  // Basic cases
  it("should return the first unique character", () => {
    expect(firstUniqueChar("leetcode")).toBe("l");
  });

  it("should return the first unique character in the middle", () => {
    expect(firstUniqueChar("loveleetcode")).toBe("v");
  });

  // No unique character
  it("should return null when all characters are repeated", () => {
    expect(firstUniqueChar("aabbcc")).toBeNull();
  });

  it("should return null when all characters are identical", () => {
    expect(firstUniqueChar("aaaa")).toBeNull();
  });

  // Character order
  it("should return the first unique character by original order", () => {
    expect(firstUniqueChar("swiss")).toBe("w");
  });

  // Case sensitivity
  it("should treat uppercase and lowercase as different characters", () => {
    expect(firstUniqueChar("aAb")).toBe("a");
  });

  it("should handle uppercase characters", () => {
    expect(firstUniqueChar("AABC")).toBe("B");
  });

  // Edge cases
  it("should return null for an empty string", () => {
    expect(firstUniqueChar("")).toBeNull();
  });

  it("should return the character when input contains only one character", () => {
    expect(firstUniqueChar("a")).toBe("a");
  });

  it("should handle spaces as characters", () => {
    expect(firstUniqueChar("  abc")).toBe("a");
  });

  it("should return space when it appears only once", () => {
    expect(firstUniqueChar(" abc")).toBe(" ");
  });

  // Numbers and special characters
  it("should handle numeric characters", () => {
    expect(firstUniqueChar("1122334")).toBe("4");
  });

  it("should handle special characters", () => {
    expect(firstUniqueChar("!!@@#$$")).toBe("#");
  });
});
