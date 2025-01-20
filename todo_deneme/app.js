const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

function addTask(){
     const taskText = taskInput.value.trim();
     if(taskText == ""){
          alert("Lütfen bir görev giriniz!");
          return;
     }
     const taskItem = document.createElement("li");
     taskItem.className = "task-item";

     const todoButton = document.createElement("input");
     todoButton.type = "checkbox";
     todoButton.className = "toggle-button"; 
     
     const taskContent = document.createElement("span");
     taskContent.className = "task-content";
     taskContent.textContent = taskText;

     const deleteButton = document.createElement("input");
     deleteButton.type = "button";
     deleteButton.value = "SİL";
     deleteButton.className = "delete-button";

     taskItem.appendChild(todoButton);
     taskItem.appendChild(taskContent);
     taskItem.appendChild(deleteButton);
     taskList.appendChild(taskItem);
     //taskInput.value = "";
}

addTaskButton.addEventListener("click", addTask);

taskList.addEventListener("click", (event) => {
     if(event.target.classList.contains("toggle-button")){
          let parentItem = event.target.parentElement;
          let text = parentItem.children[1];
          text.classList.toggle("toggle-item");
     }
     else if(event.target.classList.contains("delete-button")){
          let parentElement = event.target.parentElement;
          taskList.removeChild(parentElement);
     }
});
