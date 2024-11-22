import { useState } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, title: "Học React", completed: false }, // todo
        { id: 2, title: "Học Javascript", completed: true }, //todo
        { id: 3, title: "Chơi liên quân", completed: false }, // todo
    ]);
    const [inputValue, setInputValue] = useState("");
    const [editingTodo, setEditingTodo] = useState(null);
    const [editingText, setEditingText] = useState("");
    // Hàm xóa todo
    const removeTodo = (id) => {
        const confirm = window.confirm(`Bạn có chắc chắn muốn xóa không?`);
        if (confirm) {
            setTodos(todos.filter((todo) => todo.id !== id));
        }
    };
    const onHandleInput = (e) => {
        setInputValue(e.target.value);
    };
    const addTodo = (e) => {
        e.preventDefault();
        if (inputValue === "") return;
        setTodos([
            ...todos,
            {
                id: todos.length + 1, // Tạo ID duy nhất cho công việc mới dựa trên số lượng mục hiện tại.
                title: inputValue, // Gán giá trị tiêu đề công việc bằng `inputValue`.
                completed: false, // Đặt trạng thái hoàn thành của công việc là `false`.
            },
        ]);
    };

    const startEditing = (todo) => {
        setEditingTodo(todo.id);
        setEditingText(todo.title);
    };
    const completedTodo = (id) => {
        setTodos(
            todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
        );
    };
    const saveEditing = (id) => {
        // console.log(editingText);

        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, title: editingText } : todo)));
        setEditingTodo(null);
    };
    const cancelEditing = () => {
        setEditingTodo(null);
    };
    return (
        <div className="tw-max-w-xl tw-mx-auto tw-my-10 tw-border-2 tw-border-red-500 tw-p-5">
            <form className="input-group" onSubmit={addTodo}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Learning Javascript"
                    onInput={onHandleInput}
                />
                <button className="btn btn-primary" type="submit">
                    Thêm mới
                </button>
            </form>
            <h2 className="tw-text-2xl tw-mt-5">Danh sách công việc</h2>
            <ul className="list-group tw-mt-2">
                {todos.map((todo) => (
                    <li key={todo.id} className="list-group-item d-flex align-items-center">
                        {editingTodo === todo.id ? (
                            <>
                                <input
                                    type="text"
                                    className="form-control input-sm"
                                    value={editingText}
                                    onChange={(e) => setEditingText(e.target.value)}
                                />
                                <div className="tw-flex tw-items-center tw-space-x-2 tw-ml-2">
                                    <button
                                        className="btn btn-sm btn-info"
                                        onClick={() => cancelEditing()}
                                    >
                                        Hủy
                                    </button>
                                    <button
                                        className="btn btn-sm btn-primary"
                                        onClick={() => saveEditing(todo.id)}
                                    >
                                        Lưu
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <input
                                    className="form-check-input me-3"
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => completedTodo(todo.id)}
                                />
                                <label
                                    className={`form-check-label ${
                                        todo.completed ? "tw-line-through" : ""
                                    }`}
                                    onClick={() => startEditing(todo)}
                                >
                                    {todo.title}
                                </label>
                                <button
                                    className="btn btn-sm btn-danger ms-auto"
                                    onClick={() => removeTodo(todo.id)}
                                >
                                    Xóa
                                </button>
                            </>
                        )}
                    </li>
                ))}
                {/* <li className="list-group-item d-flex align-items-center">
                    <input className="form-check-input me-3" type="checkbox" value="" />
                    <label className="form-check-label">Học React</label>
                    <button className="btn btn-sm btn-danger ms-auto">Xóa</button>
                </li>
                <li className="list-group-it    em d-flex align-items-center">
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
 * Bước 3: Tạo form và xử lý form để thêm mới todo
 * Bước 4: Xóa phần tử trong danh sách
 * Bước 5: Xử lý sự kiện khi click vào checkbox ( completed)
 * Bước 6: Xử lý sự kiện khi click vào label, hiển thị input để sửa
 * Bước 7: Xử lý sự kiện khi click vào nút lưu
 * Bước 8: Xử lý sự kiện khi click vào nút hủy
 */
