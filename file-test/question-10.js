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
