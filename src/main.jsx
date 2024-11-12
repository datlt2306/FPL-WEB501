import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
ReactDOM.createRoot(document.querySelector("#root")).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
