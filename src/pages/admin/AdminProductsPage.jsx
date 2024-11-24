import React from "react";

const AdminProductsPage = () => {
    return (
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
                        <th>Tên sản phẩm</th>
                        <th>Giá sản phẩm</th>
                        <th>Tình trạng</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Sản phẩm A</td>
                        <td>$200</td>
                        <td>Còn hàng</td>
                        <td width={250}>
                            <button className="btn btn-danger">Xóa</button>
                            <button className="ms-1 btn btn-primary">Cập nhật</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AdminProductsPage;
