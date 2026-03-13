const todosData = [
    { id: 1, label: "Học JavaScript", completed: false },
    { id: 2, label: "Làm bài tập về nhà", completed: false },
    { id: 3, label: "Đọc tài liệu React", completed: false },
    { id: 4, label: "Dọn dẹp phòng học", completed: false },
    { id: 5, label: "Viết ghi chú buổi học", completed: false },
    { id: 6, label: "Ôn lại kiến thức array", completed: false },
    { id: 7, label: "Thực hành function", completed: false },
    { id: 8, label: "Xem video bài giảng mới", completed: false },
    { id: 9, label: "Kiểm tra code mẫu", completed: false },
    { id: 10, label: "Thử build mini project", completed: false }
];

function renderTodos() {
    const todosElement = document.querySelector('#todos');
    let content = "";
    todosData.forEach((todo) => {
        content += `<li class="group flex items-center gap-3 p-4 hover:bg-white/5 transition-colors">
                    <input type="checkbox"
                        class="w-5 h-5 rounded border-white/30 bg-white/10 text-purple-500 focus:ring-purple-500 focus:ring-offset-0 cursor-pointer">
                    <span class="flex-1 text-white">${todo.label}</span>
                    <button type="button"
                        class="opacity-0 group-hover:opacity-100 p-2 text-red-400 hover:text-red-300 hover:bg-red-500/20 rounded-lg transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </li>`
    });
    todosElement.innerHTML = content;
}

document.addEventListener('DOMContentLoaded', () => {
    renderTodos();
})