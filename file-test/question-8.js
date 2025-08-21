// Các kiểu dư liệu trong JS
// Kiểu dữ liệu nguyên thuỷ Primitive Types
// 1. Number: Số nguyên và số thực
let a = 42;
let b = 3.14;
let c = NaN;
let d = Infinity;

// 2. BigInt: Số nguyên lớn
let big = BigInt(1234567890123456789012345678901234567890);

// 3. String: Chuỗi ký tự
let str = "Hello, world!";

// 4. Boolean: Giá trị đúng hoặc sai
let isTrue = true;
let isFalse = false;

// 5. Undefined: Biến chưa được gán giá trị
let x;
console.log(x); // undefined

// 6. Null: Giá trị không có
let y = null;
console.log(y);

// 7. Symbol: Giá trị duy nhất và không thể thay đổi
let sym = Symbol("description");


// 2. Kiểu dữ liệu tham chiếu Reference Types
// 1. Object: Đối tượng
let obj = {
    name: "Duc",
    age: 23
};

// 2. Array: Mảng
let arr = [1, 2, 3, 4, 5];

// 3. Function: Hàm
function greet(name) {
    return `Hello, ${name}!`;
}

// 4. Date: Ngày tháng
let date = new Date();

// 5. RegExp: Biểu thức chính quy
let regex = /abc/;

// 6. Map: Bản đồ
let map = new Map();

// 7. Set: Tập hợp
let set = new Set();

// 8. WeakMap: Bản đồ yếu
let weakMap = new WeakMap();

// 9. WeakSet: Tập hợp yếu
let weakSet = new WeakSet();
