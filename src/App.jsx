import { useState } from "react";
import "./App.css";

function ParentComponent({ data, onHandleChange }) {
    // data => 0
    return <ChildComponent data2={data} onHandleChange={onHandleChange} />;
}
function ChildComponent({ data2, onHandleChange }) {
    return (
        <div>
            ChildComponent {data2}
            <button onClick={onHandleChange}>Change</button>
        </div>
    );
}
function App() {
    const [count, setCount] = useState(1);
    return (
        <div>
            <ParentComponent data={count} onHandleChange={() => setCount(count + 1)} />
        </div>
    );
}

export default App;
