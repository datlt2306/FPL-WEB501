import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "./dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

// B1: npm i react-router-dom
// B2: Truy cập file main.js
// chỉnh sửa code như thầy đã viết
// B3: Cài đặt extension "React+Es7..."
// B4: Tạo page "rafce"
