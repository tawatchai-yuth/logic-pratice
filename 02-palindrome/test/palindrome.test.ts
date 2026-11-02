
import { describe, it, expect } from "vitest";
import { isPalindrome } from "../src";

describe("isPalindrome", () => {
  // Basic cases
  it("should return true for a palindrome string", () => {
    expect(isPalindrome("level")).toBe(true);
  });

  it("should return false for a non-palindrome string", () => {
    expect(isPalindrome("hello")).toBe(false);
  });

  // Case insensitive
  it("should ignore uppercase and lowercase differences", () => {
    expect(isPalindrome("RaceCar")).toBe(true);
  });

  // Ignore spaces and punctuation
  it("should ignore spaces and punctuation", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });

  it("should handle palindrome sentences with punctuation", () => {
    expect(isPalindrome("Was it a cat I saw?")).toBe(true);
  });

  // Edge cases
  it("should return true for an empty string", () => {
    expect(isPalindrome("")).toBe(true);
  });

  it("should return true for a single character", () => {
    expect(isPalindrome("a")).toBe(true);
  });

  it("should return true for a string containing only spaces", () => {
    expect(isPalindrome("   ")).toBe(true);
  });

  it("should return true for a string containing only punctuation", () => {
    expect(isPalindrome("!@#$%^&*")).toBe(true);
  });

  // Numbers
  it("should handle numeric characters", () => {
    expect(isPalindrome("12321")).toBe(true);
  });

  it("should return false for non-palindrome numbers", () => {
    expect(isPalindrome("12345")).toBe(false);
  });

  it("should handle mixed letters and numbers", () => {
    expect(isPalindrome("A1b2B1a")).toBe(true);
  });
});
