// function name - function declaration
// excute function

function sum(a, b) {
    return a + b;
}
console.log("Function name: ", sum(10, 20));

//  function expression
const sum2 = function (a, b) {
    return a + b;
};
console.log("Function Expression:", sum2(10, 20));
//  arrow function
const sum3 = (a, b) => a + b;
console.log("Arrow function:", sum3(10, 20));

// immediately invoked function expression (IIFE)
// function tự động gọi ngay khi khai báo
console.log("IIFE function", ((a, b) => a + b)(10, 20));

// function name
// function express => khai báo biến có giá trị là 1 function
// arrow function => cú pháp viết tắt của function expression
// IIFE => hàm của function expression => khai báo và gọi luôn
