
/**
 * สร้างลำดับตัวเลขโดยนำสมาชิก 3 ตัวล่าสุดมาบวกกัน
 */
export const f = (signature: number[], n: number): number[] => {
  if (signature.length > 3) {
    throw new Error("signature must contain between 0 and 3 values");
  }
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("n must be a non-negative integer");
  }
  const result = signature.slice(0, n);
  while (result.length < n) {
    if (result.length < 3) {
      throw new Error("At least 3 starting values are required to continue");
    }
    const length = result.length;
    const nextValue =
      result[length - 1] + result[length - 2] + result[length - 3];
    result.push(nextValue);
  }

  return result;
};
