import multiply, { sum, showStudent, a } from "./sum.js";

console.log("export sum:", sum(10, 20));
console.log("export a: ", a);
showStudent({ name: "Đat" });
console.log("export default multiply: ", multiply(10, 20));
// Destructoring assignment => phá hủy

// destructoing object
const student = {
    name: "Lê Trọng Đạt",
    age: 36,
    address: "Hà Nội",
};

function showStudent({ name, age }) {
    return (
        <div>
            <h1>Xin chào {name}</h1>;<p>Tuổi: {age}</p>
        </div>
    );
}
showStudent(student);
