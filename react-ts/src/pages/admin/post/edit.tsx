/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IPost } from "../../../interfaces/post";
import axios from "axios";
import slugify from "slugify";
import { useForm } from "react-hook-form";

const EditPostPage = () => {
    const { id } = useParams();
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`http://localhost:3000/posts/${id}`);
            reset(data);
        })();
    }, [id, reset]);

    const onSubmit = async (data: any) => {
        try {
            await axios.put(`http://localhost:3000/posts/${id}`, data);

            alert("Cập nhật bài viết thành công");
            navigate("/admin/posts");
        } catch (error: any) {
            console.log(error.message);
        }
    };
    return (
        <div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">chỉnh sửa bài viết</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <Link
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                            to="/admin/posts"
                        >
                            Quay lại
                        </Link>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} style={{ width: 500, margin: "auto" }}>
                <div className="mb-3">
                    <label htmlFor="postName" className="form-label">
                        Tên bài viết
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="postName"
                        placeholder="Bài viết A"
                        {...register("title", { required: true, minLength: 3 })}
                    />
                    {errors.title?.type === "required" && (
                        <p className="text-danger">This field is required</p>
                    )}
                    {errors.title?.type === "minLength" && (
                        <p className="text-danger">Min length 3</p>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="productName" className="form-label">
                        Nội dung
                    </label>
                    <textarea
                        id=""
                        cols={30}
                        rows={10}
                        className="form-control"
                        {...register("content")}
                    ></textarea>
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary">Cập nhật</button>
                </div>
            </form>
        </div>
    );
};

export default EditPostPage;

// lấy id trên url
// từ id bắt đầu call API để lấy dữ liệu
// từ dữ liệu lấy được thì fill vào form
// Giống thêm sản phẩm
