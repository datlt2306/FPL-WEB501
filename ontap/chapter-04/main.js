const students = [
    { id: 1, name: "Đạt", age: 20 }, // student
    { id: 2, name: "Kiên", age: 30 },
    { id: 3, name: "Huy", age: 25 },
    { id: 4, name: "Tùng", age: 22 },
    { id: 5, name: "Hải", age: 23 },
    { id: 6, name: "Long", age: 24 },
    { id: 7, name: "Thành", age: 25 },
    { id: 8, name: "Thắng", age: 26 },
    { id: 9, name: "Thế", age: 27 },
    { id: 10, name: "Thiện", age: 28 },
]

const studentsElement = document.getElementById('students');
const renderStudents = () => {
    studentsElement.innerHTML = students.map((student) => {
        return `<li>${student.name} - ${student.age}</li>`;
    }).join("");
}

renderStudents();