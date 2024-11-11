import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const LayoutWebsite = () => {
    return (
        <div>
            <header data-bs-theme="dark">
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            Carousel
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse"
                            aria-controls="navbarCollapse"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/">
                                        Trang chủ
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/products">
                                        Sản phẩm
                                    </NavLink>
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
            <main>
                <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#myCarousel"
                            data-bs-slide-to={0}
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        />
                        <button
                            type="button"
                            data-bs-target="#myCarousel"
                            data-bs-slide-to={1}
                            aria-label="Slide 2"
                        />
                        <button
                            type="button"
                            data-bs-target="#myCarousel"
                            data-bs-slide-to={2}
                            aria-label="Slide 3"
                        />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <svg
                                className="bd-placeholder-img"
                                width="100%"
                                height="100%"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false"
                            >
                                <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
                            </svg>
                            <div className="container">
                                <div className="carousel-caption text-start">
                                    <h1>Example headline.</h1>
                                    <p className="opacity-75">
                                        Some representative placeholder content for the first slide
                                        of the carousel.
                                    </p>
                                    <p>
                                        <a className="btn btn-lg btn-primary" href="#">
                                            Sign up today
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <svg
                                className="bd-placeholder-img"
                                width="100%"
                                height="100%"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false"
                            >
                                <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
                            </svg>
                            <div className="container">
                                <div className="carousel-caption">
                                    <h1>Another example headline.</h1>
                                    <p>
                                        Some representative placeholder content for the second slide
                                        of the carousel.
                                    </p>
                                    <p>
                                        <a className="btn btn-lg btn-primary" href="#">
                                            Learn more
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <svg
                                className="bd-placeholder-img"
                                width="100%"
                                height="100%"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false"
                            >
                                <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
                            </svg>
                            <div className="container">
                                <div className="carousel-caption text-end">
                                    <h1>One more for good measure.</h1>
                                    <p>
                                        Some representative placeholder content for the third slide
                                        of this carousel.
                                    </p>
                                    <p>
                                        <a className="btn btn-lg btn-primary" href="#">
                                            Browse gallery
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#myCarousel"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#myCarousel"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                {/* Marketing messaging and featurettes
  ================================================== */}
                {/* Wrap the rest of the page in another container to center all the content. */}
                <Outlet />
                {/* /.container */}
                {/* FOOTER */}
                <footer className="container">
                    <p className="float-end">
                        <a href="#">Back to top</a>
                    </p>
                    <p>
                        © 2017–2024 Company, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a>
                    </p>
                </footer>
            </main>
        </div>
    );
};

export default LayoutWebsite;
