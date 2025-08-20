// một vòng lăp for truyền thống 
const arr = [1, 2, 3, 4];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// Output: 1, 2, 3, 4

console.log("-------------------");

// forEach sẽ duyệt từng phần tử bên trong mảng nhưng sẽ không trả về mãng mới
const arr1 = [1, 2, 3];
arr1.forEach(num => console.log(num * 2));
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