import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
            </Routes>
        </>
    );
}

export default App;
/**
 * B1: npm i react-router-dom
 * B2: Truy cập file main.jsx
 *    import { BrowserRouter } from "react-router-dom";
 *   ReactDOM.render(<BrowserRouter><App /></BrowserRouter>);
 * B3: Truy cập file App.jsx
 *  Định nghĩa ra các đường dẫn cho trang web
 */
/**
 *
 * Tạo component nhanh bằng câu lệnh : rafce
 */
