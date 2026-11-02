export const compress = (value: string): string => {
  if (value.length === 0) {
    return "";
  }
  let result = "";
  let currentChar = value[0];
  let count = 1;
  for (let i = 1; i < value.length; i++) {
    const char = value[i];
    if (char === currentChar) {
      count++;
    } else {
      result += currentChar + count;
      currentChar = char;
      count = 1;
    }
  }
  result += currentChar + count;
  if (result.length >= value.length) {
    return value;
  }
  return result;
};