# ข้อ 9: Autocomplete — ระบบแนะนำคำจากคำค้นหา

## ระดับ
ปานกลาง

## โจทย์
เขียนฟังก์ชัน `autocomplete(search: string, items: string[], maxResult: number): string[]` เพื่อค้นหารายการที่มี `search` เป็นส่วนหนึ่งของข้อความ โดยไม่สนใจตัวพิมพ์เล็กหรือใหญ่ แล้วเรียงผลลัพธ์ตามลำดับความเกี่ยวข้อง

ลำดับความสำคัญ:
1. รายการที่ขึ้นต้นด้วยคำค้นหา
2. รายการที่มีคำค้นหาอยู่ตรงกลาง
3. รายการที่ลงท้ายด้วยคำค้นหา

เมื่ออยู่ในกลุ่มเดียวกัน ให้คงลำดับเดิมจาก `items` และคืนผลลัพธ์ไม่เกิน `maxResult` รายการ

## ตัวอย่างผลลัพธ์

```ts
autocomplete("th", ["Mother", "Think", "Worthy", "Apple", "Android"], 2)
// ["Think", "Mother"]

autocomplete("app", ["Pineapple", "Application", "Apple", "Happy"], 3)
// ["Application", "Apple", "Pineapple"]

autocomplete("JS", ["nodejs", "JS guide", "Learn JS", "Java"], 5)
// ["JS guide", "nodejs", "Learn JS"]

autocomplete("xyz", ["Apple", "Orange"], 3)
// []

autocomplete("a", ["Apple", "Banana", "Avocado"], 0)
// []
```

## คำอธิบายแนวคิด
เริ่มจากกรองรายการที่มีคำค้นหาอยู่ โดยแปลงทั้งคำค้นหาและข้อความเป็นตัวพิมพ์เล็กเพื่อค้นหาแบบไม่สนใจ case

จากนั้นกำหนดคะแนนให้แต่ละรายการ เช่น:
- ขึ้นต้นด้วยคำค้นหา: คะแนนกลุ่ม 0
- พบตรงกลาง: คะแนนกลุ่ม 1
- พบที่ท้ายข้อความ: คะแนนกลุ่ม 2

เรียงตามคะแนนกลุ่ม และใช้ลำดับเดิมเป็นตัวตัดสินเมื่อคะแนนเท่ากัน แล้วจึงตัดรายการด้วย `slice(0, maxResult)`

## สิ่งที่ควรฝึก
- `includes()`, `startsWith()`, `endsWith()`
- การเรียงด้วย Comparator
- Case-insensitive search
- `slice()` และกรณี `maxResult` เป็น 0
