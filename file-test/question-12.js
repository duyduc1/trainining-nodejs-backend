// 1. Toán tử == (Equality / So sánh bằng)
console.log(5 == "5");   // true  (string "5" được chuyển sang number 5)
console.log(0 == false); // true  (false được chuyển sang number 0)
console.log(null == undefined); // true


// 2. Toán tử === (Strict Equality / So sánh nghiêm ngặt)
console.log(5 === "5");  // false (không chuyển đổi kiểu, so sánh khác kiểu)
console.log(0 === false); // false (không chuyển đổi kiểu, so sánh khác kiểu)
console.log(null === undefined); // false (không cùng kiểu dữ liệu)

// Trong switch statement, JavaScript dùng === (strict equality) để so sánh giá trị của expression với case.
const x = "5";

switch (x) {
  case 5:
    console.log("Number 5");
    break;
  case "5":
    console.log("String 5");
    break;
}
