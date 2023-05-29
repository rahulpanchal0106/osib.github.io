var list = document.getElementById("list");
var sound = "sounds/pop.mp3";
var tasksDiv = document.getElementById("tasks");

window.addEventListener("load", function() {
  var tasks = localStorage.getItem("tasks");
  if (tasks) {
    list.innerHTML = tasks;
  }
  changeH1();
});

function changeH1(){
  let taskL = list.childElementCount;
  var note = document.getElementById("notice");
  if(taskL<=0){
    console.log("Task len: "+ taskL);
    document.getElementById("h1").innerHTML="Your To-do list ";
    note.style.display="flex";
    note.innerHTML = "No tasks are pending";
  }else if(taskL>0){
    console.log("Task len: "+ taskL);
    document.getElementById("h1").innerHTML="Seizing the Day with Purpose";
    note.style.display="none";
  }
}

function addtask() {
  let input = document.getElementById("input").value;
  if (input === "") {
    window.alert("Enter a task!");
    document.getElementById("input").focus();
  } else {
    var li = document.createElement('li');
    var del = document.createElement('button');
    del.setAttribute("id","delete");
    li.innerHTML = input;
    playpop();
    list.appendChild(li);
    li.appendChild(del);
    document.getElementById("input").value = "";
    changeH1();
    localStorage.setItem("tasks", list.innerHTML);
    document.getElementById("input").focus();
  }
}

function clearMem(){
  localStorage.setItem("tasks", "");
}

function playpop() {
  var audio = new Audio(sound);
  audio.volume="1";
  audio.play();
}

list.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
    changeH1();
    playpop();
  }
  
  localStorage.setItem("tasks", list.innerHTML);
});

input.addEventListener("keydown",function(event){
  if(event.keyCode === 13){
    addtask();
  }
});