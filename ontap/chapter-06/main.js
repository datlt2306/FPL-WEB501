// // callback
// // const displayer = (some) => {
// //     document.getElementById('#result').innerHTML = some;
// // }
// // const total = (a, b) => {
// //     return a + b;
// // }
// // const result = total(5, 10);
// // displayer(result);

// // const displayer = (some) => {
// //     document.getElementById('#result').innerHTML = some;
// // }
// // const total = (a, b) => {
// //     displayer(a + b);
// // }
// // total(5, 10);


// // callback
// // callback là 1 hàm được truyền vào 1 hàm khác như 1 đối số

// // const total = (a, b, callback) => {
// //     callback(a + b);
// // }
// // total(5, 10, (some) => {
// //     document.getElementById('#result').innerHTML = some;
// // });


// console.log('Có 1 div để sau hiển thị danh sách sản phẩm');
// setTimeout(function () {
//     console.log('Gọi lên server để lấy danh sách sản phẩm');
// }, 0);
// console.log('Hiển thị danh sách sản phẩm ra div');


// const getUser = (callback) => {
//     setTimeout(() => {
//         callback({
//             name: "Đạt",
//             age: 38
//         });
//     }, 2000);
// };
// getUser(function (user) {
//     console.log(user);
// });

// function getProducts() {
//     console.log("Đang gọi API...");

//     setTimeout(() => {
//         const products = [
//             { id: 1, name: "iPhone" },
//             { id: 2, name: "Samsung" }
//         ];

//         return products; // ❌ vô nghĩa
//     }, 2000);
// }

// const products = getProducts();
// console.log(products);




const getProducts = (callback) => {
    console.log('Call API...')
    setTimeout(() => {
        callback([{ id: 1, name: "iPhone" }, { id: 2, name: "Samsung" }]);
    }, 2000)
}
getProducts((products) => {
    console.log('Danh sách sản phẩm!')
    products.forEach(item => {
        console.log('item', item.name)
    })
});