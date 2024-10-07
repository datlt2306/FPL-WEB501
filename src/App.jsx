import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/products`);
                setProducts(response.data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    const removeItem = async (id) => {
        const confirm = window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?");
        if (confirm) {
            await axios.delete(`${import.meta.env.VITE_API_URL}/products/${id}`);
            setProducts(products.filter((item) => item.id !== id));
        }
    };
    return (
        <div>
            <h1>Quản lý sản phẩm</h1>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên sản phẩm</th>
                            <th>Giá sản phẩm</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => removeItem(item.id)}
                                    >
                                        Xóa
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default App;
