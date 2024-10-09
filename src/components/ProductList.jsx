/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products, removeItem }) => {
    return (
        <div>
            <h1>Quản lý sản phẩm</h1>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên sản phẩm</th>
                            <th>Giá sản phẩm</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => removeItem(item.id)}
                                    >
                                        Xóa
                                    </button>
                                    <Link
                                        to={`/products/${item.id}/edit`}
                                        className="btn btn-primary"
                                    >
                                        Sửa
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductList;
