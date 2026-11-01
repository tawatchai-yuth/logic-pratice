const firstUniqueChar = (value: string): string | null => {
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

// ตัวอย่างที่ 1: ตัวอักษร l ปรากฏเพียงครั้งเดียวและอยู่ตัวแรก
console.log(firstUniqueChar("leetcode")); // "l"

// ตัวอย่างที่ 2: v เป็นตัวแรกที่ปรากฏเพียงครั้งเดียว
console.log(firstUniqueChar("loveleetcode")); // "v"

// ตัวอย่างที่ 3: ทุกตัวอักษรปรากฏซ้ำ
console.log(firstUniqueChar("aabbcc")); // null

// ตัวอย่างที่ 4: w ปรากฏเพียงครั้งเดียวและเป็นตัวแรกที่เข้าเงื่อนไข
console.log(firstUniqueChar("swiss")); // "w"

// ตัวอย่างที่ 5: ข้อความว่าง
console.log(firstUniqueChar("")); // null

// ตัวอย่างที่ 6: แยกตัวพิมพ์เล็กและตัวพิมพ์ใหญ่
console.log(firstUniqueChar("aAb")); // "a"
