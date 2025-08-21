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
console.log(obj4.address.city); // HN ✅
