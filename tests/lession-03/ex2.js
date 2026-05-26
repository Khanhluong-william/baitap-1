//Khai báo chiều cao cm
const chieuCao = 179;

//Khai bao số lẻ chiều cao 
const sole = chieuCao - 100;

// Khai báo thông số sức khỏe 
const canNanglt = (sole * 9) / 10;
const canNangtd = sole;
const canNangtt = (sole * 8) / 10;

// In ra kết quả
console.log(`Cân nặng lý tưởng ${canNanglt} kg`);
console.log(`Cân nặng tối đa ${canNangtd} kg`);
console.log(`Cân nặng tối thiểu ${canNangtt} kg`);