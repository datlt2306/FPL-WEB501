import { Route, Routes } from "react-router-dom";
import LayoutWebsite from "./components/LayoutWebsite";
import LayoutAdmin from "./components/LayoutAdmin";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import DashboardPage from "./pages/admin/DashboardPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LayoutWebsite />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<ProductsPage />} />
                </Route>
                <Route path="/admin" element={<LayoutAdmin />}>
                    <Route index element={<DashboardPage />} />
                    <Route path="products" element={<AdminProductsPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;

// B1: npm install -g json-server@0.17.4
// B2: Tạo file db.json với nội dung như file thầy gửi.
// B3: Truy cập file package.json
// B4: Thêm vào scripts:
// "server": "json-server --watch db.json"
// B5: Chạy lệnh: npm run server
