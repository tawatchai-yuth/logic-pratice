export const sortStrings = (input: string[]): string[] => {
  // สร้าง Collator สำหรับเปรียบเทียบข้อความ
  // numeric: true ทำให้เปรียบเทียบตัวเลขตามค่าจริง
  // เช่น TH2 จะอยู่ก่อน TH19
  const collator = new Intl.Collator(undefined, {
    numeric: true,
  });
  // สร้าง Array ใหม่เพื่อไม่แก้ไข Array ต้นฉบับ
  // จากนั้นเรียงลำดับโดยใช้ Collator เปรียบเทียบแต่ละข้อความ
  return [...input].sort((a, b) => collator.compare(a, b));
};
console.log(sortStrings(["TH19", "SG20", "TH2"]));
console.log(sortStrings(["TH10", "TH3Netflix", "TH1", "TH7"]));

