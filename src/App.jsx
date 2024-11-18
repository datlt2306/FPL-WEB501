/* eslint-disable react/prop-types */
import { Link, Outlet, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/Products";
import HomePage from "./pages/Home";
import LayoutWebsite from "./components/LayoutWebsite";
import Counter from "./components/Counter";

const LayoutAdmin = () => {
    return (
        <>
            <aside>Aside</aside>
            <main>
                <Outlet />
            </main>
        </>
    );
};
const App = () => {
    return (
        <>
            <Counter />
            {/* <Routes>
                <Route path="/" element={<LayoutWebsite />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="products" element={<ProductsPage />} />
                </Route>
                <Route path="/admin" element={<LayoutAdmin />}>
                    <Route path="/admin/products" element={<h1>Admin products page</h1>} />
                    <Route path="/admin/products/add" element={<h1>Admin Add products page</h1>} />
                </Route>
            </Routes> */}
        </>
    );
};
export default App;
