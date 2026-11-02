
import { describe, it, expect } from "vitest";
import { mergeIntervals } from "../src";

// Helper type
type Interval = [number, number];

describe("mergeIntervals", () => {
  // Basic cases
  it("should merge overlapping intervals", () => {
    expect(
      mergeIntervals([
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
      ]),
    ).toEqual([
      [1, 6],
      [8, 10],
      [15, 18],
    ]);
  });

  it("should merge intervals that touch at the boundary", () => {
    expect(
      mergeIntervals([
        [1, 4],
        [4, 5],
      ]),
    ).toEqual([[1, 5]]);
  });

  // Sorting
  it("should sort intervals before merging", () => {
    expect(
      mergeIntervals([
        [5, 7],
        [1, 2],
        [2, 4],
      ]),
    ).toEqual([
      [1, 4],
      [5, 7],
    ]);
  });

  // No overlapping intervals
  it("should return intervals unchanged when there is no overlap", () => {
    expect(
      mergeIntervals([
        [1, 2],
        [4, 5],
        [7, 9],
      ]),
    ).toEqual([
      [1, 2],
      [4, 5],
      [7, 9],
    ]);
  });

  // Nested intervals
  it("should merge intervals completely contained within another interval", () => {
    expect(
      mergeIntervals([
        [1, 10],
        [2, 3],
        [4, 8],
      ]),
    ).toEqual([[1, 10]]);
  });

  // Edge cases
  it("should return an empty array for empty input", () => {
    expect(mergeIntervals([])).toEqual([]);
  });

  it("should return the same interval when input contains only one interval", () => {
    expect(mergeIntervals([[1, 5]])).toEqual([[1, 5]]);
  });

  it("should handle intervals with identical boundaries", () => {
    expect(
      mergeIntervals([
        [1, 3],
        [1, 3],
        [1, 3],
      ]),
    ).toEqual([[1, 3]]);
  });

  it("should handle intervals with the same start value", () => {
    expect(
      mergeIntervals([
        [1, 5],
        [1, 3],
        [1, 8],
      ]),
    ).toEqual([[1, 8]]);
  });

  it("should handle intervals with the same end value", () => {
    expect(
      mergeIntervals([
        [1, 5],
        [3, 5],
        [2, 5],
      ]),
    ).toEqual([[1, 5]]);
  });

  // Negative numbers
  it("should handle negative intervals", () => {
    expect(
      mergeIntervals([
        [-10, -5],
        [-7, -3],
        [0, 5],
      ]),
    ).toEqual([
      [-10, -3],
      [0, 5],
    ]);
  });

  it("should handle intervals crossing zero", () => {
    expect(
      mergeIntervals([
        [-5, 2],
        [0, 5],
        [6, 10],
      ]),
    ).toEqual([
      [-5, 5],
      [6, 10],
    ]);
  });

  // Input immutability
  it("should not modify the original input array", () => {
    const intervals: Interval[] = [
      [5, 7],
      [1, 3],
      [2, 6],
    ];

    const original = intervals.map(
      ([start, end]) => [start, end] as Interval,
    );

    mergeIntervals(intervals);

    expect(intervals).toEqual(original);
  });

  it("should not modify the original interval tuples", () => {
    const first: Interval = [1, 3];
    const second: Interval = [2, 6];

    mergeIntervals([first, second]);

    expect(first).toEqual([1, 3]);
    expect(second).toEqual([2, 6]);
  });
});
