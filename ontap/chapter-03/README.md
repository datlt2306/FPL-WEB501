## Checklist Nội Dung Chi Tiết Buổi Học ECMA Số 3

### Chủ Đề: DOM, Array, Object, Loop

#### 1. DOM (Document Object Model)

- **Định nghĩa DOM:** DOM là mô hình tài liệu đối tượng, cho phép thao tác cấu trúc, nội dung và style của trang web.
- **Ví dụ truy cập và thao tác DOM:**
    - Lấy phần tử theo id:
        ```js
        let title = document.getElementById("main-title");
        ```
    - Thay đổi nội dung của phần tử:
        ```js
        title.innerText = "Chào mừng đến với khóa học!";
        ```
    - Thêm class:
        ```js
        title.classList.add("highlight");
        ```
    - Gắn sự kiện click:
        ```js
        let btn = document.querySelector(".btn-change-color");
        btn.addEventListener("click", function () {
            document.body.style.backgroundColor = "yellow";
        });
        ```

- **Câu hỏi ứng dụng AI:**
    - Hãy sử dụng một công cụ AI (ví dụ ChatGPT ), đặt câu hỏi: "DOM là gì? Điểm khác biệt giữa DOM và HTML?" và so sánh câu trả lời AI với ghi chú trên lớp. Viết lại ý chính rút ra được theo cách hiểu của bạn.

#### 2. Array (Mảng)

- **Ví dụ khởi tạo và thao tác mảng:**

    ```js
    let arr = [1, 2, 3, "hello", true];
    let arrObj = [
        { name: "An", age: 18 },
        { name: "Bình", age: 19 },
    ]; // Mảng chứa object

    console.log(arr[0]); // 1
    arr.push(999); // Thêm vào cuối mảng
    arr.shift(); // Xóa phần tử đầu tiên
    arr.forEach(function (value, index) {
        console.log(index, value);
    });

    // Duyệt mảng chứa object
    arrObj.forEach(function (item, index) {
        console.log(index, item.name, item.age);
    });
    ```

- **Lặp qua mảng bằng for of:**

    ```js
    for (let value of arr) {
        console.log(value);
    }

    for (let obj of arrObj) {
        console.log(obj.name, obj.age);
    }
    ```

- **Câu hỏi ứng dụng AI:**
    - Đặt câu hỏi cho AI: "Sự khác nhau giữa phương thức forEach và for...of trong xử lý mảng là gì? Khi nào nên dùng từng phương pháp?" Ghi lại câu trả lời giúp bạn hiểu thêm như thế nào, phân tích ví dụ minh hoạ.

#### 3. Object (Đối tượng)

- **Ví dụ khai báo và thao tác với object:**

    ```js
    let student = {
        name: "An",
        age: 18,
        score: 8.5,
        sayHello: function () {
            alert("Hello!");
        },
    };
    student.sayHello();
    student.gender = "male"; // Thêm thuộc tính
    student.name = "Bình"; // Sửa thuộc tính
    delete student.score; // Xoá thuộc tính
    console.log(student["name"]);
    ```

- **Câu hỏi ứng dụng AI:**
    - Hỏi AI: "Object trong JavaScript khác gì với Array? Có thể lồng object bên trong array và ngược lại không? Cho ví dụ." Tóm tắt lại nhận xét của bạn và ý chính AI trả lời.

#### 4. Loop (Vòng lặp)

- **Ví dụ các loại vòng lặp:**

    ```js
    // for
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

    // for...of cho array
    let nums = [3, 7, 2];
    for (let num of nums) {
        console.log(num);
    }

    // for...in cho object
    let car = { brand: "Toyota", year: 2020 };
    for (let key in car) {
        console.log(key, car[key]);
    }

    // forEach cho array
    nums.forEach(function (num, index) {
        console.log("forEach", index, num);
    });
    ```

- **Câu hỏi ứng dụng AI:**
    - Đặt câu hỏi cho AI: "Sự khác nhau giữa các vòng lặp for, for...of, for...in, và forEach trong JavaScript là gì? Cho ví dụ và trường hợp sử dụng phù hợp từng loại." Sau đó ghi chú lại kiến thức mới bạn học được.

#### 5. Thực Hành

- **Bài tập ví dụ:**
    1. Tạo một trang HTML hiển thị danh sách sinh viên (object trong array), thêm nút để thêm/xoá sinh viên khỏi danh sách.
    2. Form nhập thông tin sản phẩm (tên, giá), lưu sản phẩm vào mảng, hiển thị danh sách sản phẩm phía dưới.
    3. Viết function tính tổng điểm tất cả sinh viên và tìm sinh viên điểm cao nhất với vòng lặp.
    4. Nút bấm đổi màu nền trang bằng thao tác DOM.
    5. (Nâng cao) Làm form thêm bài viết, có thể sửa/xoá bài viết, thực hành thao tác object/array/DOM tổng hợp.

- **Câu hỏi ứng dụng AI:**
    - Yêu cầu AI đề xuất giải pháp tối ưu hoặc mã mẫu cho một trong các bài tập trên, sau đó thử nghiệm, đánh giá và ghi lại nhận xét của bạn về mã do AI sinh ra.
