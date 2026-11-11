
import { describe, it, expect } from "vitest";
import { sortStrings } from "../src";

describe("sortStrings", () => {
  // Basic cases
  it("should sort strings alphabetically", () => {
    expect(sortStrings(["banana", "apple", "cherry"])).toEqual([
      "apple",
      "banana",
      "cherry",
    ]);
  });

  it("should sort strings in ascending order", () => {
    expect(sortStrings(["c", "a", "b"])).toEqual([
      "a",
      "b",
      "c",
    ]);
  });

  // Numeric sorting
  it("should sort numeric strings by actual numeric value", () => {
    expect(sortStrings(["10", "2", "1"])).toEqual([
      "1",
      "2",
      "10",
    ]);
  });

  it("should sort strings with numeric suffixes naturally", () => {
    expect(sortStrings(["TH19", "SG20", "TH2"])).toEqual([
      "SG20",
      "TH2",
      "TH19",
    ]);
  });

  it("should sort strings with mixed letters and numbers", () => {
    expect(sortStrings(["TH10", "TH3Netflix", "TH1", "TH7"])).toEqual([
      "TH1",
      "TH3Netflix",
      "TH7",
      "TH10",
    ]);
  });

  it("should sort strings with multiple numeric sections", () => {
    expect(sortStrings(["A2B10", "A2B2", "A10B1", "A1B1"])).toEqual([
      "A1B1",
      "A2B2",
      "A2B10",
      "A10B1",
    ]);
  });

  // Duplicate values
  it("should handle duplicate strings", () => {
    expect(sortStrings(["TH2", "TH1", "TH2", "TH10"])).toEqual([
      "TH1",
      "TH2",
      "TH2",
      "TH10",
    ]);
  });

  // Edge cases
  it("should return an empty array for empty input", () => {
    expect(sortStrings([])).toEqual([]);
  });

  it("should return the same string for a single-item array", () => {
    expect(sortStrings(["TH2"])).toEqual(["TH2"]);
  });

  it("should handle strings containing only numbers", () => {
    expect(sortStrings(["100", "20", "3", "1"])).toEqual([
      "1",
      "3",
      "20",
      "100",
    ]);
  });

  it("should handle strings containing only letters", () => {
    expect(sortStrings(["dog", "cat", "ant"])).toEqual([
      "ant",
      "cat",
      "dog",
    ]);
  });

  // Input immutability
  it("should not modify the original input array", () => {
    const input = ["TH19", "SG20", "TH2"];
    const original = [...input];

    sortStrings(input);

    expect(input).toEqual(original);
  });

  it("should handle strings with different lengths", () => {
    expect(sortStrings(["A100", "A1", "A10", "A2"])).toEqual([
      "A1",
      "A2",
      "A10",
      "A100",
    ]);
  });

  it("should handle strings with leading zeros", () => {
    expect(sortStrings(["TH02", "TH1", "TH10", "TH2"])).toEqual([
      "TH1",
      "TH02",
      "TH2",
      "TH10",
    ]);
  });
});
