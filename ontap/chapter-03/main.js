
// SELECTOR - getElementById | querySeletor | querySelectorAll
// const mainTitle = document.getElementById('title');
// console.log(mainTitle);

const mainTitle = document.querySelector('#title');
console.log(mainTitle);
mainTitle.addEventListener('click', function () {
    // Thay đổi màu nền của text
    mainTitle.style.background = 'red';
    // Thay đổi nội dung của phần tử
    mainTitle.innerText = 'Hello World 2';
    // Thêm class vào phần tử
    mainTitle.classList.add('common-title');
})


// Array
const students = [
    {
        name: "Đạt",
        age: 20
    },  // Gán cho biến student
    {
        name: "Kiên",
        age: 30
    } // gán cho biến student
];

// Loop
// cú pháp ( syntax ): for(biến, điều kiện, biểu thức){}
for (let index = 0; index < students.length; index++) {
    const student = students[index];
    console.log(student.name);
};

// for...in
// cú pháp : for(tên biến in mảng){} 
// Sử dụng index để hiển thị ra phần tử trong mảng
for (let index in students) {
    const student = students[index];
    console.log(index, student.name);
}
// for...of
// cú pháp: for(tên biến of mảng){}
// Sử dụng value để hiển thị ra phần tử trong mảng

for (let student of students) {
    console.log(student.name);
}

// array.forEach
// cú pháp : array.forEach(function(value, index){})

students.forEach(function (student, index) {
    console.log(`${student.name} - ${index}`);
})