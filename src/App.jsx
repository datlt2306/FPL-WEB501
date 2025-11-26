import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import DemoUseEffect from "./components/DemoUseEffect";

function App() {
    return (
        <div>
            <Link to="/">Trang chủ</Link>
            <Link to="/about">Trang giới thiệu</Link>
            <Routes>
                <Route path="/" element={<h1>Trang chủ</h1>} />
                <Route path="about" element={<h1>Trang giới thiệu</h1>} />
            </Routes>
        </div>
    );
}
// npm i  react-router-dom
// gắn component <BrowserRouter /> ở main.jsx
// code

export default App;
