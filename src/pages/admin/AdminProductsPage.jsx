import React from "react";

const AdminProductsPage = () => {
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
                    <tr>
                        <td width={50}>1</td>
                        <td width={60}>
                            <img
                                src="https://picsum.photos/id/1/300/300"
                                alt="sản phẩm 1"
                                width={50}
                                height={50}
                            />
                        </td>
                        <td>Sản phẩm 1</td>
                        <td>$100</td>
                        <td>
                            <span className="badge text-bg-success">Còn hàng</span>
                            <span className="badge text-bg-secondary">Hết hàng</span>
                        </td>
                        <td width={250}>
                            <button className="btn btn-outline-danger">Xóa</button>
                            <button className="btn btn-outline-primary ms-1">Cập nhật</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AdminProductsPage;
