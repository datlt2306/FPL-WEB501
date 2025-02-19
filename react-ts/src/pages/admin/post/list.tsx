/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { IPost } from "../../../interfaces/post";
import { Link } from "react-router-dom";
import axios from "axios";

const ListPostPage = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`http://localhost:3000/posts`);
                if (response.status !== 200) throw new Error("Failed to fetch data");
                setPosts(response.data);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);
    const onHandleRemove = async (id: number) => {
        const confirm = window.confirm(`Bạn có chắc chắn muốn xóa bài viết này không?`);
        if (!confirm) return;
        try {
            // call api
            await axios.delete(`http://localhost:3000/posts/${id}`);

            // rerender
            setPosts(posts.filter((post) => post.id !== id));
            alert("Xóa bài viết thành công");
        } catch (error: any) {
            setError(error.message);
        }
    };
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    return (
        <div>
            <div>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Quản lý bài viết</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <Link
                            type="button"
                            className="btn btn-sm btn-outline-primary"
                            to="/admin/posts/create"
                        >
                            Thêm sản phẩm
                        </Link>
                    </div>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Ảnh</th>
                            <th>Tiêu đề</th>
                            <th>Nội dung</th>
                            <th width={100}>Trạng thái</th>
                            <th width={200}>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post: IPost, index) => (
                            <tr key={post.id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="d-flex gap-2">
                                        {post?.images?.map((image) => (
                                            <img
                                                key={image.url}
                                                src={image.url}
                                                alt={image.name}
                                                width={50}
                                                height={50}
                                            />
                                        ))}
                                    </div>
                                </td>
                                <td>{post.title}</td>
                                <td>{post.content}</td>
                                <td>
                                    {post.status ? (
                                        <span className="badge text-bg-success">Hiện</span>
                                    ) : (
                                        <span className="badge text-bg-secondary">Ẩn</span>
                                    )}
                                </td>
                                <td>
                                    <div className="d-flex gap-2">
                                        <button
                                            onClick={() => onHandleRemove(post.id!)}
                                            className="btn btn-danger btn-sm"
                                        >
                                            Xóa
                                        </button>
                                        <Link
                                            to={`/admin/posts/${post.id}/edit`}
                                            className="btn btn-primary btn-sm"
                                        >
                                            Cập nhật
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListPostPage;
