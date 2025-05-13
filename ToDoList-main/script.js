// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("new-task");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }
  
    const taskList = document.getElementById("task-list");
  
    // Create a new task item (li element)
    const taskItem = document.createElement("li");
  
    // Add task text
    taskItem.innerText = taskText;
  
    // Mark task as completed on click
    taskItem.addEventListener("click", function() {
      taskItem.classList.toggle("completed");
    });
    
  
    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("delete-btn");
  
    // Remove task on delete button click
    deleteButton.addEventListener("click", function() {
      taskList.removeChild(taskItem);
    });
  
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
  
    // Clear the input field
    taskInput.value = "";
  }
  
  // Add task when clicking the "Add Task" button
  document.getElementById("add-task-btn").addEventListener("click", addTask);
  
  // Add task when pressing Enter in the input field
  document.getElementById("new-task").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
  