import React, { useState } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, name: "A" },
        { id: 2, name: "B" },
        { id: 3, name: "C" },
    ]);
    return (
        <div>
            {todos.map((item) => (
                <li key={item.id}>
                    {item.name} <button>Xóa</button>
                </li>
            ))}
        </div>
    );
};

export default TodoList;
