function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}
function myCalculator(num1, num2, callback) {
    let sum = num1 + num2;
    callback(sum);
}
myCalculator(5, 5, myDisplayer);

/**
 * Bài tập callback
 * - Viết một hàm processNumbers nhận vào một mảng số và một hàm callback. Hàm này sẽ áp dụng callback lên từng phần tử trong mảng và trả về một mảng mới chứa kết quả.
 * Yêu cầu:
 * Viết hàm processNumbers(numbers, callback)
 * Viết một callback để bình phương từng số trong mảng.
 * Viết một callback để tăng mỗi số lên 10.
 * Gọi processNumbers với từng callback và in kết quả ra console.
 */
