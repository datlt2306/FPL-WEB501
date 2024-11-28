import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminProductsPage = () => {
    const [products, setProducts] = useState([]); // 1

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios(`http://localhost:3000/products`);
            setProducts(data);
        };
        fetchProducts();
        // fetch(`http://localhost:3000/products`)
        //     .then((response) => {
        //         if (!response.ok) {
        //             throw new Error("API chưa bật");
        //         }
        //         return response.json();
        //     })
        //     .then((data) => setProducts(data));
    }, []);

    const removeItem = async (id) => {
        const confirm = window.confirm(`Bạn có chắc chắn muốn xóa không?`);
        if (!confirm) return;

        // xóa item khỏi server
        await axios.delete(`http://localhost:3000/products/${id}`);
        alert("Xóa sản phẩm thành công");
        setProducts(products.filter((item) => item.id !== id));

        // fetch(`http://localhost:3000/products/${id}`, { method: "DELETE" }).then(() => {
        //     // rerender
        //     setProducts(products.filter((item) => item.id !== id));
        // });
    };
    return (
        // 2
        <div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Quản lý sản phẩm</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <Link to="/admin/products/add">
                            <button type="button" className="btn btn-primary">
                                Thêm sản phẩm
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Ảnh</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá sản phẩm</th>
                        <th>Tình trạng</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <td width={50}>{index + 1}</td>
                                <td width={60}>
                                    <img
                                        src={item.imageUrl}
                                        alt={item.name}
                                        width={50}
                                        height={50}
                                    />
                                </td>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>
                                    {item.inStock ? (
                                        <span className="badge text-bg-success">Còn hàng</span>
                                    ) : (
                                        <span className="badge text-bg-secondary">Hết hàng</span>
                                    )}
                                </td>
                                <td width={250}>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => removeItem(item.id)}
                                    >
                                        Xóa
                                    </button>
                                    <button className="ms-1 btn btn-primary">Cập nhật</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default AdminProductsPage;

/**
 * B1: Khai báo state
 * B2: render ra giao diện quản lý sản phẩm
 * B3: Sử dụng hooks useEffect() để lấy dữ liệu từ server ( API sử dụng fetch())
 * B4: Set dữ liệu vào state
 *
 *
 * GET http://localhost:3000/products => trả về danh sách sản phẩm
 * GET http://localhost:3000/products/${id} => trả về sản phẩm theo id
 * DELETE http://localhost:3000/products/${id} => xóa sản phẩm theo id
 * POST http://localhost:3000/products, phải thêm object body => thêm sản phẩm
 * PUT | PATCH http://localhost:3000/products/${id}, phải thêm object body => cập nhật sản phẩm
 */
