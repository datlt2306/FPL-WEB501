import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const ProductAdd = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onHandleSubmit = async (formData) => {
        // Chuyển đổi giá trị của price và inStock
        formData.price = Number(formData.price);
        formData.inStock = formData.inStock === "true";

        await axios.post(`http://localhost:3000/products`, formData);
        alert("Thêm sản phẩm thành công");
        navigate("/admin/products");
    };
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
                        Thêm mới
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProductAdd;
/**
 * react-router-dom
 * react-hook-form
 * axios
 */
