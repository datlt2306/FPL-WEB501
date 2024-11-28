import { Navigate, Route, Routes } from "react-router-dom";
import LayoutWebsite from "./components/LayoutWebsite";
import LayoutAdmin from "./components/LayoutAdmin";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import DashboardPage from "./pages/admin/DashboardPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import ProductAdd from "./pages/admin/ProductAdd";
import ProductEdit from "./pages/admin/ProductEdit";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
function App() {
    return (
        <>
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
                    <Route path="products/add" element={<ProductAdd />} />
                    <Route path="products/:id/edit" element={<ProductEdit />} />
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

// /admin -> render dashboard page
// /admin -> redirect to /admin/dashboard -> render dashboard page

/*
 *
 *
 * GET http://localhost:3000/products => trả về danh sách sản phẩm
 * GET http://localhost:3000/products/${id} => trả về sản phẩm theo id
 * DELETE http://localhost:3000/products/${id} => xóa sản phẩm theo id
 * POST http://localhost:3000/products, phải thêm object body => thêm sản phẩm
 * PUT | PATCH http://localhost:3000/products/${id}, phải thêm object body => cập nhật sản phẩm
 */

// // // // // // // Buổi 14

/**
 * 1. Sử dụng package: react-hook-form : npm i react-hook-form axios
 * 2. sử dụng Axios để gửi request
 * 3. Sử dụng async/await làm việc thay cho .then() và .catch()
 * 4. Hoàn thiện cập nhật sản phẩm
 * 5. Sử dụng json-server-auth để hoàn thiện chức năng đăng ký/Đăng nhập
 */

/**
 * Đăng ký / Đăng nhập
 * B1: npm i json-server-auth -D
 * B2: sửa lại script server trong package.json: json-server-auth --watch db.json
 * B3: truy cập file db.json, thêm collection mới: users: []
 */
