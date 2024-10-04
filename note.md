# Buổi 12

## Phần 1:

-   Bước 1: Tạo file db.json ở root folder với nội dung sau:

```json
{
    "products": [
        {
            "id": 1,
            "name": "Product 1",
            "price": 100
        },
        {
            "id": 2,
            "name": "Product 2",
            "price": 200
        }
    ]
}
```

> Trong trường hợp máy chưa cài json-server thì gõ câu lệnh sau để cài:

```bash
npm i json-server@0.17.4 json-server-auth -D
```

-   Bước 2: chỉnh sửa file package.json:

```json
"scripts": {
    "server": "json-server-auth --watch db.json"
  },
```

-   Bước 3: Chạy lệnh `npm run server` để chạy server
-   Bước 4: Truy cập file App.js, kết hợp với useEffect và useState để lấy dữ liệu từ server

```jsx
useEffect(() => {
    fetch(`http://localhost:3000/products`)
        .then((response) => response.json())
        .then((data) => setProducts(data));
}, []);
```
