## B1: Cài đặt json-server làm backend

-   Cài đặt json-server: `npm install -g json-server`
-   Tạo file db.json ở thư mục gốc
-   Thêm dữ liệu vào file db.json

```json
{
    "products": [
        {
            "id": 1,
            "name": "Iphone 12",
            "price": 1000
        },
        {
            "id": 2,
            "name": "Samsung Galaxy S21",
            "price": 900
        }
    ]
}
```

-   Chạy lệnh `json-server --watch db.json` để khởi động server
-   Mặc định server sẽ chạy ở cổng 3000: `http://localhost:3000/products`

## Sử dụng fetch() để làm việc với API
