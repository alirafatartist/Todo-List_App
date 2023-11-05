// Selectors
const todoInput = document.querySelector("input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners
todoButton.addEventListener("click", addtodo);

// Functions
function addtodo(event) {
  if (todoInput.value == "") {
    alert("You must type your todo!");
  } else {
    event.preventDefault(); // to stop refresh the page
    const todo = document.createElement("div");
    todo.classList.add("todo");
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.classList.add("delete-button");
    const checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fas fa-check"></i>';
    checkButton.classList.add("check-button");
    todo.appendChild(li);
    todo.appendChild(deleteButton);
    todo.appendChild(checkButton);
    todoList.appendChild(todo);
    li.innerText = todoInput.value;
    todoInput.value = "";
    checkButton.addEventListener("click", checkItem);
    function checkItem() {
      li.classList.toggle("line-through");
    }
    deleteButton.addEventListener("click", deleteItem);
    async function deleteItem() {
      todo.classList.add("delete-item");
      await new Promise((test) => setTimeout(test, 1000));
      todo.remove();
    }
  }
}
