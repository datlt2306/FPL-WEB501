import { createRoot } from "react-dom/client";
import "./index.css";

const myInfo = {
    name: "Lê Trọng Đạt",
    age: 36,
    isMarried: true,
};
const myName = "Lê Trọng Đạt";

function sum(a, b) {
    // kiểm tra
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("a và b phải là số");
    }
    return a + b;
}

createRoot(document.getElementById("root")).render(
    <div>
        <h1>Xin chào {myName}</h1>
        <p>Tuổi: {myInfo.age}</p>
        <p>Tình trạng: {myInfo.isMarried ? "đã chết" : "Tuyệt vời"}</p>
        <p>Tính tổng: {sum(10, 20)}</p>
    </div>
);
