// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
// }
// function myCalculator(num1, num2, callback) {
//     let sum = num1 + num2;
//     callback(sum);
// }
// myCalculator(5, 5, myDisplayer);

/**
 * Bài tập callback
 * - Viết một hàm processNumbers nhận vào một mảng số và một hàm callback. Hàm này sẽ áp dụng callback lên từng phần tử trong mảng và trả về một mảng mới chứa kết quả.
 * Yêu cầu:
 * Viết hàm processNumbers(numbers, callback)
 * Viết một callback để bình phương từng số trong mảng.
 * Viết một callback để tăng mỗi số lên 10.
 * Gọi processNumbers với từng callback và in kết quả ra console.
 */

function processNumbers(numbers, callback) {
    let result = [];
    // numbers = [1,2,3,4,5]
    // num num num num num
    for (let num of numbers) {
        result.push(callback(num));
    }
    // result = [1,4,9,16,25]
    return result;
}

// Callback 1: Bình phương số
function square(num) {
    return num * num;
}

// Callback 2: Tăng lên 10
function addTen(num) {
    return num + 10;
}

// Test
const numbers = [1, 2, 3, 4, 5];

console.log("Bình phương:", processNumbers(numbers, square));
console.log("Tăng lên 10:", processNumbers(numbers, addTen));

// Bất đồng bộ

console.log(1);
setTimeout(() => {
    console.log(2);
}, 0);
console.log(3);
setTimeout(() => {
    console.log(4);
}, 0);
console.log(5);
console.log(6);
console.log(7);
