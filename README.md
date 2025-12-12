# SubmitTaxFE

Lab Angular ทำทันตามเวลาไม่มีปัญหาครับ อาจจะช้าตรงจัด css html เรื่อง logic ไม่มีปัญหาครับ

---

## BUG

- ตรง print JSON มาดูใน Modal ตรงนี้ใน filing type พอเลือก Ordinary Filing พวกค่า surcharge penalty total มีค่าเป็น 0 เพราะว่าฟังก์ชั่นการคำนวนผมไม่ได้เช็คอีกทีว่า ถ้าไม่มีค่าให้เป็น null แต่ไปกำหนดให้เป็น 0 คิดว่า type number ที่ไม่มีค่าไม่ควรเป็น 0 แต่ควรเป็น null มากกว่าครับ ไม่รอบคอบ
- ตรงค่า total เวลา user กรอก saleamount ตอนที่ user เลือก Type Ordinary Filing อันนี้ควรเอา Taxamount มา set ให้กับ total ด้วยตรงนี้ผมไม่ได้ set ไว้ อ่าน spec ไม่ขาดคิดว่า set เฉพาะตอนเลือก Additional Filing

---