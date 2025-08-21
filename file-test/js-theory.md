# Tổng hợp các question

## question 1
``` javascript
// Functions này sẽ log ra 1 chuỗi sau một khoảng thời gian nhất định và dừng lại sau một khoảng thời gian cụ thể ở dưới là 1 giây
// ví dụ
setTimeout(() => {
    console.log('Hello, world!');
}, 1000);
// sẽ log ra 'Hello, world!' sau 1 giây


// Functions này sẽ log ra 1 chuỗi sau mỗi khoảng thời gian nhất định là 2 giây và lặp đi lặp lại mỗi 2 giây không có điểm dừng
// ví dụ

setInterval(() => {
    console.log('Hello, world! - 2');
}, 2000);
```

## question 2
``` javascript
// Callback là một hàm được truyền như đối số vào một hàm khác, và nó sẽ được gọi (call back) khi hàm kia hoàn thành công việc.
// nói cho dễ hiểu hơn là hàm A sẽ gọi hàm B và đưa cho hàm B một hàm khác là callback, khi hàm A hoàn thành công việc của nó thì nó sẽ gọi hàm B và truyền cho nó callback đó.
// Ví dụ về callback trong JavaScript
function doTask(taskname, callback) {
    console.log(`Đang làm việc ${taskname}...`);
    console.log(`Đã hoàn thành ${taskname}!`);
    callback();
}

doTask("A" , () => {
    console.log("Callback cho A đã được gọi!");
})

// Callback hell là hiện tượng khi dùng quá nhiều callback lồng nhau làm cho code trở nên khó đọc và bảo trì.
// Ví dụ về callback hell
doTask("A", () => {
    doTask("B", () => {
        doTask("C", () => {
            console.log("Xong hết!");
        });
    });
});
```

## question 3
``` javascript
// Đối với let giá trị có thể thay đổi được 
// Ví dụ
let count = 0;

count = 1;
console.log(count); // sẽ in ra 1

// đối với const giá trị không thể thay đổi được
// Ví dụ
const maxCount = 10;

// maxCount = 20;
console.log(maxCount); // Lỗi: không thể gán lại giá trị cho const


// Đối với object hoặc Array, nếu là const thì không thể gán lại object mới nhưng có thể thay đổi thuộc tính của object đó
const user = { name: "Duc", age: 23 };
user.age = 24;          // vẫn thay đổi được thuộc tính
console.log(user);      // { name: "Duc", age: 24 }

// user = { name: "Nam" }; // Lỗi: không thể gán lại object mới

const number = [1, 2, 3];
number.push(4);        // vẫn thay đổi được mảng
console.log(number);   // [1, 2, 3, 4]

// number = [5, 6]; // Lỗi: không thể gán lại mảng mới
```

## question 4
``` javascript
// một vòng lăp for truyền thống 
const arr = [1, 2, 3, 4];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// Output: 1, 2, 3, 4

console.log("-------------------");

// forEach sẽ duyệt từng phần tử bên trong mảng nhưng sẽ không trả về mãng mới
const arr1 = [1, 2, 3];
arr1.forEach(num => console.log(num *  2));
// Output: 2, 4, 6

console.log("-------------------");

// map sẽ duyệt qua từng phần tử nhưng nó sẽ trả về một mảng mới
const arr2 = [1, 2, 3];
const doubled = arr2.map(num => num * 2);
console.log(doubled); // [2, 4, 6]

console.log("-------------------");

// filter sẽ lọc các phần tử trong mảng dựa trên điều kiện và trả về một mảng mới chứa các phần tử
const arr3 = [1, 2, 3, 4, 5];
const evenNumbers = arr3.filter(number => number % 2 === 0);
console.log(evenNumbers); // [2, 4]

console.log("-------------------");

// đối với every, nó sẽ kiểm tra xem tất cả các phần tử trong mảng xem nếu tất cả phần tử thoã mãn điều kiện thì trả về true, nếu 1 trong các phần tử không thoả mãn thì trả về false
const arr4 = [1, 2, 3, 4, 5];
console.log(arr4.every(number => number > 0)); // true, vì tất cả các phần tử đều lớn hơn 0
console.log(arr4.every(number => number % 2 === 0)); // false, vì không phải tất cả các phần tử đều là số chẵn

console.log("-------------------");

// some sẽ kiểm tra xem có ít nhất một phần tử trong mảng thoã mãn điều kiện nếu 1 phần tử trong mãng thoã mãn điều kiện thì tra về true, nếu không có phần tử nào thoả mãn thì trả về false
const arr5 = [1, 2, 3, 4, 5];
console.log(arr5.some(number => number > 3)); // true, vì có các phần tử 4, 5 lớn hơn 3
console.log(arr5.some(number => number < 0)); // false, vì không có phần tử nào nhỏ hơn 0
```

## question 5
``` javascript
let x = 10;

// x là đia chỉ của biến, nếu ta gán x cho y thì y sẽ trỏ đến cùng một địa chỉ bộ nhớ với x

// còn 10 là giá trị của biến x, nếu ta gán y = 10 thì y sẽ trỏ đến một địa chỉ bộ nhớ khác với x
```

