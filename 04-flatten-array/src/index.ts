export const flatten = (values: unknown[]): unknown[] => {
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