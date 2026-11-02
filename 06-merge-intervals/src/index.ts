export const mergeIntervals = (intervals: [number, number][]): [number, number][] => {
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