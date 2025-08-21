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
