// Khai báo dữ liệu
const a = true;
const b = false;
const c = true;

// a. true && false && true
// Có false => kết quả false
console.log(a && b && c); // false

// b. true && false || true
// true && false = false
// false || true = true
console.log(a && b || c); // true