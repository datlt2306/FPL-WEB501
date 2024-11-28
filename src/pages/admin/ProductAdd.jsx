import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const ProductAdd = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (formData) => {
        await axios.post(`http://localhost:3000/products`, formData);
        alert("Thêm sản phẩm thành công");
        navigate("/admin/products");
    };
    // const [inputValue, setInputValue] = useState({});
    // const onHandleChange = (e) => {
    //     const { name, value } = e.target;
    //     // spread operator + computed property name
    //     setInputValue({ ...inputValue, [name]: value });
    // };
    // const onHandleSubmit = (e) => {
    //     e.preventDefault();
    //     if (!inputValue) return;
    //     fetch(`http://localhost:3000/products`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(inputValue),
    //     });
    // };
    return (
        <div>
            <header className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Thêm sản phẩm</h1>
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
                        Thêm mới
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProductAdd;
/**
 * 1. Sử dụng package: react-hook-form : npm i react-hook-form axios
 * 2. sử dụng Axios để gửi request
 * 3. Sử dụng async/await làm việc thay cho .then() và .catch()
 * 4. Hoàn thiện cập nhật sản phẩm
 * 5. Sử dụng json-server-auth để hoàn thiện chức năng đăng ký/Đăng nhập
 */

// function toTinh() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Em yêu anh");
//         }, 2000);
//     });
// }
// // toTinh()
// //     .then((response) => response + " mãi mãi")
// //     .then((response) => console.log(response));

// async function showResult() {
//     const response = await toTinh();
//     console.log(response + "mãi mãi");
// }
// const showResult = async () => {
//     const response = await toTinh();
//     console.log(response + "mãi mãi");
// };
// showResult();
