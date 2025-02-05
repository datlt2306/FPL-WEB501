// function loadScript(src, callback) {
//     let script = document.createElement("script");
//     script.src = src;
//     script.onload = () => callback(script);
//     document.head.append(script);
// }
// loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js", (script) => {
//     console.info(`Cool, the script ${script.src} is loaded`);
// }); // setTimeout();

function fetchData(callback) {
    console.log("Đang lấy dữ liệu...");

    setTimeout(() => {
        const data = { id: 1, name: "Alice", age: 25 };
        console.log("Dữ liệu đã tải xong!");
        callback(data);
    }, 2000);
}
// Callback để xử lý dữ liệu
function displayData(data) {
    console.log("Dữ liệu nhận được:", data);
}
