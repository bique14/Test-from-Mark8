Test from Mark8

FE Test instruction:


โจทย์ : เขียน responsive webapp โดยใช้ NEXT.Js ที่เน้นใช้งานบน desktop ตามดีไซน์เพื่อให้ seller สามารถ upload ประกาศขึ้นมาบนเวบ mark8 ได้หลายประกาศผ่านข้อมูล spreadsheet


วิธีส่งผลงาน: อัพขึ้น github แล้วเปิดเป็น public


ดีไซน์: https://www.figma.com/file/kX0cUsqCScS99kjpeDc3Wj/Mark8-Bulk-Upload?node-id=0%3A1
mock data : https://docs.google.com/spreadsheets/d/1GQfhsBbB9e0DjBfdteYMOig6Auu2Ii-M9B7ODeFqq1k/edit?usp=sharing


webapp นี้จะประกอบด้วยสองส่วนหลัก
1. ส่วนบนให้ user เลือก upload file csv
2. ส่วนล่างเป็นส่วนแสดงผล หลังจาก upload ไฟล์เสร็จ ให้โชว์ผลลัพธ์ที่อ่านจากไฟล์ตามดีไซน์


คำอธิบายเพิ่มเติม
- Column A-M จำเป็นต้องกรอก และมีการ validate data (โชว์สีแดง) เมื่อมีค่าผิดพลาดหรือไม่ได้กรอก
- Amenities (column N-U) ให้แสดงค่าเป็นจำนวน Amenities ที่มีในห้องนั้น และโชว์ drop down รายชื่อ amenities เมื่อ user เอาเม้าส์ไป hover
- แสดงผลรูปเป็น thumbnail และมีปุ่ม edit photo เมื่อเอาเม้าส์ไป hover เพื่อเลือกรูปใหม่
