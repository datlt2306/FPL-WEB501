import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import DemoUseEffect from "./components/ProductList";
import ProductList from "./components/ProductList";

function App() {
    return (
        <div>
            <Link to="/">Trang chủ</Link>
            <Link to="/about">Trang giới thiệu</Link>

            <Routes>
                <Route path="admin">
                    <Route path="products" element={<ProductList />} />
                </Route>
            </Routes>
        </div>
    );
}
// npm i  react-router-dom
// gắn component <BrowserRouter /> ở main.jsx
// code

export default App;
