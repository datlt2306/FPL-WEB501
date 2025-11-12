import React from "react";
import Button from "./Button";

const TodoForm = () => {
    return (
        <div className="flex items-center gap-2 mb-4">
            <form>
                <input
                    type="text"
                    aria-label="Nhập công việc mới"
                    placeholder="Nhập công việc mới..."
                    className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    tabIndex={0}
                />
                <Button variant="primary" size="medium">
                    Thêm
                </Button>
            </form>
        </div>
    );
};

export default TodoForm;
