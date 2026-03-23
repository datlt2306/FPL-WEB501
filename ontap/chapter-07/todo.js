let todos = [];

const API_URL = `https://dummyjson.com/todos`;

const todosElement = document.getElementById("todos");
const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoStatsElement = document.getElementById("todoStats");
const clearCompletedButton = document.getElementById("clearCompleted");

const updateStats = () => {
};

const renderTodos = () => {
    if (!todosElement) {
        return;
    }
    fetch(`${API_URL}`)
        .then(response => response.json())
        .then(data => {
            const todosHtml = data.todos
                    .map((todo) => {
                        return `
                        <li class="group flex items-center gap-3 p-4 hover:bg-white/5 transition-colors">
                            <input 
                                type="checkbox"
                                class="w-5 h-5 rounded border-white/30 bg-white/10 text-purple-500 focus:ring-purple-500 focus:ring-offset-0 cursor-pointer"
                                aria-label="Đánh dấu hoàn thành công việc ${todo.todo}"
                            >
                            <span>${todo.todo}</span>
                            <button
                                type="button"
                                data-id="${todo.id}"
                                class="opacity-0 group-hover:opacity-100 p-2 text-red-400 hover:text-red-300 hover:bg-red-500/20 rounded-lg transition-all"
                                aria-label="Xóa công việc ${todo.todo}"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                        </li>
                    `;
                    })
                    .join("");
                    todosElement.innerHTML = todosHtml
        })
        .catch(error => console.log('Lỗi API'))
};

const handleFormSubmit = (event) => {
   
};

const handleToggleCompleted = (event) => {
    
};

const handleDeleteTodo = (event) => {
    
};

const handleClearCompleted = () => {
   
};

renderTodos();