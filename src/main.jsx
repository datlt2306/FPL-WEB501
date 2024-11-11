import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/products",
        element: <ProductsPage />,
    },
]);

createRoot(document.getElementById("root")).render(
    <>
        <RouterProvider router={routers} />
    </>
);

// B1: npm i react-router-dom
// B2: Truy cập file main.js
// chỉnh sửa code như thầy đã viết
// B3: Cài đặt extension "React+Es7..."
// B4: Tạo page "rafce"
