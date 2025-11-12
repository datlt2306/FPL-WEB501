import React from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
    return (
        <div className="w-full max-w-xl mx-auto p-4">
            <h2 className="text-xl font-semibold mb-3">Todo List</h2>
            <TodoForm />
            <ul className="space-y-2">
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
