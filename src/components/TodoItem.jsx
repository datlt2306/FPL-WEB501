import React from "react";
import Button from "./Button";

const TodoItem = ({ todo }) => {
    return (
        <li className="flex items-start gap-2 rounded-md border border-gray-200 p-2">
            <input
                type="checkbox"
                className="mt-2 h-4 w-4 accent-blue-600 cursor-pointer"
                tabIndex={0}
            />
            <div className="flex-1">
                <div className="flex items-center gap-2">
                    {todo.text}
                    {/* <input
                                    type="text"
                                    aria-label="Chỉnh sửa tiêu đề công việc"
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                                    autoFocus
                                    tabIndex={0}
                                /> */}
                    {/* <button
                                    aria-label="Cập nhật công việc"
                                    className="rounded-md bg-green-600 text-white px-3 py-2 hover:bg-green-700 active:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    tabIndex={0}
                                >
                                    Update
                                </button> */}
                    {/* <button
                                    aria-label="Hủy chỉnh sửa"
                                    className="rounded-md bg-gray-200 text-gray-800 px-3 py-2 hover:bg-gray-300 active:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                    tabIndex={0}
                                >
                                    Cancel
                                </button> */}
                </div>
            </div>
            {/* Xóa */}
            {/* <button
                className="rounded-md bg-red-600 text-white px-3 py-2 hover:bg-red-700 active:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                tabIndex={0}
            >
                Xóa
            </button> */}
            <Button variant="danger" size="small">
                Xóa
            </Button>
        </li>
    );
};

export default TodoItem;
