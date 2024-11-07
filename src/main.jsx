import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client";
import "./index.css";
import React from "react";
// B1: Tạo biến user có giá trị là một object chứa thông tin về người dùng
const user = {
    firstName: "John",
    lastName: "Doe",
};
// B2: khai báo hàm nhận 1 object và hiển thị thông tin ra ngoài
function displayName(user) {
    return user.firstName + " " + user.lastName;
}
// B3: khai báo biến element chứa h1 hiển thị thông tin người dùng
const element = <h1>{displayName(user)}</h1>;
createRoot(document.getElementById("root")).render(
    <div>
        <p>Họ và tên : {element}</p>
    </div>
);
