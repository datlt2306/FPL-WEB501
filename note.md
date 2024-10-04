# Buổi 12

## Phần 1:

-   Bước 1: Tạo file db.json
-   Bước 2: chỉnh sửa file package.json:

```json
"scripts": {
    "server": "json-server --watch db.json"
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
