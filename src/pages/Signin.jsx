import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Signin = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onHandleSubmit = async (formData) => {
        await axios.post(`http://localhost:3000/signin`, formData);
        alert("Đăng nhập thành công");
        navigate("/signin");
    };
    return (
        <>
            <header className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Đăng nhập</h1>
            </header>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
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
                        Password
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
                        Đăng nhập
                    </button>
                </div>
            </form>
        </>
    );
};

export default Signin;
