// Callback là một hàm được truyền như đối số vào một hàm khác, và nó sẽ được gọi (call back) khi hàm kia hoàn thành công việc.
// nói cho dễ hiểu hơn là hàm A sẽ gọi hàm B và đưa cho hàm B một hàm khác là callback, khi hàm A hoàn thành công việc của nó thì nó sẽ gọi hàm B và truyền cho nó callback đó.
// Ví dụ về callback trong JavaScript
function doTask(taskname , callback) {
    console.log(`bắt đầu task ${taskname}`);
    console.log(`kết thúc task ${taskname}`);
    callback();
}

doTask("Download file", () => {
    console.log("Download file xong, bắt đầu task tiếp theo");
})

// Callback hell là hiện tượng khi dùng quá nhiều callback lồng nhau làm cho code trở nên khó đọc và bảo trì.
// Ví dụ về callback hell
doTask("A", () => {
    doTask("B", () => {
        doTask("C", () => {
            console.log("Xong hết!");
        });
    });
});