const flatten = (values: unknown[]): unknown[] => {
  const result: unknown[] = [];
  for (const value of values) {
    if (Array.isArray(value)) {
      const nestedResult = flatten(value);
      result.push(...nestedResult);
    } else {
      result.push(value);
    }
  }
  return result;
};

// ตัวอย่างที่ 1: มี Array ซ้อนกัน 1 ระดับ
console.log(flatten([1, [2, 3], 4]));
// [1, 2, 3, 4]

// ตัวอย่างที่ 2: มี Array ซ้อนกันหลายระดับ
console.log(flatten([1, [2, [3, 4]], 5]));
// [1, 2, 3, 4, 5]

// ตัวอย่างที่ 3: Array ที่เก็บ String และซ้อนกันหลายระดับ
console.log(flatten([[["a"]], ["b", ["c"]]]));
// ["a", "b", "c"]

// ตัวอย่างที่ 4: Array ว่าง
console.log(flatten([]));
// []

// ตัวอย่างที่ 5: มี Array ว่างอยู่ภายใน
console.log(flatten([1, [], [2, [], 3]]));
// [1, 2, 3]
