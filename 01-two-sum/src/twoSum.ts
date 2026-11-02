export const twoSum = (
  numbers: number[],
  target: number,
): number[] => {
  const numberMap = new Map<number, number>();
  for (let i = 0; i < numbers.length; i++) {
    const current = numbers[i];
    const complement = target - current;
    if (numberMap.has(complement)) {
      return [numberMap.get(complement)!, i];
    }
    numberMap.set(current, i);
  }
  return [];
};
