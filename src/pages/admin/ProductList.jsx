import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
    const [products, setProducts] = useState([]); // 1
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get("http://localhost:3000/products");
            setProducts(response.data);
        };
        fetchProducts();
    }, []);

    const removeItem = async (id) => {
        const confirm = window.confirm(`Bạn có chắc chắn muốn xóa không?`);
        if (!confirm) return;
        // Xóa trên server

        await axios.delete(`http://localhost:3000/products/${id}`);
        alert(`Xóa sản phẩm thành công`);
        setProducts(products.filter((item) => item.id !== id));
    };
    return (
        // 2
        <div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Quản lý sản phẩm</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <Link to="/admin/products/add">
                            <button type="button" className="btn  btn-primary">
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
                        <th>Tên</th>
                        <th>Giá</th>
                        <th>Tình trạng</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
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
                                        className="btn btn-outline-danger"
                                        onClick={() => removeItem(item.id)}
                                    >
                                        Xóa
                                    </button>
                                    <Link to={`/admin/products/${item.id}/edit`}>
                                        <button className="btn btn-outline-primary ms-2">
                                            Cập nhật
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;

/**
 * GET http://localhost:3000/products => toàn bộ sản phẩm
 * GET http://localhost:3000/products/{id} => chi tiết sản phẩm
 * POST http://localhost:3000/products - đi kèm với thông tin sản phẩm => thêm sản phẩm
 * PUT http://localhost:3000/products/{id} - đi kèm với thông tin sản phẩm => cập nhật sản phẩm
 * DELETE http://localhost:3000/products/{id} => xóa sản phẩm
 */
