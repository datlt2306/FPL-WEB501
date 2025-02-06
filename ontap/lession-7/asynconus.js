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

// Ví dụ 2

function buyRing(callback, errorCallback) {
    console.log("🛍️ Đang đi mua nhẫn... (chờ 2 giây)");
    setTimeout(() => {
        let success = Math.random() > 0.3;
        success ? callback() : errorCallback("💸 Hết nhẫn hoặc quên ví...");
    }, 2000);
}

function bookRestaurant(callback, errorCallback) {
    console.log("🍽️ Đang đặt bàn nhà hàng... (chờ 2 giây)");
    setTimeout(() => {
        let success = Math.random(`r`) > 0.3;
        success ? callback() : errorCallback("🚫 Nhà hàng hết chỗ...");
    }, 2000);
}

function inviteFriends(callback, errorCallback) {
    console.log("🎉 Đang mời bạn bè... (chờ 2 giây)");
    setTimeout(() => {
        let success = Math.random() > 0.3;
        success ? callback() : errorCallback("🙅 Có người bận, không ai đi...");
    }, 2000);
}

function propose() {
    console.log("💘 Quỳ xuống và nói: 'Em có đồng ý làm vợ anh không?'");
}

// Callback Hell
buyRing(
    () => {
        bookRestaurant(
            () => {
                inviteFriends(
                    () => {
                        propose();
                    },
                    (error) => console.log(error + " 💔 Không thể cầu hôn.")
                );
            },
            (error) => console.log(error + " 💔 Không thể tổ chức cầu hôn.")
        );
    },
    (error) => console.log(error + " 💔 Cầu hôn thất bại ngay từ đầu.")
);
