import { useState } from "react";
import "./App.css";
import ShowInfo from "./components/ShowInfo";

function App() {
    const [color, setColor] = useState("red");
    const handleClick = () => {
        setColor("blue");
    };
    return (
        <>
            <button onClick={handleClick}>Change</button>
            <div style={{ background: color, width: 200, height: 200 }}>Content</div>
        </>
    );
}
export default App;
