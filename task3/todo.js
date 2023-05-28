var list = document.getElementById("list");
var sound = "sounds/pop.mp3";

window.addEventListener("load", function() {
  var tasks = localStorage.getItem("tasks");
  if (tasks) {
    list.innerHTML = tasks;
  }
});

function addtask() {
  let input = document.getElementById("input").value;
  if (input === "") {
    window.alert("Enter a task!");
  } else {
    var li = document.createElement('li');
    let del = document.createElement('button');
    li.innerHTML = input;
    del.onclick = () => {
      playpop();
    }
    list.appendChild(li);
    li.appendChild(del);
    document.getElementById("input").value = "";

    localStorage.setItem("tasks", list.innerHTML);
  }
}

function playpop() {
  var audio = new Audio(sound);
  audio.play();
}

list.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
    
    localStorage.setItem("tasks", list.innerHTML);
  }
});
