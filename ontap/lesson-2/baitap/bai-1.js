const studentList = [
    {
        name: "Lê Trọng Đạt",
        age: 36,
        class: "WD19305",
        email: "datlt34@fpt.edu.vn",
    }, // student
    {
        name: "Trần Trung Kiên",
        age: 26,
        class: "WD19301",
        email: "kienph2222@fpt.edu.vn",
    }, // student
    {
        name: "Nguyễn Thúy Quỳnh",
        age: 33,
        class: "WD19310",
        email: "quynhph111@fpt.edu.vn",
    }, // student
];

const displayStudentInfo = (students) => {
    // Kiểm tra
    if (!Array.isArray(students) || students.length === 0) return "";
    return students
        .map((student) => {
            return ` 
            <li>Họ và tên: ${student.name}</li>
            <li>Tuổi: ${student.age}</li>
            <li>Lớp: ${student.class}</li>
            <li>Email: ${student.email}</li>
        `;
        })
        .join("");
};

document.querySelector("#content").innerHTML = displayStudentInfo(studentList);
/**
 * Bước 1: Tạo object student
 * Bước 2: Truyền object vào hàm displayStudentInfo
 * Bước 3: Hiển thị dữ liệu ra ngoài màn hình
 */

// Yêu cầu :  tìm hiểu các phương thức xử lý mảng trong javascript: map, filter, find, reduce
