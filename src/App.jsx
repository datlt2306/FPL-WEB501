import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LayoutAdmin from "./components/layouts/LayoutAdmin";
import LayoutWebsite from "./components/layouts/LayoutWebsite";
import AboutPage from "./pages/About";
import ProductAdd from "./components/ProductAdd";
import ProductEdit from "./components/ProductEdit";
import ProductList from "./components/ProductList";
import DashboardPage from "./pages/Dashboard";

function App() {
    return (
        <div className="container mt-5">
            <Routes>
                <Route path="/" element={<LayoutWebsite />}>
                    <Route path="" element={<h1>Home page</h1>} />
                    <Route path="about" element={<AboutPage />} />
                </Route>
                <Route path="admin" element={<LayoutAdmin />}>
                    <Route index element={<Navigate to="dashboard" />} />
                    <Route path="dashboard" element={<DashboardPage />} />
                    <Route path="products" element={<ProductList />} />
                    <Route path="products/add" element={<ProductAdd />} />
                    <Route path="products/:id/edit" element={<ProductEdit />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
