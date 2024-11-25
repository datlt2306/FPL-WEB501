import React from "react";
import { Link } from "react-router-dom";

const AdminProductsPage = () => {
    return (
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
                    <tr>
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
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AdminProductsPage;
