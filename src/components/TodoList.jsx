import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoHeader from "./TodoHeader";
import Button from "./Button";

const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: "Học React", completed: false }, // todo
        { id: 2, text: "Làm bài tập", completed: true }, // todo
        { id: 3, text: "Review code", completed: false }, // todo
    ]);
    const onDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
            <TodoHeader title="📝 Todo List">
                <span className="text-sm text-gray-500">3 tasks</span>
                <Button variant="success" size="small">
                    Thêm mới
                </Button>
            </TodoHeader>
            <ul className="space-y-2">
                {todos.map((todo) => (
                    <TodoItem todo={todo} onDelete={onDelete} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
