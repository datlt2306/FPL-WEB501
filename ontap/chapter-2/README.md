1. Dùng AI tìm hiểu sự khác nhau giữa const, var, let. Cho một vài ví dụ.
2. Khi nào sử dụng const, var, let??
3. Giải thích tham chiếu và tham trị trong js

Ví dụ:

```js
const a = 10;
a = 20;
```

Câu hỏi: Có chạy được không, nếu không chạy được thì lỗi nó là gì?

```js
const a = [10, 20, 30];
a.push(40);
```

Câu hỏi: Tại sao đoạn code này không lỗi??

```js
const user = {
    name: "John",
};
const user2 = user;
user2.name = "Đạt";
console.log(user.name); // Đạt => tính bất biến
```

Câu hỏi:

- Code có lỗi không?
- Tại sao?

ví dụ:

```js
const myFriends = ["John", "Jane", "Jim"];
// myFriends.push("Doe");
const myFriendsClone = [...myFriends, "Doe"];
console.log(myFriends); // ["John", "Jane", "Jim", "Doe"]
console.log(myFriendsClone); // ["John", "Jane", "Jim", "Doe"]
```

Câu hỏi:

- Code có lỗi không?
- Tại sao?

ví dụ:

```js
const myFriends = ["John", "Jane", "Jim"];
```

## Function

1. Function là gì? khi nào sử dụng function? cho ví dụ?
2. Có bao nhiêu loại function trong javascript? cho ví dụ?

### Declaration

```js
sayHello();
function sayHello() {
    console.log("Hello");
}
```

### expression function

```js
sayHello();
const sayHello = function () {
    console.log("Hello");
};
```

### arrow function

```js
const sayHello = () => console.log("Hello");
sayHello();
```

### IIFE Function

```js
(() => {
    console.log("Hello");
})();
```
