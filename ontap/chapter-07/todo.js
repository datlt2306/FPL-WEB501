let todos = [];

const API_URL = 'https://dummyjson.com/todos';
const todosListElement = document.querySelector('#todos');

const renderTodos = async () => {
    try {
        const response = await fetch(API_URL);
        const { todos } = await response.json();

        todosListElement.innerHTML = todos.map(({ id, todo, completed }) => {
            return `
                <li class="flex items-center gap-3 px-3 py-2 rounded-lg ">
                    <input
                        type="checkbox"
                        class="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 focus:ring-offset-0 cursor-pointer"
                        data-id="${id}"
                        ${completed ? "checked" : ""}
                    >
                    <span class="flex-1 text-sm${completed ? " line-through text-slate-400" : " text-white"}">${todo}</span>
                    <button
                        type="button"
                        data-id="${id}"
                        data-role="delete"
                        class="px-2 py-1 text-xs rounded bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                        aria-label="Xóa công việc: ${todo}"
                    >Xóa</button>
                    </li>
            `
        }).join('');
    } catch (error) {

    }
}
document.addEventListener('DOMContentLoaded', () => {
    renderTodos();
})

// boilerplateư