// Đối với let giá trị có thể thay đổi được 
// Ví dụ
let count = 0;

count = 1;
console.log(count); // sẽ in ra 1

// đối với const giá trị không thể thay đổi được
// Ví dụ
const maxCount = 10;
// maxCount = 20; // sẽ báo lỗi vì không thể gán giá trị mới cho biến const
console.log(maxCount); // sẽ in ra 10

// Đối với object hoặc Array, nếu là const thì không thể gán lại object mới nhưng có thể thay đổi thuộc tính của object đó
const user = { name: "Duc", age: 23 };
user.age = 24;          // vẫn thay đổi được thuộc tính
console.log(user);      // { name: "Duc", age: 24 }

// user = { name: "Nam" }; // Lỗi: không thể gán lại object mới

const number = [1, 2, 3];
number.push(4);        // vẫn thay đổi được mảng
console.log(number);   // [1, 2, 3, 4]

// number = [5, 6]; // Lỗi: không thể gán lại mảng mới