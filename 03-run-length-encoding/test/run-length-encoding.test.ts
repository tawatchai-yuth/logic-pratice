
import { describe, it, expect } from "vitest";
import { compress } from "../src";

describe("compress", () => {
  // Basic cases
  it("should compress repeated characters", () => {
    expect(compress("wwwwaaadexxxxxx")).toBe("w4a3d1e1x6");
  });
  it("should compress multiple character groups", () => {
    expect(compress("aabcccccaaa")).toBe("a2b1c5a3");
  });
  // Return original string
  it("should return original string when compressed length is equal", () => {
    expect(compress("aaabbc")).toBe("aaabbc");
  });
  it("should return original string when compressed length is greater", () => {
    expect(compress("abcd")).toBe("abcd");
  });
  // Edge cases
  it("should return empty string for empty input", () => {
    expect(compress("")).toBe("");
  });
  it("should handle a single character", () => {
    expect(compress("a")).toBe("a");
  });
  it("should handle repeated single characters", () => {
    expect(compress("aaaaa")).toBe("a5");
  });
  it("should handle two repeated characters", () => {
    expect(compress("aa")).toBe("aa");
  });
  // Character groups
  it("should handle alternating characters", () => {
    expect(compress("aabbcc")).toBe("aabbcc");
  });
  it("should handle characters repeated at the beginning", () => {
    expect(compress("aaaabc")).toBe("aaaabc");
  });
  it("should handle characters repeated at the end", () => {
    expect(compress("abcccc")).toBe("abcccc");
  });
  it("should handle all identical characters", () => {
    expect(compress("aaaaaaaaaa")).toBe("a10");
  });
  // Special characters
  it("should handle numbers as characters", () => {
    expect(compress("1111222")).toBe("1423");
  });
  it("should handle uppercase and lowercase characters separately", () => {
    expect(compress("AAaaBBbb")).toBe("AAaaBBbb");
  });
});
