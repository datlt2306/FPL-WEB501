import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminProductsPage = () => {
    const [products, setProducts] = useState([]); // 1
    useEffect(() => {
        // 3
        fetch(`http://localhost:3000/products`)
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.log(error.message));
    }, []);

    const removeItem = (id) => {
        const confirm = window.confirm(`Bạn có chắc chắn muốn xóa không?`);
        if (!confirm) return;
        // Xóa trên server
        fetch(`http://localhost:3000/products/${id}`, { method: "DELETE" })
            .then(() => {
                alert(`Xóa sản phẩm thành công`);
                // rerender lại giao diện
                setProducts(products.filter((item) => item.id !== id));
            })
            .catch((error) => console.log(error.message));
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
                                    <button className="btn btn-outline-primary ms-2">
                                        Cập nhật
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                    {/* <tr>
                        <td>1</td>
                        <td width={60}>
                            <img
                                src="https://picsum.photos/id/1/300/300"
                                alt="Sản phẩm 1"
                                width={50}
                                height={50}
                            />
                        </td>
                        <td>Sản phẩm 1</td>
                        <td>$100</td>
                        <td>
                            <span className="badge text-bg-success">Còn hàng</span>
                        </td>
                        <td width={250}>
                            <button className="btn btn-outline-danger">Xóa</button>
                            <button className="btn btn-outline-primary ms-2">Cập nhật</button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td width={60}>
                            <img
                                src="https://picsum.photos/id/2/300/300"
                                alt="Sản phẩm 1"
                                width={50}
                                height={50}
                            />
                        </td>
                        <td>Sản phẩm 2</td>
                        <td>$200</td>
                        <td>
                            <span className="badge text-bg-secondary">Hết hàng</span>
                        </td>
                        <td width={250}>
                            <button className="btn btn-outline-danger">Xóa</button>
                            <button className="btn btn-outline-primary ms-2">Cập nhật</button>
                        </td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    );
};

export default AdminProductsPage;

/**
 * GET http://localhost:3000/products => toàn bộ sản phẩm
 * GET http://localhost:3000/products/{id} => chi tiết sản phẩm
 * POST http://localhost:3000/products - đi kèm với thông tin sản phẩm => thêm sản phẩm
 * PUT http://localhost:3000/products/{id} - đi kèm với thông tin sản phẩm => cập nhật sản phẩm
 * DELETE http://localhost:3000/products/{id} => xóa sản phẩm
 */

console.log("1");
setTimeout(() => {
    console.log("2");
});
console.log("3");
