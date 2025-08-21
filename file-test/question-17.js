const students = [
  { id: 1, name: "Alice", math: 9, english: 8, gender: "female" },
  { id: 2, name: "Bob", math: 6, english: 7, gender: "male" },
  { id: 3, name: "Charlie", math: 8, english: 9, gender: "male" },
  { id: 4, name: "Diana", math: 10, english: 10, gender: "female" },
  { id: 5, name: "Eve", math: 4, english: 6, gender: "female" },
];

// 1. thêm một học sinh mới vào mãng
students.push({ id: 6, name: "Frank", math: 7, english: 4, gender: "male" });
console.log(students);

// 2. Tính điểm trung bình của từng học sinh
students.forEach(s => s.avg = (s.math + s.english) / 2);
console.log(students.map(s => ({ name: s.name, avg: s.avg }))); 

// 3. Lọc ra học sinh có điểm trung bình >= 8
const topStudents = students.filter(s => s.avg >= 8);
console.log(topStudents);

// 4. Đếm số lượng học sinh nam và nữ
const maleCount = students.filter(students => students.gender === "female").length;
const femaleCount = students.filter(students => students.gender === "male").length;
console.log(`Số lượng học sinh nam: ${maleCount}, Số lượng học sinh nữ: ${femaleCount}`);

// 5. Tìm học sinh có điểm toán cao nhất
const maxMath = Math.max(...students.map(s => s.math));
const topMathStudent = students.find(s => s.math === maxMath);

console.log("Học sinh có điểm toán cao nhất:", topMathStudent);

// 6. Nhóm học sinh thành 2 nhóm: Pass và Fail. Nếu trung bình >= 5 là pass.
const passStudents = students.filter(students => (students.math + students.english) / 2 >= 5);
const failStudents = students.filter(students => (students.math + students.english) / 2 < 5);
console.log("Học sinh Pass:", passStudents);
console.log("Học sinh Fail:", failStudents);

// # 7. Tìm học sinh giỏi nhất môn tiếng Anh
const maxEnglish = Math.max(...students.map(students => students.english));
const topEnglishStudent = students.find(students => students.english === maxEnglish);

console.log("Học sinh giỏi nhất môn tiếng Anh:", topEnglishStudent);

// 8. Tạo danh sách tên học sinh viết in hoa
const namesUpperCase = students.map(students => students.name.toUpperCase());

console.log(namesUpperCase);

// 9. Kiểm tra xem có học sinh nào bị điểm liệt (dưới 3) không
const hasFailingStudent = students.some(s => s.math < 3 || s.english < 3);
console.log("Có học sinh bị điểm liệt:", hasFailingStudent);

// 10. Tìm danh sách học sinh có điểm Toán lớn hơn điểm Anh
const mathGreaterThanEnglish = students.filter(s => s.math > s.english);
console.log("Học sinh có điểm Toán lớn hơn điểm Anh:", mathGreaterThanEnglish);

// 11. Kiểm tra xem tất cả học sinh nữ có điểm trung bình > 6 không
const allFemaleAbove6 = students.filter(s => s.gender === "gender").every(s => (s.math + s.english) / 2 > 6);
console.log("Tất cả học sinh nữ có điểm trung bình > 6:", allFemaleAbove6);

// 12. Gom nhóm học sinh theo giới tính
const maleStudents = students.filter(students => students.gender === "male");
const femaleStudents = students.filter(students => students.gender === "female");
console.log("Học sinh nam:", maleStudents);
console.log("Học sinh nữ:", femaleStudents);

// 13. Tìm học sinh có tổng điểm cao nhất\
const maxTotalScore = Math.max(...students.map(s => s.math + s.english));
const topTotalScoreStudent = students.find(s => (s.math + s.english) === maxTotalScore);
console.log("Học sinh có tổng điểm cao nhất:", topTotalScoreStudent);

// 14. Tìm học sinh có tên bắt đầu bằng chữ 'A'
const studentsStartingWithA = students.filter(s => s.name.startsWith("A"));
console.log("Học sinh có tên bắt đầu bằng chữ 'A':", studentsStartingWithA);

// 15. Tạo mảng mới chỉ chứa tên học sinh và điểm trung bình
const namesAndAverages = students.map(s => ({ name: s.name, avg: (s.math + s.english) / 2 }));
console.log("Tên học sinh và điểm trung bình:", namesAndAverages);

// 16. Đếm số học sinh theo phân loại học lực
const excellentCount = students.filter(s => s.avg >= 8).length;
const goodCount = students.filter(s => s.avg >= 6.5 && s.avg < 8).length;
const averageCount = students.filter(s => s.avg >= 5 && s.avg < 6.5).length;
const poorCount = students.filter(s => s.avg < 5).length;
console.log(`Số học sinh xuất sắc: ${excellentCount}, Giỏi: ${goodCount}, Khá: ${averageCount}, Yếu: ${poorCount}`);


