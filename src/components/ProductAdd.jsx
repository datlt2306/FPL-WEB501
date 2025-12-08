import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const ProductAdd = () => {
    const {
        register,
        handleSubmit,
        // formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const response = await axios.post(`http://localhost:3000/products`, data);
        if (response.status !== 201) {
            throw new Error("Thêm thất bại!");
        }
        alert("Thêm sản phẩm thành công!");
        navigate("/");
    };
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <h2>Thêm sản phẩm</h2>
                <Link to="/admin/products" className="btn btn-primary">
                    Quay lại
                </Link>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-3">
                    <label className="form-label">Tên sản phẩm</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Tên sản phẩm"
                        {...register("name")}
                    />
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Giá sản phẩm</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Giá sản phẩm"
                        {...register("price")}
                    />
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Ảnh sản phẩm</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ảnh sản phẩm"
                        {...register("image")}
                    />
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Số lượng sản phẩm</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Số lượng sản phẩm"
                        {...register("instock")}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Thêm sản phẩm
                </button>
            </form>
        </div>
    );
};

// Lấy được giá trị của form lưu vào state
// submit thì gửi giá trị state lên server
// nếu thành công thì redirect về trang list
export default ProductAdd;
