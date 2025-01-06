function sum(a, b) {
    // Kiểm tra giá trị đầu vào
    if (typeof a !== "number" || typeof b !== "number") return "Đầu vào không đúng";
    // xử lý
    const result = a + b;
    // trả về kết quả
    return result;
}
console.log(sum("10", 20));

function showProducts(data) {
    // kiểm tra
    if (!Array.isArray(data)) return "Dữ liệu không đúng";
    // xử lý
    const result = data.map((item) => {
        return item.price * 2;
    });
    // trả về kết quả
    return result;
}
console.log(
    showProducts([
        { id: 1, price: 100 },
        { id: 2, price: 200 },
    ])
);
