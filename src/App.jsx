import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import LayoutWebsite from "./components/LayoutWebsite";
import LayoutAdmin from "./components/LayoutAdmin";
import DashboardPage from "./pages/admin/DashboardPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AddProduct from "./pages/admin/AddProduct";
import EditProduct from "./pages/admin/EditProduct";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LayoutWebsite />}>
                    <Route index element={<HomePage />} />
                    <Route path="products" element={<ProductsPage />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="signin" element={<Signin />} />
                </Route>
                <Route path="admin" element={<LayoutAdmin />}>
                    <Route index element={<Navigate to="dashboard" />} />
                    <Route path="dashboard" element={<DashboardPage />} />
                    <Route path="products" element={<AdminProductsPage />} />
                    <Route path="products/add" element={<AddProduct />} />
                    <Route path="products/:id/edit" element={<EditProduct />} />
                </Route>
            </Routes>
        </div>
    );
};
export default App;

// B1: Bật terminal gõ: npm i -g json-server@0.17.4
// B2: Tạo 1 file db.json ở thư mục gốc của project với nội dung sau file thầy tạo
// B3: truy cập file package.json và thêm dòng "server": "json-server --watch db.json" vào scripts
// B4: npm run server
// B5: truy cập api http://localhost:3000/products

// /admin - redirect -> /admin/dashboard

/**============== Buổi 14 ================ */
/**
 * 1. Sử dụng package: react-hook-form : npm i react-hook-form axios
 * 2. sử dụng Axios để gửi request thay cho fetch()
 * 3. Sử dụng async/await làm việc thay cho .then() và .catch()
 * 4. Hoàn thiện cập nhật sản phẩm
 * 5. Sử dụng json-server-auth để hoàn thiện chức năng đăng ký/Đăng nhập
 */

/**============== Đăng ký/Đăng nhập ================ */

/**
 * B1: Cài đặt json-server-auth: npm i json-server-auth -D
 * B2: Tạo 1 collection user mới trong db.json => "users": []
 */
