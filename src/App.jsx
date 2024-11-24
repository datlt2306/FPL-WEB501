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
