// DOM Selectors
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("add");
const ul = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  console.log(taskInput.value);

  if (taskText === "") {
    alert("Enter task");
    return;
  }

  let li = document.createElement("li");
  li.textContent = taskText;

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
  deleteButton.className = "delete";
  deleteButton.onclick = function () {
    li.remove();
  };

  li.appendChild(deleteButton);
  ul.appendChild(li);
  taskInput.value = "";
}
