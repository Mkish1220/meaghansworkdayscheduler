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
    displayInput();
}
//function to display input>
//function to change color past and present 
function changeColor() {
    var currentTime = moment().format('H');
   if (currentTime < 12) {
       $("#currentDay").css("background-color", "green");
   }
    else if (currentTime >= 12 && currentTime < 17) {
        $("#currentDay").css("background-color", "yellow");
    }
    else {
        $("#currentDay").css("background-color", "red");
    }

}


//function to change color past and present
changeColor();
//function to display saved input>
function displaySavedInput() {
    var input = localStorage.getItem("input");
    document.getElementById("input").value = input;
}
//function to display saved input>
displaySavedInput();
