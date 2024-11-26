import React, { useEffect, useState } from "react";

const AdminProductsPage = () => {
    // console.log(1)
    const [products, setProducts] = useState([]);
    // setTimeOut(() => { console.log(2)})
    useEffect(() => {
        // call api để lấy dữ liệu
        fetch(`http://localhost:3000/products`)
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);

    const removeProduct = (id) => {
        const confirm = window.confirm(`Bạn có chắc chắn muốn xóa không?`);
        if (!confirm) return;
        // xóa sản phẩm ở server
        fetch(`http://localhost:3000/products/${id}`, { method: "DELETE" }).then(() => {
            setProducts(products.filter((item) => item.id !== id));
        });
    };
    // console.log(3)
    return (
        <div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Quản lý sản phẩm</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <button type="button" className="btn btn-sm btn-outline-primary">
                            Thêm sản phẩm
                        </button>
                    </div>
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Ảnh</th>
                        <th>Tên</th>
                        <th>Giá</th>
                        <th>Trạng thái</th>
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
                                        src="https://picsum.photos/id/1/300/300"
                                        alt="sản phẩm 1"
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
                                        onClick={() => removeProduct(item.id)}
                                    >
                                        Xóa
                                    </button>
                                    <button className="btn btn-outline-primary ms-1">
                                        Cập nhật
                                    </button>
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

// GET /products: lấy danh sách sản phẩm
// GET /prodcts/${id}: lấy chi tiết sản phẩm
// DELETE /products/${id}: xóa sản phẩm
// POST /products, cần thêm body(sản phẩm): thêm sản phẩm
// PUT | PATCH /products/${id}, cần thêm body(sản phẩm): cập nhật sản phẩm
