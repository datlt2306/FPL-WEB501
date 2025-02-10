import { PlusCircle, Trash2, CheckCircle, Circle } from "lucide-react";
import { useState } from "react";
function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, title: "Học React", completed: false }, // todo
        { id: 2, title: "Học Angular", completed: false }, // todo
        { id: 3, title: "Chơi liên quân", completed: true }, // todo
        { id: 4, title: "Chơi LOL", completed: true }, // todo
    ]);
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 py-12 px-4">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-xl shadow-xl p-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                        What&apos;s on your mind?
                    </h1>

                    <form className="mb-8">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Add a new task..."
                                className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                            />
                            <button
                                type="submit"
                                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors flex items-center gap-2"
                            >
                                <PlusCircle size={20} />
                                Add
                            </button>
                        </div>
                    </form>

                    <div className="space-y-3">
                        {todos.map((todo) => (
                            <div
                                key={todo.id}
                                className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg group hover:bg-gray-100 transition-colors"
                            >
                                {todo.completed ? (
                                    <button className="text-gray-400 hover:text-purple-600 transition-colors">
                                        <CheckCircle className="text-purple-600" size={24} />
                                    </button>
                                ) : (
                                    <button className="text-gray-400 hover:text-purple-600 transition-colors">
                                        <Circle size={24} />
                                    </button>
                                )}

                                <span
                                    className={`"flex-1 text-lg" ${
                                        todo.completed
                                            ? "line-through text-gray-400"
                                            : " text-gray-700"
                                    }`}
                                >
                                    {todo.title}
                                </span>
                                <button className="text-gray-400 hover:text-red-600 opacity-0 group-hover:opacity-100! transition-all">
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="text-center text-gray-500 mt-8">
                        <p>No tasks yet. Add one to get started!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodoList;

/**
 * 1. Tách component
 * 2. Hiển thị danh sách dữ liệu
 * 3. Làm việc với form
 * 4. Xử lý sự kiện
 */
