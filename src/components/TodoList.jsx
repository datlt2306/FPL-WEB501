import React from "react";

const TodoList = () => {
    return (
        <div className="w-full max-w-xl mx-auto p-4">
            <h2 className="text-xl font-semibold mb-3">Todo List</h2>

            {/* Add new todo */}
            <div className="flex items-center gap-2 mb-4">
                <input
                    type="text"
                    aria-label="Nhập công việc mới"
                    placeholder="Nhập công việc mới..."
                    className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    tabIndex={0}
                />
                <button
                    aria-label="Thêm công việc"
                    className="shrink-0 rounded-md bg-blue-600 text-white px-3 py-2 hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    tabIndex={0}
                >
                    Thêm
                </button>
            </div>

            {/* List */}
            <ul className="space-y-2">
                <li className="flex items-start gap-2 rounded-md border border-gray-200 p-2">
                    <input
                        type="checkbox"
                        className="mt-2 h-4 w-4 accent-blue-600 cursor-pointer"
                        tabIndex={0}
                    />

                    <div className="flex-1">
                        {/* Hiển thị input khi đang edit; mặc định là text */}
                        <div className="flex items-center gap-2">
                            <input
                                type="text"
                                aria-label="Chỉnh sửa tiêu đề công việc"
                                className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                                autoFocus
                                tabIndex={0}
                            />
                            {/* Khi focus/input đang edit -> hiện Update/Cancel */}
                            <button
                                aria-label="Cập nhật công việc"
                                className="rounded-md bg-green-600 text-white px-3 py-2 hover:bg-green-700 active:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                                tabIndex={0}
                            >
                                Update
                            </button>
                            <button
                                aria-label="Hủy chỉnh sửa"
                                className="rounded-md bg-gray-200 text-gray-800 px-3 py-2 hover:bg-gray-300 active:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                tabIndex={0}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>

                    {/* Xóa */}
                    <button
                        className="rounded-md bg-red-600 text-white px-3 py-2 hover:bg-red-700 active:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                        tabIndex={0}
                    >
                        Xóa
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default TodoList;
