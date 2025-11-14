import React from "react";

const TodoHeader = ({ title, children }) => {
    return (
        <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">{title}</h1>
            {children}
        </div>
    );
};

export default TodoHeader;
