export const firstUniqueChar = (value: string): string | null => {
  const charCount = new Map<string, number>();
  // วนลูปอ่านข้อความทีละตัว เพื่อใช้ในการนับความถี่
  for (const char of value) {
    const count = charCount.get(char) ?? 0;
    charCount.set(char, count + 1);
  }
  // วนอ่านข้อความอีกครั้งตามลำดับเดิม
  // เพื่อหาตัวอักษรตัวแรกที่ปรากฏเพียงครั้งเดียว
  for (const char of value) {
    if (charCount.get(char) === 1) {
      return char;
    }
  }
  return null;
};
