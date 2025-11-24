import React, { useEffect, useState } from "react";

const DemoUseEffect = () => {
    // set state products
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetchProducts();
    }, []);
    // khai báo hàm gọi danh sách sản phẩm
    const fetchProducts = async () => {
        // gọi api danh sách sản phẩm
        const response = await fetch(`http://localhost:3000/products`);
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        // lấy dữ liệu từ api chuyển sang JSON
        const data = await response.json();
        // set state products
        setProducts(data);
    };
    // khai báo hàm xóa sản phẩm
    const handleDelete = async (id) => {
        // gọi api xóa sản phẩm
        const response = await fetch(`http://localhost:3000/products/${id}`, { method: "DELETE" });
        // kiểm tra response
        if (response.ok) {
            // hiển thị thông báo xóa thành công
            alert("Xóa Thành công");
            // gọi hàm gọi danh sách sau khi xóa sản phẩm => rerender
            fetchProducts();
        }
    };
    return (
        <div>
            {products.map((item) => (
                <div>
                    <h2>{item.name}</h2>
                    <span>{item.price}</span>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default DemoUseEffect;
