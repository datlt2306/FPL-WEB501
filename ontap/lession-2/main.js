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
const findMax = (numbers) => {
    if (!Array.isArray(numbers)) return "Dữ liệu không đúng";
    return Math.max(...numbers);
};
const reverseString = (name) => {
    if (typeof name !== "string") return "Dữ liệu không đúng";
    return name.split("").reverse().join("");
};
const filterEvenNumbers = (numbers) => {
    if (!Array.isArray(numbers)) return "Dữ liệu không đúng";
    return numbers.filter((number) => {
        if (typeof number !== "number") return "Không tính toán được";
        return number % 2 === 0;
    });
};

// function name
function sum(a, b) {
    return a + b;
}
// expression function
const sum1 = function (a, b) {
    return a + b;
};
// arrow function
const sum2 = (a, b) => a + b;

// dùng chatgpt, đọc hiểu từng dòng
// ( validate, processing, return)
// ngắn và tốt nhất có thể
