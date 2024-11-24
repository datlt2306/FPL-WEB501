import React, { useEffect, useState } from "react";

const AdminProductsPage = () => {
    const [products, setProducts] = useState([]); // 1

    useEffect(() => {
        fetch(`http://localhost:3000/products`)
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);

    const removeItem = (id) => {
        const confirm = window.confirm(`Bạn có chắc chắn muốn xóa không?`);
        if (!confirm) return;

        // xóa item khỏi server
        fetch(`http://localhost:3000/products/${id}`, { method: "DELETE" }).then(() => {
            // rerender
            setProducts(products.filter((item) => item.id !== id));
        });
    };
    return (
        // 2
        <div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Quản lý sản phẩm</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <button type="button" className="btn btn-sm btn-outline-secondary">
                            Share
                        </button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">
                            Export
                        </button>
                    </div>
                    <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1"
                    >
                        <svg className="bi">
                            <use xlinkHref="#calendar3" />
                        </svg>
                        This week
                    </button>
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
