//Defining variables
var button = document.getElementById("button");
var tasks = document.getElementById("tasks");
var list = document.getElementById("list");
//Addtask function
function addtask(){
    let input = document.getElementById("input").value;
   let li = document.createElement('li');
   console.log(li);
   li.innerHTML=input;
   list.appendChild(li);
}
