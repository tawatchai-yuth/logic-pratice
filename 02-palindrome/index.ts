const isPalindrome = (value: string): boolean => {
  const lowerCase = value.toLowerCase();

  const cleaned = lowerCase.replace(/[^a-z0-9]/g, "");

  const reversed = cleaned.split("").reverse().join("");

  return cleaned == reversed;
};

// ตัวอย่างที่ 1
console.log(isPalindrome("level")); // true

// ตัวอย่างที่ 2 (ไม่สนใจตัวพิมพ์)
console.log(isPalindrome("RaceCar")); // true

// ตัวอย่างที่ 3 (ละเว้นช่องว่างและเครื่องหมาย)
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true

// ตัวอย่างที่ 4
console.log(isPalindrome("hello")); // false

// ตัวอย่างที่ 5
console.log(isPalindrome("Was it a cat I saw?")); // true

// ตัวอย่างที่ 6
console.log(isPalindrome("programming")); // false
