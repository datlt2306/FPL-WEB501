// DOM - querySelector và querySelectorAll, getElementById

const data = ['Việc 1', 'Việc 2', 'Việc 3', 'Việc 4'];
const todos = document.querySelector('#todos');
let content = "";
// for loop
// for (let i = 0; i < data.length; i++) {
//     content += `<li>${data[i]}</li>`;
//     console.log("content", content);
// }

// for...in
// for (let i in data) {
//     content += `<li>${data[i]}</li>`;
// }

// for...of
// for (let item of data) {
//     content += `<li>${item}</li>`;
// }

data.forEach((item, index) => {
    content += `<li>${item} - ${index}</li>`;
})
todos.innerHTML = content;


const persons = [
    {
        name: "Dat",
        age: 20
    }, // user
    {
        name: "Kien",
        age: 30,
    },  // user

    {
        name: "Chinh",
        age: 40
    }];

let userContent = "";
persons.forEach((user) => {
    userContent += `<li>${user.name} - ${user.age}</li>`
})

const userElement = document.querySelector('#users');
userElement.innerHTML = userContent;