// ES6 syntax
/*
- Biến : let, const, var
- Arrow function
- Destructoring
- Spread operator
- Module : import & export 
*/
/* */
// Biến: let, const và var
var a = 10;
a = 20;
console.log(a);

let b = 10;
b = 20;

console.log(b);

const c = 10;
c = 20;
console.log(c);
// Khi nào sử dụng let(xác định có thể thay đổi giá trị), const(mặc định) và var(bỏ)
// Đặt tên biến: camelCase
// Mặc định biến sẽ là 1 danh từ. Ví dụ myName, myProduct, age, person, myClassName...
// Tên hàm sẽ là 1 động từ. Ví dụ: getName, getAge, getProductById, showName, showAge, removeProductById...
const myFullName = "Lê Trọng Đạt";
const myStatus = true;
const myAge = 36;
const myInfo = {
    fullName: "Lê Trọng Đạt",
    age: 36,
    status: true,
};
const product = {
    id: 1,
    name: "Iphone 12",
    price: 1000,
    status: true,
};
const productList = [];
const users = [];
const userList = [];
const roles = [];
const rolesList = [];

// tên hàm

function removeProductById(id) {}
function addProduct(product) {}
function showProfile() {}

// const không thay đổi được giá trị

const person = {
    name: "Đạt",
};
person.name = "Kiên";
console.log(person);

const myNumber = [1, 2, 3, 4];
myNumber.push(5);
console.log(myNumber); // [1,2,3,4,5];
// Tham trị và tham chiếu
// Tham trị là giá trị của biến được lưu trữ trong bộ nhớ: string, number, boolean
// Tham chiếu là địa chỉ của biến được lưu trữ trong bộ nhớ: object và array

// Sự khác nhau giữa let, var, const. Khi nào sử dụng?
// Đặt tên biến như thế nào là chuẩn quốc tế??
// Object nó là gì?
// Tham trị và tham chiếu
