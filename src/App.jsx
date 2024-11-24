import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import LayoutWebsite from "./components/LayoutWebsite";
import LayoutAdmin from "./components/LayoutAdmin";
import DashboardPage from "./pages/admin/DashboardPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LayoutWebsite />}>
                    <Route index element={<HomePage />} />
                    <Route path="products" element={<ProductsPage />} />
                </Route>
                <Route path="admin" element={<LayoutAdmin />}>
                    <Route index element={<DashboardPage />} />
                    <Route path="products" element={<AdminProductsPage />} />
                </Route>
            </Routes>
        </div>
    );
};
export default App;

// B1: npm i -g json-server@0.17.4
// B2: Tạo 1 file db.json ở thư mục gốc của project với nội dung sau file thầy tạo
// B3: truy cập file package.json và thêm dòng "server": "json-server --watch db.json" vào scripts
// B4: npm run server
// B5: truy cập api http://localhost:3000/products
