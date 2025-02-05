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
        let success = Math.random() > 0.3;
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
