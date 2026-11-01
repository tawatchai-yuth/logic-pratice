const twoSum = (numbers: number[], target: number): number[] => {
  const numberMap = new Map<number, number>();
  for (let i = 0; i < numbers.length; i++) {
    const current = numbers[i];
    const complement = target - current; 
    if (numberMap.has(complement)) {
      return [numberMap.get(complement)!, i];
    } else {
      numberMap.set(current, 1);
    }
  }
  return [];
};

// ตัวอย่างที่ 1: 2 + 7 = 9
console.log(twoSum([3, 7, 5, 2], 9)); // [0, 1]

// ตัวอย่างที่ 2: 2 + 4 = 6
console.log(twoSum([3, 2, 4], 6)); // [1, 2]

// ตัวอย่างที่ 3: 3 + 3 = 6 โดยใช้คนละตำแหน่ง
console.log(twoSum([3, 3], 6)); // [0, 1]

// ตัวอย่างที่ 4: 8 + (-2) = 6
console.log(twoSum([-1, 8, 4, 2], 6)); // [1, 3]
