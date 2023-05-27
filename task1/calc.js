//declaring variables
var buttons = document.querySelectorAll("button");
var ops=document.querySelector("button").value;
var tapSound="sounds/kp1.mp3";
var display1=document.getElementById("display1");
var display2=document.getElementById("display2");
let display2arr=[];
let numbcount=0;
let disableBut=document.querySelectorAll('button:not(#ac):not(#eq):not(.del)');
let e=document.getElementById("e");
let v=document.getElementById("v")
var ecount=0;
var answer;
var preans=0;
//adding operands and operators in the display
function addop(ops){
    document.getElementById("display2").innerHTML+=ops;
    display2arr.push(ops);
}

//clearing the display
function ac(){
    display1.innerHTML="";
    display2.innerHTML="";
    e.style.backgroundColor="gray";
    e.style.boxShadow="0px 0px 0px 0px red";
}

//deleting the last element
function del(){
    display2arr.pop();
    display2.innerHTML=display2arr.join("");
    if(display2arr.length==0){
        display2.innerHTML="";
        e.style.backgroundColor="gray";
        e.style.boxShadow="0px 0px 0px 0px red";
    }
}

//evaluating the expression and displaying error if any
function ans(){
    
    try {
        answer = eval(display2.innerHTML);
        display1.innerHTML = display2.innerHTML;
        display2arr = [];
        preans=answer;
        console.log("prrans: "+ preans);
        display2.innerHTML = answer;
        ecount=0;
    } catch (error) {
        ecount=1;
        display2.innerHTML = display2.innerHTML;
        display1.innerHTML = "Error ";
        display2arr = [];
    }
    if(ecount==1){
        e.style.backgroundColor="red";
        e.style.boxShadow="0px 0px 10px 5px red";
    }else{
        e.style.backgroundColor="gray";
        e.style.boxShadow="0px 0px 0px 0px red";
    }

}

//evaluation of thw expression as one of the given operands is previous ans
let dis2inn=display2.innerHTML;
function preansf(dis2inn,preans){
  console.log("evalAns: "+preans);
  display2.innerHTML+=preans;
}


//square root function
function sqroot(){
    let sqrootof=display2.innerHTML;
    sqrt(sqrootof);
    display1.innerHTML="&radic;("+sqrootof+")";
    
}
function sqrt(x){
  
    x=eval(x);
    let sqans=x**0.5;
    display2.innerHTML=sqans;
    preans=sqans;
}

//Percentage function
function perc(){
    let percof=display2.innerHTML;
    percent(percof);
    display1.innerHTML=percof+"%";
}
function percent(x){
    let percentage = x/100;
    display2.innerHTML=percentage;
    preans=percentage;
}

//sign change function
function signChange(){
    let num = display2.innerHTML;
    num=num*(-1);
    display2.innerHTML=num;
}

//Adding tap sound to the buttons
for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",playSound);
}
function playSound(){
    var audio = new Audio(tapSound);
    audio.play();
    //disabling the buttons after 10 digits
    let disLen=display2.innerHTML.length;
    console.log(disLen);
    let winwid=window.innerWidth;
    if(winwid<500){
        if(disLen>17){
            disableBut.forEach(function(button) {
                button.disabled = true;
            });
            document.getElementById("v").style.backgroundColor="red";
            document.getElementById("v").style.boxShadow="0px 0px 10px 5px red";
        }else{
            disableBut.forEach(function(button) {
                button.disabled = false;
            });
            document.getElementById("v").style.backgroundColor="gray";
            document.getElementById("v").style.boxShadow="0px 0px 0px 0px red";
        }
    }else{
        if(disLen>20){
            disableBut.forEach(function(button) {
                button.disabled = true;
            });
            document.getElementById("v").style.backgroundColor="red";
            document.getElementById("v").style.boxShadow="0px 0px 10px 5px red";
        }else{
            disableBut.forEach(function(button) {
                button.disabled = false;
            });
            document.getElementById("v").style.backgroundColor="gray";
            document.getElementById("v").style.boxShadow="0px 0px 0px 0px red";
        }
    }
    
}

  