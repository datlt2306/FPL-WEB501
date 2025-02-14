import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetailPage = () => {
    //lấy id trên url
    const { id } = useParams();

    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetch(`http://localhost:3000/posts/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setPost(data);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            })
            .finally(() => setIsLoading(false));
    }, [id]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    return <div>{post?.title}</div>;
};

export default PostDetailPage;
