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
