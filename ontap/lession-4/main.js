import multiply, { sum, showStudent, a } from "./sum.js";

console.log("export sum:", sum(10, 20));
console.log("export a: ", a);
showStudent({ name: "Đat" });
console.log("export default multiply: ", multiply(10, 20));
