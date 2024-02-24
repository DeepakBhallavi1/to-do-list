const task = document.querySelector(".input-task");       // get input field
let taskList = document.querySelector("#task-list");      // list of tasks
const createTask = document.querySelector(".create-btn"); // button for creating tasks

createTask.addEventListener("click", (event) => {   // create task using create button
  addTask();
  clickAnimation(createTask);
});
task.addEventListener("keypress", function(event) { // create task using pressing enter
  if (event.key === "Enter") {
    addTask();
  }
});

// function for creating tasks
function addTask() {      

  if (task.value === "") {  // input field is empty
    alert("You must enter someting !!!");
  } 
  else {  // create tasks                             
    let li = document.createElement("li");     // create li element
    let h3 = document.createElement("h3");     // create h3 element 
    let span = document.createElement("span"); // create span element

    h3.innerHTML = task.value; // set task
    span.innerHTML = "x";      // for deleting task

    h3.classList.add("task-title"); // add class in h3 element
    li.classList.add("task");       // add class in li element

    li.appendChild(h3);       // append h3 in li element
    li.appendChild(span);     // append span in li element
    taskList.appendChild(li); // append complete li in taskList
  }
  task.value = ""; // clear input field
  saveTasks();     // save task to local storage
}

// finish task or delete task
taskList.addEventListener('click', (event)=>{
  if(event.target.tagName === "LI"){  // mark task as finished & save changes
    event.target.classList.toggle("task-finished");
    saveTasks();
  }
  else if(event.target.tagName === "SPAN"){ // delete task & save changes
    event.target.parentElement.remove();
    saveTasks();
  }
})

// function for storing task in local storage
function saveTasks(){
  localStorage.setItem("taskList", taskList.innerHTML);
}

// function for showing tasks from local storage
function showTasks(){
  taskList.innerHTML = localStorage.getItem("taskList");
}
 
// add animation on clicked button 
function clickAnimation(activeButton){
    activeButton.classList.add("pressed");
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 80);
}

// calling function for showing taks lists from local storage 
showTasks();  