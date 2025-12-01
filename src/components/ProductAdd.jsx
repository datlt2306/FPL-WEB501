import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductAdd = () => {
    const navigate = useNavigate();
    const [valueInput, setValueInput] = useState({
        name: "",
        price: 0,
        image: "",
        instock: 0,
    });
    const handleInput = (e) => {
        // lấy giá trị của form
        const product = {
            ...valueInput,
            [e.target.name]: e.target.value,
        };
        // lưu vào state
        setValueInput(product);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        // validate form cơ bản
        if (
            valueInput.name === "" ||
            valueInput.price === "" ||
            valueInput.image === 0 ||
            valueInput.instock === 0
        ) {
            alert("Vui lòng nhập đầy đủ thông tin");
            return;
        }
        // call API
        const response = await fetch(`http://localhost:3000/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(valueInput),
        });
        if (!response.ok) {
            throw new Error("Thêm thất bại!");
        }
        alert("Thêm sản phẩm thành công!");
        navigate("/");
    };
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <h2>Thêm sản phẩm</h2>
                <Link to="/" className="btn btn-primary">
                    Quay lại
                </Link>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label className="form-label">Tên sản phẩm</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Tên sản phẩm"
                        name="name"
                        onInput={handleInput}
                    />
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Giá sản phẩm</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Giá sản phẩm"
                        name="price"
                        onInput={handleInput}
                    />
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Ảnh sản phẩm</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ảnh sản phẩm"
                        name="image"
                        onInput={handleInput}
                    />
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Số lượng sản phẩm</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Số lượng sản phẩm"
                        name="instock"
                        onInput={handleInput}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Thêm sản phẩm
                </button>
            </form>
        </div>
    );
};

// Lấy được giá trị của form lưu vào state
// submit thì gửi giá trị state lên server
// nếu thành công thì redirect về trang list
export default ProductAdd;