## question 6
``` javascript
// Lỗi Thay đổi object thông qua reference
const user1 = { name: "Duc", age: 23 };
const user2 = user1; 

user2.age = 24;

console.log(user1.age); 
// Output: 24, vì user2 là một tham chiếu đến user1, nên khi thay đổi thuộc tính age của user2 thì nó cũng thay đổi trong user1

const original = { a: 1, b: 2 };
// const copy = original;  // sai lầm, không phải clone

// copy.a = 10;
// console.log(original.a); // 10 , original cũng bị thay đổi

const copyCorrect = { ...original }; // shallow copy
copyCorrect.a = 10;
console.log(original.a); // original không bị thay đổi

function updateUser(user) {
    user.age = 30; // thay đổi trực tiếp object gốc
}

const user = { name: "Duc", age: 23 };
updateUser(user);

console.log(user.age); // 30 , bị thay đổi ngoài ý muốn
```

## question 7
``` javascript
// call gọi hàm ngay lập tức, this sẽ trỏ tới person
// và truyền tham số vào hàm
// Ví dụ về call
const person = { name : "Duc"};

function sayHello(greeting) {
    console.log(`${greeting}, my name is ${this.name}`);
}

sayHello.call(person, "Hello"); // Hi, Hello my name is Duc

// apply cơ chế tương tự như call nhưng tham số truyền vào sẽ được đưa vào dưới dạng mảng
// Ví dụ về apply
sayHello.apply(person, ["Hi"]); // Hi, Hello my name is Duc


// bind không gọi hàm ngay lập tức mà trả về một hàm mới với this được bind tới đối tượng đã cho
const sayHelloPerson = sayHello.bind(person);

sayHelloPerson("Hey"); // Hey, my name is Duc
sayHelloPerson("Hi");  // Hi, my name is Duc
```

## question 8
``` javascript
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
```

## question 9 
``` javascript
//prototype là "bản mẫu" để các object kế thừa các phương thức và thuộc tính
// prototype là nơi chứa các phương thức/thuộc tính có thể được chia sẻ.
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// sayHello được thêm vào Person.prototype.
Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Các object duc và nam chia sẻ cùng một phương thức, không phải copy riêng
const duc = new Person("Duc", 23);
duc.sayHello(); 

const nam = new Person("Nam", 25);
nam.sayHello();
```

## question 10
``` javascript
// 1. Object literal (Cách thông dụng nhất)
const obj = {
    name: "Duc",
    age: 23,
    sayHello: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

obj.sayHello();

// 2. Sử dụng new Object()
const obj2 = new Object();
obj2.name = "Nam";
obj2.age = 25;
obj2.sayHello = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}

obj2.sayHello();

// 3. Constructor function (Hàm tạo)
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log(`Hi, my name is ${this.name}`);
    };
}

const duc = new Person("Duc", 23);
duc.sayHello(); // Hi, my name is Duc

// 4. Sử dụng Object.create()
const proto = {
    greet: function() {
        console.log(`Hi, my name is ${this.name}`);
    }
};

const duc2 = Object.create(proto);
duc2.name = "Duc";
duc2.greet(); 

// 5. Object với JSON (tạo từ dữ liệu JSON)
const jsonStr = '{"name": "Duc", "age": 23}';
const obj2 = JSON.parse(jsonStr);
console.log(obj2.name); 
```

## question 11
``` javascript
// Trình bày các phương pháp để clone object
// 1. Shallow copy (Sao chép nông)
// a. Sử dụng spread operator { ...obj }v
const obj = { name: "Duc", age: 23 };
const clone = { ...obj };

clone.name = "Lan";
console.log(obj.name); // Duc

// b. Sử dụng Object.assign
const obj2 = { name: "Nam", age: 25 };
const clone2 = Object.assign({}, obj2);
clone2.age = 30;
console.log(obj2.age); // 25

// 2. Deep copy (Sao chép sâu)
// a. Sử dụng JSON.stringify và JSON.parse
const obj3 = { name: "Hanh", age: 28, address: { city: "Hanoi" } };
const deepClone = JSON.parse(JSON.stringify(obj3));
deepClone.address.city = "HCM";
console.log(obj3.address.city); // Hanoi

// b. sử dụng structuredClone (ES2021)
const obj4 = { name: "Duc", address: { city: "HN" } };
const clone = structuredClone(obj);

clone.address.city = "HCM";
console.log(obj4.address.city); // HN
```

## question 12
``` javascript
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
```

## question 13
``` javascript
// Sự khác nhau giữa require và import?
// 1. require
// - Là một hàm được sử dụng trong Node.js để nhập các module.
// - Sử dụng cú pháp CommonJS.
// - Có thể được sử dụng ở bất kỳ đâu trong mã nguồn, không cần phải đặt ở đầu file.
// ví dụ:
const fs = require('fs'); // Nhập module fs

// 2. import
// - Là một từ khóa trong ES6 (ECMAScript 2015) để nhập các module.
// - Sử dụng cú pháp ES6.
// - Chỉ có thể được sử dụng ở đầu file hoặc trong module.
// - Cần phải sử dụng `type="module"` trong file HTML hoặc cấu hình Babel để hỗ trợ cú pháp này.
// ví dụ:
import { readFile } from 'fs/promises'; // Nhập hàm readFile từ module fs/promises  
```

## question 14
``` javascript
// Output của đoạn code sau ?
function test() {
    return
    {
      a: 'b'
    }
}
console.log(test()); // undefined

// lý do undefined là do JavaScript tự động chèn dấu chấm phẩy sau từ khóa return,
```

## question 15
``` javascript
console.log([] == []); // false
// lý do là vì mỗi mảng là một đối tượng khác nhau trong bộ nhớ, nên so sánh tham chiếu không bằng nhau.
// do đó kết quả là false.
```