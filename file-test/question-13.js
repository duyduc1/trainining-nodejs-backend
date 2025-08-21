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

