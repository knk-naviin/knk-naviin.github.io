const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    addTaskToList(taskText);
    taskInput.value = '';
  }
});

taskInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    addBtn.click();
  }
});

function addTaskToList(taskText) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span class="task">${taskText}</span>
    <button class="delete-btn">Delete</button>
  `;

  li.querySelector('.delete-btn').addEventListener('click', () => {
    li.remove();
  });

  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  taskList.appendChild(li);
}
