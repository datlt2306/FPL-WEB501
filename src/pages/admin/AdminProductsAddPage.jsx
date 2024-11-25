import React from "react";
import { Link } from "react-router-dom";

const AdminProductsAddPage = () => {
    return (
        <div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Thêm sản phẩm</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <Link to="/admin/products">
                            <button type="button" className="btn btn-primary">
                                Quay lại
                            </button>
                        </Link>
                    </div>
                </div>
                {/* 
                    Tên - input type text
                    Giá - input type number
                    Ảnh - input type text
                    Tình trạng - input type radio
                    Mô tả - textarea
                    button - type submit
                */}
            </div>
        </div>
    );
};

export default AdminProductsAddPage;
