import { createRoot } from "react-dom/client";

function StudentCard() {
    const name = "Nhập tên của bạn";
    const dob = "dd/mm/yyyy";
    const hometown = "Nhập quê quán";
    const hobby = "Nhập sở thích";

    return (
        <div className="student-card">
            <h2>{name}</h2>
            <p>Ngày sinh: {dob}</p>
            <p>Quê quán: {hometown}</p>
            <p>Sở thích: {hobby}</p>
        </div>
    );
}

function StudentList() {
    const students = ["Nguyễn Văn A", "Trần Thị B", "Lê Văn C"];

    return (
        <div className="student-list">
            <h2>Danh sách sinh viên</h2>
            <ul>
                <li>{students[0]}</li>
                <li>{students[1]}</li>
                <li>{students[2]}</li>
            </ul>
        </div>
    );
}
createRoot(document.getElementById("root")).render(
    <div>
        <StudentCard />
        <StudentList />
    </div>
);
