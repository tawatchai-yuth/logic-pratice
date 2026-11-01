const mergeIntervals = (intervals: [number, number][]): [number, number][] => {
  if (intervals.length === 0) {
    return [];
  }
  const sortedIntervals = [...intervals].sort((a, b) => a[0] - b[0]);
  const result: [number, number][] = [
    [...sortedIntervals[0]] as [number, number],
  ];
  for (let i = 1; i < sortedIntervals.length; i++) {
    const current = sortedIntervals[i];
    const last = result[result.length - 1];
    if (current[0] <= last[1]) {
      last[1] = Math.max(last[1], current[1]);
    } else {
      result.push([...current] as [number, number]);
    }
  }
  return result;
};

// ตัวอย่างที่ 1: มีช่วงที่ทับซ้อนกัน
console.log(
  mergeIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]),
);
// [[1, 6], [8, 10], [15, 18]]

// ตัวอย่างที่ 2: ช่วงเชื่อมต่อกันที่เลข 4
console.log(
  mergeIntervals([
    [1, 4],
    [4, 5],
  ]),
);
// [[1, 5]]

// ตัวอย่างที่ 3: ข้อมูลยังไม่ได้เรียงลำดับ
console.log(
  mergeIntervals([
    [5, 7],
    [1, 2],
    [2, 4],
  ]),
);
// [[1, 4], [5, 7]]

// ตัวอย่างที่ 4: Array ว่าง
console.log(mergeIntervals([]));
// []

// ตัวอย่างที่ 5: ไม่มีช่วงทับซ้อนกัน
console.log(
  mergeIntervals([
    [1, 2],
    [4, 5],
    [7, 9],
  ]),
);
// [[1, 2], [4, 5], [7, 9]]

// ตัวอย่างที่ 6: มีช่วงซ้อนกันหลายช่วง
console.log(
  mergeIntervals([
    [1, 10],
    [2, 3],
    [4, 8],
  ]),
);
// [[1, 10]]
