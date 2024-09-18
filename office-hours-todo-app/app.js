
// TODO: implement logic to get todos from local storage
function getTodos() {
  const localTodos = localStorage.getItem('_todos');

  if (localTodos === null) {
    return [];
  }

  return JSON.parse(localTodos);
}

// TODO: implement logic to add todo to todos list
function addTodo(newTodo) {
  // use most up-to-date value from local storage
  // mutate the todos array
  // update local storage value
  const todos = getTodos();
  todos.push(newTodo);
  localStorage.setItem('_todos', JSON.stringify(todos));
}

function deleteTodo() {}

function updateTodo() {}

function renderTodos() {
  // get todos from local storage
  const todos = getTodos();

  // get parent element on the DOM to contain new elements
  const todoContainer = document.querySelector(".todo-list");

  // iterate over todos array
  todos.forEach(function (todo, index) {

    // create elements in memory
    const article = document.createElement("article");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const statusContainer = document.createElement("div");
    const dueDate = document.createElement("span");
    const status = document.createElement("span");

    // apply attributes to new elements
    article.classList.add("todo");
    article.setAttribute("aria-title", todo.title);
    title.classList.add("title");
    description.classList.add("description");
    statusContainer.classList.add("status-container");
    dueDate.classList.add("due-date");
    status.classList.add("status");

    // apply content to new elements
    title.textContent = todo.title;
    description.textContent = todo.description;
    dueDate.textContent = todo.dueDate;
    status.textContent = todo.status;

    // append elements in the order of the HTML tree you need
    article.appendChild(title);
    article.appendChild(description);
    article.appendChild(statusContainer);
    statusContainer.appendChild(dueDate);
    statusContainer.appendChild(status);

    // append new elements to the DOM
    todoContainer.appendChild(article);
  });
  
}

renderTodos();
