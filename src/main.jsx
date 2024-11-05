import { createRoot } from "react-dom/client";
import "./index.css";

const student = {
    name: "Lê Trọng Đạt",
    code: "PH09999",
    age: 36,
    class: "WD19302",
};
function displayStudentInfo(student) {
    return (
        <div>
            <h1>Student Info</h1>
            <p>Name: {student.name}</p>
            <p>Code: {student.code}</p>
            <p>Age: {student.age}</p>
            <p>Class: {student.class}</p>
        </div>
    );
}

createRoot(document.getElementById("root")).render(displayStudentInfo(student));
// createRoot(where).render(what)
