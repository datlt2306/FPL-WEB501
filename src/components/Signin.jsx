import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Signin = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (formData) => {
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/signin`, formData);
            alert("Đăng nhập thành công");
        } catch (error) {
            console.log("error", error.response.data);
        }
    };
    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                        Email
                    </label>
                    <input type="email" className="form-control" {...register("email")} />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                        Password
                    </label>
                    <input type="password" className="form-control" {...register("password")} />
                </div>
                <button className="btn btn-primary" type="submit">
                    Đăng ký
                </button>
            </form>
        </div>
    );
};

export default Signin;
