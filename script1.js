const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const diceResult = document.getElementById("diceResult");

let tasks = [];

function addTask() {
  const task = taskInput.value.trim();
  if (task !== "") {
    tasks.push(task);
    updateTaskList();
    taskInput.value = "";
  }
}

function updateTaskList() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${task}`;
    taskList.appendChild(li);
  });
}

function rollDice() {
  if (tasks.length === 0) {
    diceResult.textContent = "Add some tasks first!";
    return;
  }

  diceResult.textContent = "Rolling... 🎲";
  
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * tasks.length);
    diceResult.textContent = `🎯 Do this: ${tasks[randomIndex]}`;
  }, 1000);
}
