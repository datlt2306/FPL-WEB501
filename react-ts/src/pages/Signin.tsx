/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SigninPage = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (data: any) => {
        console.log(data);
        try {
            await axios.post(`http://localhost:3000/signin`, data);

            alert("Đăng nhập thành công");
            navigate("/");
        } catch (error: any) {
            console.log(error.message);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: 500, margin: "auto" }}>
                <div className="mb-3">
                    <label htmlFor="postName" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="postName"
                        placeholder="abc@gmail.com"
                        {...register("email", { required: true })}
                    />
                    {errors.email?.type === "required" && (
                        <p className="text-danger">This field is required</p>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="postName" className="form-label">
                        Mật khẩu
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="postName"
                        placeholder="******"
                        {...register("password", { required: true, minLength: 6 })}
                    />
                    {errors.password?.type === "required" && (
                        <p className="text-danger">This field is required</p>
                    )}
                    {errors.password?.type === "minLength" && (
                        <p className="text-danger">Min Length 6</p>
                    )}
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary">Đăng nhập</button>
                </div>
            </form>
        </div>
    );
};

export default SigninPage;
