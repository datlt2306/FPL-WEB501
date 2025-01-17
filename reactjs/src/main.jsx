import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
createRoot(document.getElementById("root")).render(
    <div className="container">
        <Header />
        <section className="banner">
            <img src="https://picsum.photos/id/1/1920/400" alt="" className="img-fluid" />
        </section>
        <section className="news py-3">
            <h2>Bài viết mới nhất</h2>
            <div className="row">
                <div className="col-md-6 col-lg-3">
                    <div className="card">
                        <img
                            src="https://picsum.photos/id/2/400/300"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">Bài viết 1</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">
                                Chi tiết
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="card">
                        <img
                            src="https://picsum.photos/id/3/400/300"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">Bài viết 1</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">
                                Chi tiết
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="card">
                        <img
                            src="https://picsum.photos/id/4/400/300"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">Bài viết 1</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">
                                Chi tiết
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="card">
                        <img
                            src="https://picsum.photos/id/5/400/300"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">Bài viết 1</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">
                                Chi tiết
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer className="bg-primary">
            <p className="text-center text-white py-3">Copyright by Datlt34</p>
        </footer>
    </div>
);
