const students = [
  { id: 1, name: "Alice", math: 9, english: 8, gender: "female" },
  { id: 2, name: "Bob", math: 6, english: 7, gender: "male" },
  { id: 3, name: "Charlie", math: 8, english: 9, gender: "male" },
  { id: 4, name: "Diana", math: 10, english: 10, gender: "female" },
  { id: 5, name: "Eve", math: 4, english: 6, gender: "female" },
];

// 1. Thêm học sinh mới
function addStudent(student) {
  students.push(student);
}

// 2. Tính điểm trung bình
function calculateAverage() {
  return students.map(s => {
    s.avg = (s.math + s.english) / 2;
    return { name: s.name, avg: s.avg };
  });
}

// 3. Lọc học sinh có điểm trung bình >= 8
function getTopStudents() {
  return students.filter(s => s.avg >= 8);
}

// 4. Đếm học sinh nam và nữ
function countGender() {
  const maleCount = students.filter(s => s.gender === "male").length;
  const femaleCount = students.filter(s => s.gender === "female").length;
  return { maleCount, femaleCount };
}

// 5. Học sinh có điểm toán cao nhất
function topMathStudent() {
  return students.reduce((top, s) => {
    return (!top || s.math > top.math) ? s : top;
  }, null);
}

// 6. Nhóm học sinh Pass/Fail
function groupPassFail() {
  const pass = [];
  const fail = [];
  students.forEach(s => {
    if (s.avg >= 5) pass.push(s);
    else fail.push(s);
  });
  return { pass, fail };
}

// 7. Học sinh giỏi nhất môn tiếng Anh
function topEnglishStudent() {
  return students.reduce((top, s) => {
    return (!top || s.english > top.english) ? s : top;
  }, null);
}

// 8. Danh sách tên viết in hoa
function getNamesUpperCase() {
  return students.map(s => s.name.toUpperCase());
}

// 9. Kiểm tra học sinh bị điểm liệt
function hasFailingStudent() {
  return students.some(s => s.math < 3 || s.english < 3);
}

// 10. Học sinh có điểm Toán > điểm Anh
function mathGreaterThanEnglish() {
  return students.filter(s => s.math > s.english);
}

// 11. Kiểm tra tất cả học sinh nữ có trung bình > 6
function allFemaleAbove6() {
  return students
    .filter(s => s.gender === "female")
    .every(s => s.avg > 6);
}

// 12. Gom nhóm học sinh theo giới tính
function groupByGender() {
  return students.reduce((acc, s) => {
    if (s.gender === "male") acc.male.push(s);
    else if (s.gender === "female") acc.female.push(s);
    return acc;
  }, { male: [], female: [] });
}

// 13. Học sinh có tổng điểm cao nhất
function topTotalScoreStudent() {
  return students.reduce((top, s) => {
    const total = s.math + s.english;
    const topTotal = top ? top.math + top.english : 0;
    return total > topTotal ? s : top;
  }, null);
}

// 14. Học sinh có tên bắt đầu bằng chữ 'A'
function studentsStartingWithA() {
  return students.filter(s => s.name.toLowerCase().startsWith("a"));
}

// 15. Mảng tên học sinh và điểm trung bình
function namesAndAverages() {
  return students.map(s => ({ name: s.name, avg: s.avg }));
}

// 16. Đếm học sinh theo phân loại học lực
function countByClassification() {
  return students.reduce((acc, s) => {
    if (s.avg >= 8) acc.excellent++;
    else if (s.avg >= 6.5) acc.good++;
    else if (s.avg >= 5) acc.average++;
    else acc.poor++;
    return acc;
  }, { excellent: 0, good: 0, average: 0, poor: 0 });
}

// --- Ví dụ sử dụng ---
addStudent({ id: 6, name: "Frank", math: 7, english: 4, gender: "male" });
calculateAverage();

console.log("Top students:", getTopStudents());
console.log("Số lượng theo giới tính:", countGender());
console.log("Học sinh toán cao nhất:", topMathStudent());
console.log("Nhóm Pass/Fail:", groupPassFail());
console.log("Học sinh Anh cao nhất:", topEnglishStudent());
console.log("Tên viết in hoa:", getNamesUpperCase());
console.log("Có học sinh điểm liệt:", hasFailingStudent());
console.log("Toán > Anh:", mathGreaterThanEnglish());
console.log("Tất cả nữ > 6:", allFemaleAbove6());
console.log("Nhóm theo giới tính:", groupByGender());
console.log("Tổng điểm cao nhất:", topTotalScoreStudent());
console.log("Tên bắt đầu A:", studentsStartingWithA());
console.log("Tên + trung bình:", namesAndAverages());
console.log("Phân loại học lực:", countByClassification());
