//current date and time header>
var time = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(time);
console.log(time);

//end current date and time header>

    
$(document).ready(function() {
    $("#saveBtn").click(function( event ) {
    var input = $("#input").val();
    $(".9").append(input);
    });
    $(".9").click(function( event ) {
    });





//funtion to save data to local storage
// var saveBtn = $('#saveBtn');
// saveBtn.on('click', function() {
//     var input = $('#input').val();
//     var time = $('9').val();
// });

// grab value for each box

//save value to local storage setelement

//getting prvious value getelement 

//display value on page from local storage 
 
// function for changing background color based on time of day 
function changeColorTime() {
    var currentTime = new Date().getHours();
    if (currentTime < 8) {
        $('body').css('background-color', '#ffb3b3');
    } else if (currentTime < 12) {
        $('body').css('background-color', '#ffcccc');
    } else if (currentTime < 16) {
        $('body').css('background-color', '#ffcccc');
    } else if (currentTime < 20) {
        $('body').css('background-color', '#ffcccc');
    } else {
        $('body').css('background-color', '#ffcccc');
    }
}
//     var currentTime = Date().getHours();
//     if (currentTime < 8) {
//         $("body").css("background-color", "black");
//     } else if (currentTime < 16) {
//         $("body").css("background-color", "green");
//     } else if (currentTime < 24) {
//         $("body").css("background-color", "blue");
//     } else {
//         $("body").css("background-color", "red");
//     }
// }
// timeOfDay();
// });


//compare current time of day with time associated with each block 
// use moment.js for current time 

//var = to current time of day using moment
//loop over blocks compare current time 
// if its true turn color of block a color 
// else if the blocks time is equal set to red. 
// else set to green/blue/black
