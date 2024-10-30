const student = {
    name: "Lê Trọng Đạt",
    age: 36,
    class: "WD19305",
    email: "datlt34@fpt.edu.vn",
};

const displayStudentInfo = (student) => {
    return `
        <li>Họ và tên: ${student.name}</li>
        <li>Tuổi: ${student.age}</li>
        <li>Lớp: ${student.class}</li>
        <li>Email: ${student.email}</li>
    `;
};
console.log(displayStudentInfo(student));

document.querySelector("#content").innerHTML = displayStudentInfo(student);
