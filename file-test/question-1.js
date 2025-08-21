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


