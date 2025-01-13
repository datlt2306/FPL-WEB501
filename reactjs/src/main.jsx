import { createRoot } from "react-dom/client";

const a = 10;
const b = 20;
const myInfo = {
    name: "Đạt",
    age: 30,
    isMarried: true,
};

function sum(a, b) {
    return a + b;
}
function showInfo(user) {
    return (
        <div>
            <h2>Họ và tên: {user.name}</h2>
            <p>Tuổi: {user.age}</p>
            <p>Tình trạng: {user.isMarried ? "Đã có gia đình" : "Chưa có"}</p>
            <p>{sum(a, b)}</p>
        </div>
    );
}

// document.querySelector('#root').innerHTML = a + b;
createRoot(document.getElementById("root")).render(
    <div>
        <p>Hàm info: {showInfo(myInfo)}</p>
    </div>
);
