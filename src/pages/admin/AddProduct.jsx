import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddProduct = () => {
    const [inputValue, setInputValue] = useState({});
    const onHandleInput = (e) => {
        const { name, value } = e.target;
        // name => price
        // value => 200
        setInputValue({ ...inputValue, [name]: value });

        // computed property name => Lấy giá trị làm tên thuộc tính
    };
    const onHandleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue) return;
        fetch(`http://localhost:3000/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(inputValue),
        });
    };
    return (
        <>
            <header className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Thêm sản phẩm</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <Link to="/admin/products">
                            <button type="button" className="btn btn-outline-primary">
                                Quay lại
                            </button>
                        </Link>
                    </div>
                </div>
            </header>
            <form onSubmit={onHandleSubmit}>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                        Tên sản phẩm
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Sản phẩm A"
                        name="name"
                        onInput={onHandleInput}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                        Giá sản phẩm
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="$200"
                        name="price"
                        onInput={onHandleInput}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                        Tình trạng
                    </label>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inStock"
                            value={true}
                            id="flexRadioDefault1"
                            defaultChecked
                            onInput={onHandleInput}
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Còn hàng
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inStock"
                            value={false}
                            id="flexRadioDefault2"
                            onInput={onHandleInput}
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Hết hàng
                        </label>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                        Ảnh sản phẩm
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="imageUrl"
                        onInput={onHandleInput}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                        Mô tả sản phẩm
                    </label>
                    <textarea
                        name="description"
                        className="form-control"
                        rows={4}
                        onInput={onHandleInput}
                    ></textarea>
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary" type="submit">
                        Thêm mới
                    </button>
                </div>
            </form>
        </>
    );
};

export default AddProduct;
