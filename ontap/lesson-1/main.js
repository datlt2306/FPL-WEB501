// Tên biến Danh từ: product, myName, myStatus
const productName = "Sản phẩm A";
const productPrice = 200;
const productInstock = true;
const productQuantity = 100;
// Nếu biến là 1 mảng thì tên biến phải là danh từ số nhiều
const products = [];
const productList = [];
const userList = [];
const roles = [];
/** Tên hàm là 1 động từ */
function removeProductById(id) {}
function addProduct() {}
function updateProduct() {}
function getProfileUser(slug) {}

// Demo hàm trả về kết quả
function sum(a, b) {
    // Kiểm tra
    if (typeof a !== "number" || typeof b !== "number") {
        return "Tham số truyền vào không phải kiểu number";
    }
    // Thực thi công việc
    const result = a + b;
    // trả về kết quả
    return result;
}
// excute function
console.log(sum(10, 20));

// sự khác nhau về let, const và var
// khi nào sử dụng let, const và var
// đặt tên biến hoặc tên hàm theo quy tắc chuẩn quốc tế
// khi khai báo hàm cần nguyên tắc gì? kiểm tra, thực thi và trả về kết quả
