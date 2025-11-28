import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductList from "./components/ProductList";
import ProductAdd from "./components/ProductAdd";
import ProductEdit from "./components/ProductEdit";

function App() {
    return (
        <div>
            <Link to="/">Trang chủ</Link>
            <Link to="/about">Trang giới thiệu</Link>

            <Routes>
                <Route path="admin">
                    <Route path="products" element={<ProductList />} />
                    <Route path="products/add" element={<ProductAdd />} />
                    <Route path="products/:id/edit" element={<ProductEdit />} />
                </Route>
            </Routes>
        </div>
    );
}
// npm i  react-router-dom
// gắn component <BrowserRouter /> ở main.jsx
// code
// const id = new URLSearchParams(window.location.search).get("id");

export default App;
