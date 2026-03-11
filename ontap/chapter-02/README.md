## Variable

Nhiệm vụ:

1. Sự khác nhau giữa var, let và const? khi nào sử dụng?
2. Cho ví dụ

```js
const myArr = [10, 20, 30];
myArr.push(40);
```

Câu hỏi:

- Có lỗi không?
- Tại sao?

```js
const user = {
    name: "John",
};

const user2 = user;
user2.name = "Đạt";
console.log(user.name); //  ?????
```

Câu hỏi:

- user.name có giá trị là gì?
- Tại sao?

## Tính bất biến trong JS

```js
const myFriends = ["John", "Jane", "Jim"];
// myFriends.push("Doe"); Không dùng

const myFriendsClone = [...myFriends, "Doe"];
console.log(myFriends); //["John", "Jane", "Jim"]
console.log(myFriendsClone); //["John", "Jane", "Jim", "Doe"]
```

## Functions

1. Function là gì? khi nào sử dụng function? cho ví dụ?
2. Tham số và đối số là gì? Khi nào sử dụng function có truyền tham số?

### Tham số và đối số

```js
function sayHello(name) {
    console.log(`Hello ${name}`);
}
sayHello("John"); // Hello John
```

3. Có bao nhiêu loại function trong javascript? cho ví dụ?

### Declaration Function

```js
sayHello("John"); // Hello John
function sayHello(name) {
    console.log(`Hello ${name}`);
}
```

### Expression Function

```js
sayHello("John"); // Hello John

const sayHello = function (name) {
    console.log(`Hello ${name}`);
};
```

### Arrow function

```js
const sayHello = (name) => console.log(`Hello ${name}`);
sayHello("John"); // Hello John
```

### IIFE Function

```js
((name) => {
    console.log(`Hello ${name}`);
})("John");
```

## Bài tập
