import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const ProductEdit = ({ editItem }) => {
    const { id } = useParams();
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/products/${id}`);
            reset(response.data);
        })();
    }, []);

    const onSubmit = (formData) => {
        try {
            navigate("/products");
            editItem(formData);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                        Tên sản phẩm
                    </label>
                    <input type="text" className="form-control" {...register("name")} />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                        Giá sản phẩm
                    </label>
                    <input type="number" className="form-control" {...register("price")} />
                </div>
                <button className="btn btn-primary" type="submit">
                    Cập nhật
                </button>
            </form>
        </div>
    );
};

export default ProductEdit;

/**
 * Bước 1: Lấy được id trên url
 * Bước 2: Sử dụng id để call api lấy thông tin sản phẩm
 * Bước 3: Hiển thị thông tin sản phẩm lên form
 * Bước 4: Sử dụng form để cập nhật thông tin sản phẩm
 * Bước 5: đẩy dữ liệu từ ProductEdit lên App, sử dụng props sau đó để cập nhật thông qua API
 */
