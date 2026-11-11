
import { describe, it, expect } from "vitest";
import { autocomplete } from "../src";

describe("autocomplete", () => {
  // Basic search
  it("should return items that contain the search keyword", () => {
    expect(
      autocomplete("th", ["Mother", "Think", "Worthy", "Apple", "Android"], 2),
    ).toEqual(["Think", "Mother"]);
  });

  it("should return all matching items", () => {
    expect(
      autocomplete("app", ["Apple", "Application", "Happy", "Pineapple"], 10),
    ).toEqual(["Apple", "Application", "Happy", "Pineapple"]);
  });

  // Case sensitivity
  it("should ignore uppercase and lowercase differences", () => {
    expect(
      autocomplete("apple", ["Apple", "APPLE", "aPpLe", "Banana"], 10),
    ).toEqual(["Apple", "APPLE", "aPpLe"]);
  });

  it("should match uppercase search keywords", () => {
    expect(
      autocomplete("TH", ["Think", "Mother", "THailand", "Other"], 10),
    ).toEqual(["Think", "THailand", "Other", "Mother"]);
  });

  // Search priority
  it("should prioritize items that start with the keyword", () => {
    expect(
      autocomplete("th", ["Mother", "Think", "Worthy", "Thailand"], 10),
    ).toEqual(["Think", "Thailand", "Mother", "Worthy"]);
  });

  it("should prioritize prefix matches over substring matches", () => {
    expect(
      autocomplete("app", ["Happy", "Application", "Apple", "Pineapple"], 10),
    ).toEqual(["Application", "Apple", "Happy", "Pineapple"]);
  });

  it("should sort substring matches by keyword position", () => {
    expect(
      autocomplete("cat", ["educate", "concatenate", "location"], 10),
    ).toEqual(["location", "educate", "concatenate"]);
  });

  // Maximum results
  it("should limit results according to maxResult", () => {
    expect(
      autocomplete("a", ["Apple", "Banana", "Mango", "Avocado"], 2),
    ).toEqual(["Apple", "Avocado"]);
  });

  it("should return all matches when maxResult is larger than matched items", () => {
    expect(
      autocomplete("app", ["Apple", "Application"], 10),
    ).toEqual(["Apple", "Application"]);
  });

  it("should return one result when maxResult is 1", () => {
    expect(
      autocomplete("th", ["Mother", "Think", "Thailand"], 1),
    ).toEqual(["Think"]);
  });

  // Empty and invalid inputs
  it("should return an empty array when search is empty", () => {
    expect(autocomplete("", ["Apple", "Banana"], 5)).toEqual([]);
  });

  it("should return an empty array when maxResult is zero", () => {
    expect(autocomplete("app", ["Apple", "Application"], 0)).toEqual([]);
  });

  it("should return an empty array when maxResult is negative", () => {
    expect(autocomplete("app", ["Apple", "Application"], -1)).toEqual([]);
  });

  it("should return an empty array when no items match", () => {
    expect(autocomplete("xyz", ["Apple", "Banana", "Orange"], 5)).toEqual([]);
  });

  it("should return an empty array when items is empty", () => {
    expect(autocomplete("app", [], 5)).toEqual([]);
  });

  // Edge cases
  it("should handle a search keyword containing spaces", () => {
    expect(
      autocomplete("hello world", ["Hello World", "World Hello", "Hello"], 5),
    ).toEqual(["Hello World"]);
  });

  it("should handle duplicate items", () => {
    expect(
      autocomplete("app", ["Apple", "Apple", "Application"], 5),
    ).toEqual(["Apple", "Apple", "Application"]);
  });

  it("should return the exact matching item first", () => {
    expect(
      autocomplete("apple", ["Pineapple", "Apple Pie", "Apple", "My Apple"], 5),
    ).toEqual(["Apple", "Apple Pie", "My Apple", "Pineapple"]);
  });
});
