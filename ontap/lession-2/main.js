// Đặt tên biến
// Danh từ

const roles = ["Admin", "Editor", "User"];
const student = {
    name: "John",
    age: 20,
    role: "Admin",
};
const studentList = [];
const isStatus = true;
const myName = {
    age: 20,
};

// Động từ

function showProducts() {}
function removeProduct(id) {}
function getProductById(id) {}
// Bài tập
const friendList = ["Đạt", "Minh", "Hòa", "Ngọc"];
const profile = {
    name: "Đạt",
    age: 30,
    email: "datlt34@fpt.edu.vn",
};

const resultTotalFromZeroToHundred = 5050;

// 2
// [1,5,6,12,7,9,10,15,20,30,50,100]
function findMax(numbers) {
    if (!Array.isArray(numbers)) return "Dữ liệu không đúng";
    return Math.max(...numbers);
}
function reverseString(name) {
    // Đạt => ['Đ', 'ạ', 't] => ['t', 'ạ', 'Đ'] => 'tạĐ'
    if (typeof name !== "string") return "Dữ liệu không đúng";
    return name.split("").reverse().join("");
}
function filterEvenNumbers(numbers) {
    if (!Array.isArray(numbers)) return "Dữ liệu không đúng";
    return numbers.filter(function (number) {
        return number % 2 === 0;
    });
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// dùng chatgpt, đọc hiểu từng dòng
// ( validate, processing, return)
// ngắn và tốt nhất có thể
