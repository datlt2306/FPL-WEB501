import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
createRoot(document.getElementById("root")).render(
    <div className="container">
        <header>
            <div className="text-center py-3">
                <img src="./logo.svg" alt="" width="150" height="40" />
            </div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Link
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">
                                    Disabled
                                </a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
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
