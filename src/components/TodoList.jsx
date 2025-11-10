import React, { useMemo, useState } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, title: "Học React", completed: false },
        { id: 2, title: "Ôn lại JavaScript", completed: true },
    ]);
    const [newTodoTitle, setNewTodoTitle] = useState("");
    const [editingTodoId, setEditingTodoId] = useState(null);
    const [editingTitle, setEditingTitle] = useState("");

    const isEditing = useMemo(() => editingTodoId !== null, [editingTodoId]);

    const handleAddTodo = () => {
        const trimmed = newTodoTitle.trim();
        if (!trimmed) return;
        const newTodo = {
            id: Date.now(),
            title: trimmed,
            completed: false,
        };
        setTodos((prev) => [newTodo, ...prev]);
        setNewTodoTitle("");
    };

    const handleKeyDownAdd = (event) => {
        if (event.key === "Enter") {
            handleAddTodo();
        }
    };

    const handleToggleCompleted = (todoId) => {
        setTodos((prev) =>
            prev.map((t) =>
                t.id === todoId ? { ...t, completed: !t.completed } : t
            )
        );
    };

    const handleDeleteTodo = (todoId) => {
        setTodos((prev) => prev.filter((t) => t.id !== todoId));
        if (editingTodoId === todoId) {
            setEditingTodoId(null);
            setEditingTitle("");
        }
    };

    const handleStartEdit = (todoId, currentTitle) => {
        setEditingTodoId(todoId);
        setEditingTitle(currentTitle);
    };

    const handleCancelEdit = () => {
        setEditingTodoId(null);
        setEditingTitle("");
    };

    const handleConfirmEdit = () => {
        const trimmed = editingTitle.trim();
        if (!trimmed) {
            // Nếu rỗng sau khi sửa, giữ nguyên và thoát edit
            setEditingTodoId(null);
            setEditingTitle("");
            return;
        }
        setTodos((prev) =>
            prev.map((t) => (t.id === editingTodoId ? { ...t, title: trimmed } : t))
        );
        setEditingTodoId(null);
        setEditingTitle("");
    };

    const handleKeyDownEdit = (event) => {
        if (event.key === "Enter") {
            handleConfirmEdit();
            return;
        }
        if (event.key === "Escape") {
            handleCancelEdit();
        }
    };

    return (
        <div className="w-full max-w-xl mx-auto p-4">
            <h2 className="text-xl font-semibold mb-3">Todo List</h2>

            {/* Add new todo */}
            <div className="flex items-center gap-2 mb-4">
                <input
                    type="text"
                    value={newTodoTitle}
                    onChange={(e) => setNewTodoTitle(e.target.value)}
                    onKeyDown={handleKeyDownAdd}
                    aria-label="Nhập công việc mới"
                    placeholder="Nhập công việc mới..."
                    className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    tabIndex={0}
                />
                <button
                    onClick={handleAddTodo}
                    aria-label="Thêm công việc"
                    className="shrink-0 rounded-md bg-blue-600 text-white px-3 py-2 hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") handleAddTodo();
                    }}
                >
                    Thêm
                </button>
            </div>

            {/* List */}
            <ul className="space-y-2">
                {todos.length === 0 ? (
                    <li className="text-gray-500 text-sm">Chưa có công việc nào.</li>
                ) : (
                    todos.map((todo) => {
                        const isItemEditing = editingTodoId === todo.id;
                        return (
                            <li
                                key={todo.id}
                                className="flex items-start gap-2 rounded-md border border-gray-200 p-2"
                            >
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => handleToggleCompleted(todo.id)}
                                    aria-label={`Đánh dấu hoàn thành: ${todo.title}`}
                                    className="mt-2 h-4 w-4 accent-blue-600 cursor-pointer"
                                    tabIndex={0}
                                />

                                <div className="flex-1">
                                    {/* Hiển thị input khi đang edit; mặc định là text */}
                                    {isItemEditing ? (
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="text"
                                                value={editingTitle}
                                                onChange={(e) => setEditingTitle(e.target.value)}
                                                onKeyDown={handleKeyDownEdit}
                                                aria-label="Chỉnh sửa tiêu đề công việc"
                                                className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                                                autoFocus
                                                tabIndex={0}
                                            />
                                            {/* Khi focus/input đang edit -> hiện Update/Cancel */}
                                            <button
                                                onClick={handleConfirmEdit}
                                                aria-label="Cập nhật công việc"
                                                className="rounded-md bg-green-600 text-white px-3 py-2 hover:bg-green-700 active:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                                                tabIndex={0}
                                                onKeyDown={(e) => {
                                                    if (e.key === "Enter" || e.key === " ")
                                                        handleConfirmEdit();
                                                }}
                                            >
                                                Update
                                            </button>
                                            <button
                                                onClick={handleCancelEdit}
                                                aria-label="Hủy chỉnh sửa"
                                                className="rounded-md bg-gray-200 text-gray-800 px-3 py-2 hover:bg-gray-300 active:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                                tabIndex={0}
                                                onKeyDown={(e) => {
                                                    if (e.key === "Enter" || e.key === " ")
                                                        handleCancelEdit();
                                                }}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    ) : (
                                        <button
                                            type="button"
                                            onClick={() => handleStartEdit(todo.id, todo.title)}
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter" || e.key === " ")
                                                    handleStartEdit(todo.id, todo.title);
                                            }}
                                            aria-label={`Chỉnh sửa: ${todo.title}`}
                                            tabIndex={0}
                                            className={`w-full text-left rounded md:rounded-sm px-2 py-1 focus:outline-none focus:ring-2 ${
                                                todo.completed
                                                    ? "line-through text-gray-400 focus:ring-gray-300"
                                                    : "text-gray-900 focus:ring-blue-500"
                                            }`}
                                            title="Nhấn để chỉnh sửa"
                                        >
                                            {todo.title}
                                        </button>
                                    )}
                                </div>

                                {/* Xóa */}
                                <button
                                    onClick={() => handleDeleteTodo(todo.id)}
                                    aria-label={`Xóa: ${todo.title}`}
                                    className="rounded-md bg-red-600 text-white px-3 py-2 hover:bg-red-700 active:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" || e.key === " ")
                                            handleDeleteTodo(todo.id);
                                    }}
                                >
                                    Xóa
                                </button>
                            </li>
                        );
                    })
                )}
            </ul>
        </div>
    );
};

export default TodoList;


