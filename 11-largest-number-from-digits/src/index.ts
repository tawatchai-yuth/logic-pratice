
/**
 * เรียงตัวเลขแต่ละหลักจากมากไปน้อย
 */
export const sortDigitsDescending = (num: number): number => {
  if (!Number.isSafeInteger(num) || num <= 0) {
    throw new Error("Input must be a positive integer");
  }

  const digits = String(num).split("");

  digits.sort((a, b) => Number(b) - Number(a));

  return Number(digits.join(""));
};
