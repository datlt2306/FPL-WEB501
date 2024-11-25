/* eslint-disable react/prop-types */
import { Navigate, Route, Routes } from "react-router-dom";
import LayoutAdmin from "./components/LayoutAdmin";
import LayoutWebsite from "./components/LayoutWebsite";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminProductsAddPage from "./pages/admin/AdminProductsAddPage";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import Dashboard from "./pages/admin/Dashboard";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LayoutWebsite />}>
                    <Route index element={<HomePage />} />
                    <Route path="products" element={<ProductsPage />} />
                </Route>
                <Route path="admin" element={<LayoutAdmin />}>
                    <Route index element={<Navigate to="dashboard" />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="products" element={<AdminProductsPage />} />
                    <Route path="products/add" element={<AdminProductsAddPage />} />
                </Route>
            </Routes>
        </>
    );
};
export default App;

/**
 * B1: npm i -g json-server@0.17.4
 * B2: Tạo file db.json ở thư mục gốc với nội dung có sẵn
 * B3: truy cập file package.json, thêm dòng "server": "json-server --watch db.json" vào scripts
 * B3: npm run server
 */
