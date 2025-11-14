import React from "react";
import Button from "./Button";

const TodoItem = ({ todo, onDelete }) => {
    return (
        <li
            key={todo.id}
            className="flex items-center p-3 bg-gray-50 rounded border hover:bg-gray-100 transition"
        >
            <span className={`flex-1 "text-gray-700"`}>{todo.text}</span>
            <span className="text-green-500 font-bold">✓</span>
            <Button variant="danger" size="small" onClick={() => onDelete(todo.id)}>
                Xóa
            </Button>
        </li>
    );
};

export default TodoItem;
