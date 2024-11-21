const TodoList = () => {
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
                <li className="list-group-item d-flex align-items-center">
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
                </li>
            </ul>
        </div>
    );
};

export default TodoList;

/**
 * Bước 1: Tạo giao diện
 * Bước 2: Fake 1 danh sách và hiển thị ra ngoài
 * Bước 3: Tạo form và xử lý form để thêm mới todo
 * Bước 4: Xóa form
 * Bước 5: Xử lý sự kiện khi click vào checkbox ( completed)
 */
