import { useState } from "react";
import "./App.css";

function App() {
    const [color, setColor] = useState("red");
    const [todos, setTodos] = useState([
        { id: 1, title: "Learn React" },
        { id: 2, title: "Learn Vue" },
        { id: 3, title: "Learn Angular" },
    ]);
    return (
        <>
            <button onClick={() => setColor("blue")}>Change</button>
            <div style={{ background: color, width: 200, height: 200 }}>Content</div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.title}
                        <button
                            onClick={() => setTodos(todos.filter((item) => item.id !== todo.id))}
                        >
                            Remove Todo
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}
export default App;

// Phuương thức .map() => tạo ra mảng mới từ mảng cũ
// [1,2,3,4].map(function(number){ return number * 2 }) => [2,4,6,8]
