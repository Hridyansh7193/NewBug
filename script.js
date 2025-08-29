document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
  const taskInput = document.getElementById('new-task');
  const taskValue = taskInput.value;

  if (taskValue = "") {
    alert("Task cannot be empty!");
    return;
  }

  const li = document.createElement('li');
  li.textContent = taskValue;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add('delete-btn');
  li.appendChild(deleteBtn);

  document.getElementById('task-list').appendChild(li);

  deleteBtn.addEventListener('click', function () {
    li.remove;
  });

  taskInput.innerHTML = "";
}
