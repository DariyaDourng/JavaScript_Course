//create function to add a new task
function addTask() {
  const input = document.getElementById('new-task');
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Pleas enter a task!");
    return;
  }

  // Create a new list item

  const listItem = document.createElement('li');
  listItem.textContent = taskText;

  //Create a delete button
  const deleteButton = document.createElement('button');

  deleteButton.textContent = "Delete";
  deleteButton.classList.add('delete');
  deleteButton.addEventListener('click', function () {
    listItem.remove();
  });

  //Append the button to the list item
  listItem.appendChild(deleteButton);

  //Appen the list item to the task list
  const taskList = document.getElementById('task-list');
  taskList.appendChild(listItem);

  //Clear input field
  input.value = "";
}

//Add event listener to the button
const addButton = document.getElementById('add-task');
addButton.addEventListener("click", addTask);
//optional Add a task by pressing Enter
document
  .getElementById("new-task")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
