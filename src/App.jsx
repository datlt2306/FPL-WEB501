import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import LayoutWebsite from "./components/LayoutWebsite";
import TodoList from "./components/TodoList";

const App = () => {
    return (
        <div>
            <TodoList />
            {/* <Routes>
                <Route path="/" element={<LayoutWebsite />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<ProductsPage />} />
                </Route>
            </Routes> */}
        </div>
    );
};
export default App;
