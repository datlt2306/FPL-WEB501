import { createRoot } from "react-dom/client";
import "./index.css";

const student = {
    fullName: "Lê Trọng Đạt",
    age: 30,
    address: "Hà Nội",
    isMarried: false,
};
createRoot(document.getElementById("root")).render(
    <div>
        <h1>Student Information</h1>
        <p>Full Name: {student.fullName}</p>
        <p>Age: {student.age}</p>
        <p>Address: {student.address}</p>
        <p>Married: {student.isMarried ? "Chưa lấy vợ" : "Đã chết"}</p>
    </div>
);
