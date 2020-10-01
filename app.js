// elements
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// function
function addTodo(event) {
  if (todoInput.value) {
    // prevent submit
    event.preventDefault();
    // make a todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    // append child
    todoDiv.appendChild(newTodo);
    // completed button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-button");
    todoDiv.appendChild(completedButton);
    // trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-button");
    todoDiv.appendChild(trashButton);
    // append to todo-list
    todoList.appendChild(todoDiv);
    // clear todo value
    todoInput.value = "";
  } else {
      alert("Enter a ToDo")
  }
}

function deleteCheck(e) {
  const items = e.target;

  // Delete item
  if (items.classList[0] === "trash-button") {
    const todo = items.parentElement;
    // animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
  }

  // Checking item
  else if (items.classList[0] === "complete-button") {
    const todo = items.parentElement;
    todo.classList.toggle("completed");
  }
}
