import { createRoot } from "react-dom/client";
import "./index.css";

// dữ liệu
const data = {
    name: "Lê Trọng Đạt",
    age: 36,
    isMarried: true,
};
// Hàm xử lý
const displayStudentInfo = (student) => {
    console.log(student); // { name: "Lê Trọng Đạt", age: 36, isMarried: true}
    return (
        <div>
            <h1>Xin chào: {student.name}</h1>
            <p>Tuổi: {student.age}</p>
            <p>Tình trạng: {student.isMarried ? "đã chết" : "Tuyệt vời"}</p>
        </div>
    );
};
createRoot(document.getElementById("root")).render(<div>{displayStudentInfo(data)}</div>);
// https://www.youtube.com/@codewithdat
