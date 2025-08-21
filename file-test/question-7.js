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
