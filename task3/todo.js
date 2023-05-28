//Defining variables
var button = document.getElementById("button");
var tasks = document.getElementById("tasks");
var list = document.getElementById("list");
var sound = "sounds/pop.mp3";
//Addtask function
function addtask(){
    
    let input = document.getElementById("input").value;
    if(input===""){
        window.alert("Enter a task!");
    }else{
        var li = document.createElement('li');
        let del = document.createElement('button');
        console.log(li);
        li.innerHTML=input;
        del.onclick=()=>{
            playpop();
        }
        console.log(input);
        list.appendChild(li);   
        li.appendChild(del);
        document.getElementById("input").value="";
    }
    
    
}
function playpop(){
    var audio = new Audio(sound);
    audio.play(); 
}

list.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName==="BUTTON"){
        e.target.parentElement.remove();
    }
})



//add a cartoon animation after a task added


// Retrieve tasks from local storage
function getTasksFromLocalStorage() {
    const tasksString = localStorage.getItem('list');
    if (tasksString) {
      return JSON.parse(tasksString);
    } else {
      return [];
    }
  }
  
  // Save tasks to local storage
  function saveTasksToLocalStorage(list) {
    localStorage.setItem('list', JSON.stringify(list));
  }
  
  // Add a task
  function addTask(input) {
    const list = getTasksFromLocalStorage();
    tasks.push(input);
    saveTasksToLocalStorage(list);
  }
  
//   // Example usage
//   const taskInput = document.getElementById('task-input');
//   const addTaskButton = document.getElementById('add-task-button');
  
//   addTaskButton.addEventListener('click', function() {
//     const task = taskInput.value;
//     addTask(task);
//     taskInput.value = '';
//   });
  