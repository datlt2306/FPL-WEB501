import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const myInfo = {
    name: "Lê Trọng Đạt",
    age: 36,
    isMarried: true,
};
createRoot(document.getElementById("root")).render(
    <div>
        <h1>Xin chào {myInfo.name}</h1>
        <p>Tuổi: {myInfo.age}</p>
        <p>Tình trạng: {myInfo.isMarried ? "đã chết" : "Tuyệt vời"}</p>
    </div>
);
