const compress = (value: string): string => {
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

// ตัวอย่างที่ 1: ผลลัพธ์ยาวเท่าข้อความเดิม จึงคืนข้อความเดิม
console.log(compress("aaabbc")); // "aaabbc"

// ตัวอย่างที่ 2: ผลลัพธ์ยาวกว่าข้อความเดิม จึงคืนข้อความเดิม
console.log(compress("abcd")); // "abcd"

// ตัวอย่างที่ 3: ผลลัพธ์สั้นกว่าข้อความเดิม
console.log(compress("wwwwaaadexxxxxx")); // "w4a3d1e1x6"

// ตัวอย่างที่ 4: ข้อความว่าง
console.log(compress("")); // ""

// ตัวอย่างที่ 5: ผลลัพธ์สั้นกว่าข้อความเดิม
console.log(compress("aabcccccaaa")); // "a2b1c5a3"
