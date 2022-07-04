//current date and time header>
var time = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(time);
console.log(time);
//end current date and time header>
localStorage.setItem("input", "");
localStorage.getItem("input");
//function to save input>
document.getElementById("saveBtn").addEventListener("click", displayText);
function displayText() {
    var input = document.getElementById("input").value;
    localStorage.setItem("input", input);
}
//function to display input>
function displayInput() {
    var input = localStorage.getItem("input");
    document.getElementById("input").value = input;
}