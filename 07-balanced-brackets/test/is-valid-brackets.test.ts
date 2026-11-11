
import { describe, it, expect } from "vitest";
import { isValidBrackets } from "../src";

describe("isValidBrackets", () => {
  // Basic cases
  it("should return true for valid parentheses", () => {
    expect(isValidBrackets("()")).toBe(true);
  });

  it("should return true for valid square brackets", () => {
    expect(isValidBrackets("[]")).toBe(true);
  });

  it("should return true for valid curly brackets", () => {
    expect(isValidBrackets("{}")).toBe(true);
  });

  // Nested brackets
  it("should return true for nested brackets", () => {
    expect(isValidBrackets("([{}])")).toBe(true);
  });

  it("should return true for multiple nested brackets", () => {
    expect(isValidBrackets("((()))")).toBe(true);
  });

  it("should return true for multiple bracket types", () => {
    expect(isValidBrackets("()[]{}")).toBe(true);
  });

  it("should return true for complex nested brackets", () => {
    expect(isValidBrackets("{[()]}([])")).toBe(true);
  });

  // Invalid bracket order
  it("should return false for mismatched brackets", () => {
    expect(isValidBrackets("([]]")).toBe(false);
  });

  it("should return false for incorrectly nested brackets", () => {
    expect(isValidBrackets("([)]")).toBe(false);
  });

  it("should return false for extra closing brackets", () => {
    expect(isValidBrackets("([[{}]]]")).toBe(false);
  });

  it("should return false for unmatched closing parentheses", () => {
    expect(isValidBrackets(")")).toBe(false);
  });

  it("should return false for multiple unmatched closing brackets", () => {
    expect(isValidBrackets("(]}])")).toBe(false);
  });

  // Unclosed brackets
  it("should return false for unclosed parentheses", () => {
    expect(isValidBrackets("(")).toBe(false);
  });

  it("should return false for unclosed square brackets", () => {
    expect(isValidBrackets("[")).toBe(false);
  });

  it("should return false for unclosed curly brackets", () => {
    expect(isValidBrackets("{")).toBe(false);
  });

  it("should return false when multiple brackets are unclosed", () => {
    expect(isValidBrackets("(([{")).toBe(false);
  });

  // Edge cases
  it("should return true for an empty string", () => {
    expect(isValidBrackets("")).toBe(true);
  });

  it("should return true for a single pair of each bracket type", () => {
    expect(isValidBrackets("()[]{}")).toBe(true);
  });

  it("should return false for reversed brackets", () => {
    expect(isValidBrackets(")(")).toBe(false);
  });

  it("should return false for mixed invalid brackets", () => {
    expect(isValidBrackets("({[)]}")).toBe(false);
  });
});
