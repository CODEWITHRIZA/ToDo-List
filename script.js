// Function to add a new task
function addTask() {
  // Get the input field and its value
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    // Get the task list and create a new list item
    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");

    // Create a checkbox for the task
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";

    // Create a label for the task text
    const label = document.createElement("label");
    label.textContent = taskText;

    // Append checkbox and label to the list item
    li.appendChild(checkbox);
    li.appendChild(label);

    // Toggle completed class when checkbox is clicked
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        li.classList.add("completed");
      } else {
        li.classList.remove("completed");
      }
    });

    // Append the new task to the task list and clear the input field
    taskList.appendChild(li);
    taskInput.value = "";
  } else {
    // Alert if no task is entered
    alert("Please enter a task!");
  }
}

// Function to remove all tasks
function removeAllTasks() {
  const taskList = document.getElementById("taskList");
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}
