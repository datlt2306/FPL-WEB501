import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";

const ProductEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    useEffect(() => {
        const getProduct = async () => {
            const response = await axios.get(`http://localhost:3000/products/${id}`);
            if (response.status !== 200) {
                throw new Error("Có lỗi xảy ra");
            }
            // hiển thị thông tin lên form
            reset(response.data);
        };
        getProduct();
    }, [id, reset]);
    const onHandleSubmit = async (formData) => {
        // Chuyển đổi giá trị của price và inStock
        formData.price = Number(formData.price);
        formData.inStock = formData.inStock === "true";

        await axios.put(`http://localhost:3000/products/${id}`, formData);
        alert("Cập nhật sản phẩm thành công");
        navigate("/admin/products");
    };
    return (
        <div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Cập nhật sản phẩm</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <Link to="/admin/products">
                            <button type="button" className="btn btn-primary">
                                Quay lại
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <form className="w-50 m-auto" onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                        Tên sản phẩm
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Sản phẩm A"
                        {...register("name", { required: true, minLength: 5 })}
                    />
                    {errors?.name?.type === "required" && (
                        <span className="text-danger">Bắt buộc nhập</span>
                    )}
                    {errors?.name?.type === "minLength" && (
                        <span className="text-danger">Ít nhất 5 ký tự</span>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                        Giá sản phẩm
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="$200"
                        {...register("price", { required: true, min: 0 })}
                    />
                    {errors?.price?.type === "required" && (
                        <span className="text-danger">Bắt buộc nhập</span>
                    )}
                    {errors?.price?.type === "min" && (
                        <span className="text-danger">Giá không được để âm</span>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                        Tình trạng
                    </label>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            value={true}
                            id="flexRadioDefault1"
                            defaultChecked
                            {...register("inStock")}
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Còn hàng
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            value={false}
                            {...register("inStock")}
                            id="flexRadioDefault2"
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Hết hàng
                        </label>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                        Ảnh sản phẩm
                    </label>
                    <input type="text" className="form-control" {...register("imageUrl")} />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                        Mô tả sản phẩm
                    </label>
                    <textarea
                        className="form-control"
                        rows={4}
                        {...register("description")}
                    ></textarea>
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary" type="submit">
                        Cập nhật
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProductEdit;
/**
 * react-router-dom
 * react-hook-form
 * axios
 */
/**
 * B1: Lấy id trên url => useParams()
 * B2: Gọi API lấy thông tin sản phẩm theo id
 * B3: hiển thị thông tin sản phẩm lên form
 * B4: Lấy thông tin form sau khi người dùng cập nhật
 * B5: Cập nhật API với thông tin mới
 */
