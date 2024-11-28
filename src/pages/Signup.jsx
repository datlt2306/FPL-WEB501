import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (formData) => {
        await axios.post(`http://localhost:3000/signup`, formData);
        alert("Đăng ký thành công");
        navigate("/signin");
    };
    return (
        <div>
            <header className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Đăng ký</h1>
            </header>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                        Tên người dùng
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        {...register("username", { required: true, minLength: 5 })}
                    />
                    {errors?.username?.type === "required" && (
                        <span className="text-danger tw-mt-2 tw-block">
                            Tên sản phẩm không được để trống
                        </span>
                    )}
                    {errors?.username?.type === "minLength" && (
                        <span className="text-danger tw-mt-2 tw-block">
                            Tên sản phẩm ít nhất 5 ký tự
                        </span>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        {...register("email", { required: true })}
                    />
                    {errors?.email?.type === "required" && (
                        <span className="text-danger tw-mt-2 tw-block">
                            Email không được để trống
                        </span>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                        Mật khẩu
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        {...register("password", { required: true })}
                    />
                    {errors?.password?.type === "required" && (
                        <span className="text-danger tw-mt-2 tw-block">
                            Password không được để trống
                        </span>
                    )}
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary" type="submit">
                        Đăng ký
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Signup;
