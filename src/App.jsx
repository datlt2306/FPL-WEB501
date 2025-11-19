import { useState } from "react";
import "./App.css";

const getTodosFromLocalStorage = () => {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    return todos;
};

function App() {
    const [todos, setTodos] = useState(getTodosFromLocalStorage());
    const [valueInput, setValueInput] = useState("");
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState("");

    const onHandleDelete = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
    };
    const onToggleComplete = (id) => {
        console.log(id);
        const newTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
    };

    const onHandleAdd = (e) => {
        // chặn sự iện reload
        e.preventDefault();
        if (valueInput.trim() === "") return;
        const newTodo = {
            id: todos.length + 1,
            text: valueInput,
            completed: false,
        };

        setTodos([...todos, newTodo]);
        localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
    };
    const onHandleUpdate = (id) => {
        const newTodos = todos.map((todo) => (todo.id == id ? { ...todo, text: editText } : todo));
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
        setEditId(null);
    };
    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
            <form className="mb-4" onSubmit={onHandleAdd}>
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Thêm công việc mới..."
                        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setValueInput(e.target.value)}
                    />
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                        Thêm
                    </button>
                </div>
            </form>
            <ul className="space-y-2 mb-4">
                {todos.length > 0 ? (
                    todos.map((todo) => (
                        <li
                            key={todo.id}
                            className="flex items-center p-3 bg-gray-50 rounded border hover:bg-gray-100 transition cursor-pointer"
                        >
                            {editId === todo.id ? (
                                <>
                                    <input
                                        type="text"
                                        className="border"
                                        defaultValue={todo.text}
                                        onChange={(e) => setEditText(e.target.value)}
                                    />
                                    <button
                                        onClick={() => onHandleUpdate(todo.id)}
                                        className="ml-2 text-white bg-blue-500 font-bold"
                                    >
                                        Lưu
                                    </button>
                                    <button
                                        onClick={() => setEditId(null)}
                                        className="ml-2 text-red-500 hover:text-red-700 font-bold"
                                    >
                                        Hủy
                                    </button>
                                </>
                            ) : (
                                <>
                                    <input
                                        type="checkbox"
                                        checked={todo.completed}
                                        onChange={() => onToggleComplete(todo.id)}
                                    />
                                    <span
                                        className={`ml-3 flex-1 text-gray-700 ${
                                            todo.completed ? "line-through" : ""
                                        } `}
                                        onClick={() => setEditId(todo.id)}
                                    >
                                        {todo.text}
                                    </span>
                                    <button
                                        onClick={() => onHandleDelete(todo.id)}
                                        className="ml-2 text-red-500 hover:text-red-700 font-bold"
                                    >
                                        xóa
                                    </button>
                                </>
                            )}
                        </li>
                    ))
                ) : (
                    <li>Không có dữ liệu</li>
                )}
            </ul>
        </div>
    );
}

export default App;
