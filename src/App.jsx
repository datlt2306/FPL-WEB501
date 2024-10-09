import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductAdd from "./components/ProductAdd";
import ProductEdit from "./components/ProductEdit";
import Signup from "./components/Signup";
import Signin from "./components/Signin";

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
    const addItem = async (product) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/products`, product);
            alert("Thêm sản phẩm thành công");
            setProducts([...products, response.data]);
        } catch (error) {
            console.log(error);
        }
    };
    const editItem = async (product) => {
        try {
            const response = await axios.put(
                `${import.meta.env.VITE_API_URL}/products/${product.id}`,
                product
            );
            alert("Cập nhật sản phẩm thành công");
            // rerender
            const newProducts = products.map((item) =>
                item.id === response.data.id ? response.data : item
            );
            setProducts(newProducts);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <Routes>
                <Route path="/" element={<h1>Home page</h1>} />
                <Route
                    path="/products"
                    element={<ProductList products={products} removeItem={removeItem} />}
                />
                <Route path="/products/add" element={<ProductAdd addItem={addItem} />} />
                <Route path="/products/:id/edit" element={<ProductEdit editItem={editItem} />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
            </Routes>
        </div>
    );
};

export default App;

/**
 * Sử dụng router trong React
 * Bước 1: npm i react-router-dom
 * Bước 2: Truy cập file main.js và import BrowserRouter từ react-router-dom
 * createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
* Bước 3: Truy cập file App.jsx và import Routes từ react-router-dom
* Bước 4: tách các component ra thành các file riêng biệt
* Bước 5: Truy cập file App.jsx và import các component vừa tách ra
 */
