import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";

const ProductEdit = () => {
    const { id } = useParams();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios(`http://localhost:3000/products/${id}`);
            reset(data);
        };
        fetchProduct();
    }, [id]);

    const onSubmit = async (formData) => {
        await axios.put(`http://localhost:3000/products/${id}`, formData);
        alert("Cập nhật sản phẩm thành công");
        navigate("/admin/products");
    };

    return (
        <div>
            <header className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Cập nhật sản phẩm</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <Link to="/admin/products">
                            <button type="button" className="btn btn-outline-primary">
                                Quay lại
                            </button>
                        </Link>
                    </div>
                </div>
            </header>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                        <span className="text-danger tw-mt-2 tw-block">
                            Tên sản phẩm không được để trống
                        </span>
                    )}
                    {errors?.name?.type === "minLength" && (
                        <span className="text-danger tw-mt-2 tw-block">
                            Tên sản phẩm ít nhất 5 ký tự
                        </span>
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
                        <span className="text-danger tw-mt-2 tw-block">
                            Giá sản phẩm không được để trống
                        </span>
                    )}
                    {errors?.price?.type === "min" && (
                        <span className="text-danger tw-mt-2 tw-block">
                            Giá không được để số âm
                        </span>
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
                            id="flexRadioDefault2"
                            {...register("inStock")}
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
                        {...register("imageUrl")}
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
 * B1: lấy được id trên url, sử dụng hook useParams()
 * B2: Sau khi có id, gọi api để lấy thông tin sản phẩm theo id
 * B3: Hiển thị thông tin sản phẩm lên form
 * B4: Khi người dùng submit form, gọi api để cập nhật sản phẩm
 * B5: Sau khi cập nhật thành công, chuyển hướng về trang quản lý sản phẩm
 */
