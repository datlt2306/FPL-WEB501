import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LatestNews = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetch(`http://localhost:3000/posts?_limit=4&_sort=publishedAt&_order=asc`)
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            })
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    return (
        <section className="news py-3">
            <h2>Bài viết mới nhất</h2>
            <div className="row">
                {posts.map((post) => (
                    <div key={post.id} className="col-md-6 col-lg-3">
                        <div className="card">
                            <img src={post?.image?.url} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{post?.title}</h5>
                                <p className="card-text">{post?.content}</p>
                                <Link to={`/posts/${post.id}`} className="btn btn-primary">
                                    Chi tiết
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LatestNews;
