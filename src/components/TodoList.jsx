import React, { useState } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "Học Rea t",
            completed: false,
        }, // todo
        {
            id: 2,
            title: "Chơi liên quân mobile",
            completed: false,
        }, // todo
        {
            id: 3,
            title: "Học Javascript nâng cao",
            completed: false,
        }, // todo
    ]);

    const removeTodo = (id) => {
        const confirm = window.confirm(`Bạn có chắc chắn muốn xóa không?`);
        if (!confirm) return;
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    return (
        <div className="tw-max-w-xl tw-mx-auto tw-my-10 tw-border-2 tw-border-red-500 tw-p-5">
            <form className="input-group">
                <input type="text" className="form-control" placeholder="Learning Javascript" />
                <button className="btn btn-primary" type="submit">
                    Thêm mới
                </button>
            </form>
            <h2 className="tw-text-2xl tw-mt-5">Danh sách công việc</h2>
            <ul className="list-group tw-mt-2">
                {todos.map((todo) => (
                    <li key={todo.id} className="list-group-item d-flex align-items-center">
                        <input className="form-check-input me-3" type="checkbox" value="" />
                        <label className="form-check-label">{todo.title}</label>
                        <button
                            className="btn btn-sm btn-danger ms-auto"
                            onClick={() => removeTodo(todo.id)}
                        >
                            Xóa
                        </button>
                    </li>
                ))}
                {/* <li className="list-group-item d-flex align-items-center">
                    <input className="form-check-input me-3" type="checkbox" value="" />
                    <label className="form-check-label">Học React</label>
                    <button className="btn btn-sm btn-danger ms-auto">Xóa</button>
                </li>
                <li className="list-group-item d-flex align-items-center">
                    <input type="text" className="form-control input-sm" value="Học Javascript" />
                    <div className="tw-flex tw-items-center tw-space-x-2 tw-ml-2">
                        <button className="btn btn-sm btn-info">Hủy</button>
                        <button className="btn btn-sm btn-primary">Lưu</button>
                    </div>
                </li>
                <li className="list-group-item d-flex align-items-center">
                    <input className="form-check-input me-3" type="checkbox" value="" />
                    <label className="form-check-label tw-line-through">Học React</label>
                    <button className="btn btn-sm btn-danger ms-auto">Xóa</button>
                </li> */}
            </ul>
        </div>
    );
};

export default TodoList;

/**
 * Bước 1: Tạo giao diện
 * Bước 2: Fake 1 danh sách và hiển thị ra ngoài
 * Bước 3: Xóa phần tử trong mảng, dựa vào id khi click vào button xóa
 * Bước 4: Tạo form và xử lý form để thêm mới todo
 * Bước 5: Xóa form
 * Bước 6: Xử lý sự kiện khi click vào checkbox ( completed)
 */
