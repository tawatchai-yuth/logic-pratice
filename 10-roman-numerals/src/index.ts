/**
 * แปลงจำนวนเต็มเป็นเลขโรมัน
 */
export function toRoman(num: number): string {
  if (!Number.isInteger(num) || num < 1 || num > 3999) {
    throw new Error("Number must be an integer between 1 and 3999");
  }

  const romanMap: [number, string][] = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  let result = "";

  for (const [value, symbol] of romanMap) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

/**
 * แปลงเลขโรมันเป็นจำนวนเต็ม
 */
export function fromRoman(roman: string): number {
  const input = roman.toUpperCase();

  const romanValues: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  if (!input || !/^[IVXLCDM]+$/.test(input)) {
    throw new Error("Invalid Roman numeral");
  }

  let result = 0;

  for (let i = 0; i < input.length; i++) {
    const current = romanValues[input[i]];
    const next = romanValues[input[i + 1]] ?? 0;

    if (current < next) {
      result -= current;
    } else {
      result += current;
    }
  }

  if (result < 1 || result > 3999) {
    throw new Error("Invalid Roman numeral format");
  }

  if (toRoman(result) !== input) {
    throw new Error("Invalid Roman numeral format");
  }

  return result;
}
