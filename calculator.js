function openCalculator() {

    document.getElementById("calculator").style.display = "block";

}
function append(value){

document.getElementById("display").value+=value;

}

function clearDisplay(){

document.getElementById("display").value="";

}

function del(){

let display=document.getElementById("display");

display.value=display.value.slice(0,-1);

}

function calculate(){

try{

document.getElementById("display").value=eval(document.getElementById("display").value);

}

catch{

alert("Invalid Expression");

}

}