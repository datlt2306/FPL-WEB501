import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(`http://localhost:3000/products`);
            const data = await response.json();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    const handleDelete = async (id) => {
        console.log(id);
        const confirm = window.confirm("bạn có chắc chắn muốn xóa không?");
        if (!confirm) return;

        await fetch(`http://localhost:3000/products/${id}`, { method: "DELETE" });
        // rerender
        setProducts(products.filter((item) => item.id !== id));
    };
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <h2>Quản lý sản phẩm</h2>
                <Link to="/add" className="btn btn-primary">
                    Thêm sản phẩm
                </Link>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Ảnh</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Giá</th>
                        <th>Số lượng</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {products.length > 0 ? (
                        products.map((item, index) => (
                            <tr key={item.id}>
                                <td scope="row">{index + 1}</td>
                                <td>
                                    <img src={item.image} alt={item.name} width={50} />
                                </td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.instock}</td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="btn btn-danger btn-sm"
                                    >
                                        Xóa
                                    </button>
                                    <Link
                                        to={`/${item.id}/edit`}
                                        className="btn btn-primary btn-sm"
                                    >
                                        Cập nhật
                                    </Link>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6">Không có dữ liệu</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;
