/**
 * Cú pháp ES6 - ECMAScript 6
 * - Biến: let, var, const
 * - Function : arrow function, IFFE, anonymous function, callback
 * - Object
 * - Array: map, filter, reduce
 * - Destructoring
 * - Spread operator
 * - Module: import/export
 */
/**
 * Biến: let, const, var
 * - Khi nào sử dụng let(chưa xác định giá trị), const(mặc định), var(bỏ)
 * - Đặt tên biến như nào cho chuẩn quốc tế (camelCase)
 */

var a = 10;
a = 20;
console.log(a); // 20

let b = 10;
b = 20;
console.log(b);

const c = 10;
console.log(c);

const user = {
    name: "Đạt",
};
console.log(user);
user.name = "Kiên";
console.log(user);

// Tên biến là một danh từ hoặc một cụm danh từ
const myFullName = "Lê Trọng Đạt";
const myAge = 36;
const myStatus = true;

const myInfo = {
    fullname: "Lê Trọng Đạt",
    age: 36,
    status: true,
};

const product = {
    name: "Sản phẩm A",
    price: 1000,
    inStock: true,
};
const products = [{}, {}];
const productList = [{}, {}];
const roles = ["admin", "editor", "user"];
const roleList = ["admin", "editor", "user"];

// Tên hàm phải là 1 động từ
function getFullName() {}
function removeProductById(id) {}
function showProfileUser() {}
function addProduct() {}
//

function sum(a, b) {
    // kiểm tra
    if (typeof a !== "number" || typeof b !== "number") return "Vui lòng nhập số";
    // xử lý
    const result = a + b;
    //trả về kết quả
    return result;
}

const result = sum("10", 20);
console.log("Result ", result);
