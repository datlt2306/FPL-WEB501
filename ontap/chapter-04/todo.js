let todos = [
    { id: 1, title: "Học JavaScript", completed: false },
    { id: 2, title: "Học React", completed: false },
    { id: 3, title: "Học Vue", completed: false },
];

let nextId = todos.reduce((maxId, todo) => {
    if (todo.id > maxId) {
        return todo.id;
    }
    return maxId;
}, 0) + 1;

const todosElement = document.getElementById("todos");
const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoStatsElement = document.getElementById("todoStats");
const clearCompletedButton = document.getElementById("clearCompleted");

const updateStats = () => {
    const remainingCount = todos.filter((todo) => !todo.completed).length;
    if (!todoStatsElement) {
        return;
    }
    todoStatsElement.textContent = `${remainingCount} công việc còn lại`;
};

const renderTodos = () => {
    if (!todosElement) {
        return;
    }

    const todosHtml = todos
        .map((todo) => {
            const checkboxChecked = todo.completed ? "checked" : "";
            const textClasses = todo.completed
                ? "flex-1 line-through text-slate-500"
                : "flex-1 text-white";

            return `
            <li class="group flex items-center gap-3 p-4 hover:bg-white/5 transition-colors">
                <input 
                    type="checkbox"
                    data-id="${todo.id}"
                    ${checkboxChecked}
                    class="w-5 h-5 rounded border-white/30 bg-white/10 text-purple-500 focus:ring-purple-500 focus:ring-offset-0 cursor-pointer"
                    aria-label="Đánh dấu hoàn thành công việc ${todo.title}"
                >
                <span class="${textClasses}">${todo.title}</span>
                <button
                    type="button"
                    data-id="${todo.id}"
                    class="opacity-0 group-hover:opacity-100 p-2 text-red-400 hover:text-red-300 hover:bg-red-500/20 rounded-lg transition-all"
                    aria-label="Xóa công việc ${todo.title}"
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

    todosElement.innerHTML = todosHtml;

    const checkboxElements = todosElement.querySelectorAll("input[type='checkbox'][data-id]");
    checkboxElements.forEach((checkboxElement) => {
        checkboxElement.addEventListener("change", handleToggleCompleted);
    });

    const deleteButtons = todosElement.querySelectorAll("button[data-id]");
    deleteButtons.forEach((deleteButton) => {
        deleteButton.addEventListener("click", handleDeleteTodo);
    });

    updateStats();
};

const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!todoInput) {
        return;
    }

    const trimmedValue = todoInput.value.trim();
    if (!trimmedValue) {
        return;
    }

    const newTodo = {
        id: nextId,
        title: trimmedValue,
        completed: false,
    };

    todos = [...todos, newTodo];
    nextId += 1;

    todoInput.value = "";
    todoInput.focus();

    renderTodos();
};

const handleToggleCompleted = (event) => {
    const target = event.target;
    const idString = target.dataset.id;

    if (!idString) {
        return;
    }

    const todoId = Number(idString);

    todos = todos.map((todo) => {
        if (todo.id === todoId) {
            return {
                ...todo,
                completed: !todo.completed,
            };
        }
        return todo;
    });

    renderTodos();
};

const handleDeleteTodo = (event) => {
    const target = event.currentTarget;
    const idString = target.dataset.id;

    if (!idString) {
        return;
    }

    const todoId = Number(idString);
    todos = todos.filter((todo) => todo.id !== todoId);

    renderTodos();
};

const handleClearCompleted = () => {
    todos = todos.filter((todo) => !todo.completed);
    renderTodos();
};

if (todoForm) {
    todoForm.addEventListener("submit", handleFormSubmit);
}

if (clearCompletedButton) {
    clearCompletedButton.addEventListener("click", handleClearCompleted);
}

renderTodos();