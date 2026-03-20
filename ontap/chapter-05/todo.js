const todos = [{
  id: 1,
  text: 'Todo 1',
  completed: false,
}, {
  id: 2,
  text: 'Todo 2',
  completed: false,
}, {
  id: 3,
  text: 'Todo 3',
  completed: false,
}];

const inputElement = document.querySelector('#todo-input');
const addButtonElement = document.querySelector('#add-button');
const todoListElement = document.querySelector('#todo-list');

const createTodoItem = (text) => {
  const trimmedText = text.trim();
  if (!trimmedText) {
    return null;
  }
  return {
    id: Date.now(),
    text: trimmedText,
    completed: false,
  };
};

const renderTodos = () => {
  if (!todoListElement) {
    return;
  }

  // Sử dụng innerHTML thay vì createElement
  todoListElement.innerHTML = todos
    .map((todo) => {
      return `
        <li class="flex items-center gap-3 px-3 py-2 rounded-lg border border-slate-200 hover:bg-slate-50">
          <input
            type="checkbox"
            class="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 focus:ring-offset-0 cursor-pointer"
            data-id="${todo.id}"
            aria-label="Đánh dấu hoàn thành: ${todo.text}"
            ${todo.completed ? "checked" : ""}
          >
          <span class="flex-1 text-sm${todo.completed ? " line-through text-slate-400" : " text-slate-800"}">${todo.text}</span>
          <button
            type="button"
            data-id="${todo.id}"
            data-role="delete"
            class="px-2 py-1 text-xs rounded bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            aria-label="Xóa công việc: ${todo.text}"
          >Xóa</button>
        </li>
      `;
    })
    .join('');
};

const handleAddTodo = () => {
  if (!inputElement) {
    return;
  }

  const newTodo = createTodoItem(inputElement.value);

  if (!newTodo) {
    inputElement.focus();
    return;
  }

  todos.push(newTodo);
  renderTodos();

  inputElement.value = '';
  inputElement.focus();
  updateAddButtonDisabledState();
};

const handleInputKeyDown = (event) => {
  if (event.key !== 'Enter') {
    return;
  }

  event.preventDefault();
  handleAddTodo();
};

const handleListClick = (event) => {
  const target = event.target;

  if (!(target instanceof HTMLElement)) {
    return;
  }

  const isDeleteButton = target.dataset.role === 'delete';

  if (!isDeleteButton) {
    return;
  }

  const todoId = Number(target.dataset.id);

  if (!todoId) {
    return;
  }

  const todoIndex = todos.findIndex((todo) => todo.id === todoId);

  if (todoIndex === -1) {
    return;
  }

  todos.splice(todoIndex, 1);
  renderTodos();
};

const handleListChange = (event) => {
  const target = event.target;
  // target là input checkbox khi click vào
  if (!(target instanceof HTMLInputElement)) {
    return;
  }

  if (target.type !== 'checkbox') {
    return;
  }

  const todoId = Number(target.dataset.id);

  if (!todoId) {
    return;
  }
  const todo = todos.find((item) => item.id === todoId);

  const status = true;
  if (status) {
    console.log('Dep trai')
  } else {
    console.log('Bốc cát');
  }

  status ? console.log('Dep trai') : console.log('Bốc cát');

  if (!todo) {
    return;
  }

  todo.completed = !todo.completed;
  renderTodos();
};

const updateAddButtonDisabledState = () => {
  if (!addButtonElement || !inputElement) {
    return;
  }

  addButtonElement.disabled = inputElement.value.trim().length === 0;
};

const handleInputChange = () => {
  updateAddButtonDisabledState();
};

const initializeTodoApp = () => {
  if (!inputElement || !addButtonElement || !todoListElement) {
    return;
  }

  addButtonElement.addEventListener('click', handleAddTodo);
  inputElement.addEventListener('keydown', handleInputKeyDown);
  inputElement.addEventListener('input', handleInputChange);
  todoListElement.addEventListener('click', handleListClick);
  todoListElement.addEventListener('change', handleListChange);

  updateAddButtonDisabledState();
  renderTodos();
};

document.addEventListener('DOMContentLoaded', initializeTodoApp);

