import { Route, Routes } from "react-router-dom";
import LayoutWebsite from "./components/LayoutWebsite";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/Products";
import LayoutAdmin from "./components/LayoutAdmin";
function App() {
    return (
        <div>
            <Routes>
                <Route path="" element={<LayoutWebsite />}>
                    <Route index element={<HomePage />} />
                    <Route path="products" element={<ProductsPage />} />
                </Route>
                <Route path="admin" element={<LayoutAdmin />} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </div>
    );
}

export default App;
