//current date and time header>
var time = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(time);
console.log(time);

//end current date and time header>


$(document).ready(function () {
    $("#saveBtn").click(function (event) {
        var input = $("#input").val();
        $(".9").append(input);
    });
    $(".9").click(function (event) {
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
        var currentTime = momentjscurrentTime.format('H');
        ;
        for (let i = 0; i < 9; i++) {
            if (currentTime > i) {
                $('9').css('background-color', '#f5f5f5');
            } else {
                $('9').css('background-color', '#ff0000');
            }