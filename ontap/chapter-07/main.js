
const getUrl = (url) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = () => resolve(script);
        script.onerror = () => reject(null, 'Error');
        document.head.appendChild(script);
    });
}
// getUrl('https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js', function (script, error) {
//     if (error) {
//         console.log('Error', error)
//     } else {
//         getUrl('https://cdn.tailwindcss.com', function (script, error) {
//             if (error) {
//                 console.log('Error', error)
//             } else {
//                 getUrl('https://cdn.tailwindcss.com', function (script, error) {
//                     if (error) {
//                         console.log('Error', error)
//                     } else {
//                         console.log('Tải thư viện thành công!')
//                     }
//                 })
//             }
//         });
//     }
// });

getUrl('https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js')
    .then(ketQua1 => ketQua1)
    .then(ketQua2 => {})
    .then(ketQua3 => {})
    .catch(error => console.log(error))


// xây dựng kế hoạch
const cauHon = () => {
    return new Promise((resolve, reject) => {
        const status = true;
        console.log('Chạy...!');
        setTimeout(() => {
            if(!status) reject('Cút!!!');
            return resolve('Gật đầu đồng ý');
        }, 3000)       
    });
}

// thực hiện kế hoạch
cauHon()
    .then((ketQua1) => ketQua1 + ' Cho ôm cái')
    .then(ketQua2 => console.log(ketQua2))
    .catch(error => console.log(error))



//**==========================

const API_URL = 'https://jsonplaceholder.typicode.com/posts';
const resultElement = document.querySelector('#result');

const getPosts = () => {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            const newData = data.map(post => {
                return `
                    <div>
                    <h2>${post.title}</h2></div>
                `;
            }).join('');
            resultElement.innerHTML = newData;
        })    
}

getPosts();

// // Lấy danh sách
// .GET(`${API_URL}/posts`)
// // Lấy một bản ghi
// .GET(`${API_URL}/posts/${id}`)
// // Thêm 1 bản ghi
// .POST(`${API_URL}/posts`, { data })
// // Cập nhật
// .PUT(`${API_URL}/posts/${id}`, { data })
// // Xóa
// .DELETE(`${API_URL}/posts/${id}`)


