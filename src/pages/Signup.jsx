import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onHandleSubmit = async (formData) => {
        await axios.post(`http://localhost:3000/signup`, formData);
        alert("Đăng ký thành công");
        navigate("/signin");
    };
    return (
        <div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Đăng ký</h1>
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
                        Username
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        {...register("username", { required: true, minLength: 5 })}
                    />
                    {errors?.username?.type === "required" && (
                        <span className="text-danger">Bắt buộc nhập</span>
                    )}
                    {errors?.username?.type === "minLength" && (
                        <span className="text-danger">Ít nhất 5 ký tự</span>
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
                        <span className="text-danger">Bắt buộc nhập</span>
                    )}
                    {errors?.email?.type === "min" && (
                        <span className="text-danger">Giá không được để âm</span>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                        Password
                    </label>
                    <input
                        className="form-control"
                        type="password"
                        {...register("password", { required: true })}
                    />
                    {errors?.password?.type === "required" && (
                        <span className="text-danger">Bắt buộc nhập</span>
                    )}
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary" type="submit">
                        Đăng ky
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Signup;
/**
 * react-router-dom
 * react-hook-form
 * axios
 */
