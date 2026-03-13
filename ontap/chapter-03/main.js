
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

