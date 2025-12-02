import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductList from "./components/ProductList";
import ProductAdd from "./components/ProductAdd";
import ProductEdit from "./components/ProductEdit";

function App() {
    return (
        <div className="container mt-5">
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="add" element={<ProductAdd />} />
                <Route path=":id/edit" element={<ProductEdit />} />
            </Routes>
        </div>
    );
}

export default App;
