import { createRoot } from "react-dom/client";

const a = 10;
const b = 20;
const myInfo = {
    name: "Đạt",
    age: 30,
    isMarried: true,
};

// document.querySelector('#root').innerHTML = a + b;
createRoot(document.getElementById("root")).render(
    <div>
        <h2>Họ và tên: {myInfo.name}</h2>
        <p>Tuổi: {myInfo.age}</p>
        <p>Tình trạng: {myInfo.isMarried ? "Đã có gia đình" : "Chưa có"}</p>
    </div>
);
