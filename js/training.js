// variables to output Id with a message
var output1 = document.getElementById("goalOutput1");
var output2 = document.getElementById("goalOutput2");
var output3 = document.getElementById("goalOutput3");
var output4 = document.getElementById("goalOutput4");
var output5 = document.getElementById("goalOutput5");

// variables to output actualGoal Id with calculation
var actualGoal = document.getElementById("actualGoal");
var actualGoal1 = document.getElementById("actualGoal1");
var actualGoal2 = document.getElementById("actualGoal2");
var actualGoal3 = document.getElementById("actualGoal3");
var actualGoal4 = document.getElementById("actualGoal4");


// variables gather info from training tables and text from class buttons
var fivekButton = document.querySelector(".fivek-button");
var tenkButton = document.querySelector(".tenk-button");
var tenmilerButton = document.querySelector(".tenmiler-button");
var halfButton = document.querySelector(".half-button");
var fullButton = document.querySelector(".full-button");
var fivekSchedule = document.querySelector(".fivek-training");
var tenkSchedule = document.querySelector(".tenk-training");
var tenmilerSchedule = document.querySelector(".tenmiler-training");
var halfSchedule = document.querySelector(".half-training");
var fullSchedule = document.querySelector(".full-training");

// function for 5k table that gathers numbers
function fiveK() {
    var goal = 8.5;
    var goalMiles = document.getElementById("goalMiles");
    var day1 = parseFloat(document.getElementById("5kDay1").value);
    var day2 = parseFloat(document.getElementById("5kDay2").value);
    var day3 = parseFloat(document.getElementById("5kDay3").value);
    var day4 = parseFloat(document.getElementById("5kDay4").value);
    var day5 = parseFloat(document.getElementById("5kDay5").value);
    var day6 = parseFloat(document.getElementById("5kDay6").value);
    var day7 = parseFloat(document.getElementById("5kDay7").value);
    var actual = day1 + day2 + day3 + day4 + day5 + day6 + day7;
    console.log(actual);
    // if else statements working with onclick() to display message and results
    if (actual >= goal) {
        output1.innerHTML = 'Congrats you reached your weekly goal!!!';
        goalMiles.innerHTML = goal;
    } else {
        output1.innerHTML = 'Keep trying, I know you can get there.';
        goalMiles.innerHTML = goal;
    }
    if (actual >= goal) {
        var extra = (actual - goal);
        var fixed = extra.toFixed(2);
        actualGoal.innerHTML = actual + ' miles' + '<br>';
        actualGoal.innerHTML += fixed + ' miles extra'
    } else {
        actualGoal.innerHTML = actual;
    }
    // jQuery to change text color for result nunber. Goal and Actual
    // if else statements to have different colors based on condition
$(document).ready(function() {
    if (actual >= goal) {
        $("#goalMiles").css({
            'color': 'green'
        });
        $("#actualGoal").css({
            'color': 'green'
        });
    } else {
        $("#goalMiles").css({
            'color': 'red'
        });
        $("#actualGoal").css({
            'color': 'red'
        });
    }
});
}
// function for 10k table that gathers numbers
function tenK() {
    var goal = 15.5;
    var goalMiles = document.getElementById("goalMiles1");
    var day1 = parseFloat(document.getElementById("10kDay1").value);
    var day2 = parseFloat(document.getElementById("10kDay2").value);
    var day3 = parseFloat(document.getElementById("10kDay3").value);
    var day4 = parseFloat(document.getElementById("10kDay4").value);
    var day5 = parseFloat(document.getElementById("10kDay5").value);
    var day6 = parseFloat(document.getElementById("10kDay6").value);
    var day7 = parseFloat(document.getElementById("10kDay7").value);
    var actual = day1 + day2 + day3 + day4 + day5 + day6 + day7;
    console.log(actual);
    // if else statements working with onclick() to display message and results
    if (actual >= goal) {
        output2.innerHTML = 'Congrats you reached your weekly goal!!!';
        goalMiles.innerHTML = goal;
    } else {
        output2.innerHTML = 'Keep trying, I know you can get there.';
        goalMiles.innerHTML = goal;
    }
    if (actual >= goal) {
        var extra = (actual - goal);
        var fixed = extra.toFixed(2);
        actualGoal1.innerHTML = actual + ' miles' + '<br>';
        actualGoal1.innerHTML += fixed + ' miles extra'
    } else {
        actualGoal1.innerHTML = actual;
    }
    // jQuery to change text color for result nunber. Goal and Actual
    // if else statements to have different colors based on condition
$(document).ready(function() {
    if (actual >= goal) {
        $("#goalMiles1").css({
            'color': 'green'
        });
        $("#actualGoal1").css({
            'color': 'green'
        });
    } else {
        $("#goalMiles1").css({
            'color': 'red'
        });
        $("#actualGoal1").css({
            'color': 'red'
        });
    }
});
}
// function for 10miler table that gathers numbers
function tenMiler() {
    var goal = 21;
    var goalMiles = document.getElementById("goalMiles2");
    var day1 = parseFloat(document.getElementById("10milerDay1").value);
    var day2 = parseFloat(document.getElementById("10milerDay2").value);
    var day3 = parseFloat(document.getElementById("10milerDay3").value);
    var day4 = parseFloat(document.getElementById("10milerDay4").value);
    var day5 = parseFloat(document.getElementById("10milerDay5").value);
    var day6 = parseFloat(document.getElementById("10milerDay6").value);
    var day7 = parseFloat(document.getElementById("10milerDay7").value);
    var actual = day1 + day2 + day3 + day4 + day5 + day6 + day7;
    console.log(actual);
    // if else statements working with onclick() to display message and results
    if (actual >= goal) {
        output3.innerHTML = 'Congrats you reached your weekly goal!!!';
        goalMiles.innerHTML = goal;
    } else {
        output3.innerHTML = 'Keep trying, I know you can get there.';
        goalMiles.innerHTML = goal;
    }
    if (actual >= goal) {
        var extra = (actual - goal);
        var fixed = extra.toFixed(2);
        actualGoal2.innerHTML = actual + ' miles' + '<br>';
        actualGoal2.innerHTML += fixed + ' miles extra'
    } else {
        actualGoal2.innerHTML = actual;
    }
        // jQuery to change text color for result nunber. Goal and Actual
    // if else statements to have different colors based on condition
$(document).ready(function() {
    if (actual >= goal) {
        $("#goalMiles2").css({
            'color': 'green'
        });
        $("#actualGoal2").css({
            'color': 'green'
        });
    } else {
        $("#goalMiles2").css({
            'color': 'red'
        });
        $("#actualGoal2").css({
            'color': 'red'
        });
    }
});
}
// function for half marathon table that gathers numbers
function half() {
    var goal = 28.5;
    var goalMiles = document.getElementById("goalMiles3");
    var day1 = parseFloat(document.getElementById("halfDay1").value);
    var day2 = parseFloat(document.getElementById("halfDay2").value);
    var day3 = parseFloat(document.getElementById("halfDay3").value);
    var day4 = parseFloat(document.getElementById("halfDay4").value);
    var day5 = parseFloat(document.getElementById("halfDay5").value);
    var day6 = parseFloat(document.getElementById("halfDay6").value);
    var day7 = parseFloat(document.getElementById("halfDay7").value);
    var actual = day1 + day2 + day3 + day4 + day5 + day6 + day7;
    console.log(actual);
    // if else statements working with onclick() to display message and results
    if (actual >= goal) {
        goalMiles.innerHTML = goal;
        output4.innerHTML = 'Congrats you reached your weekly goal!!!';
    } else {
        output4.innerHTML = 'Keep trying, I know you can get there.';
        goalMiles.innerHTML = goal;
    }
    if (actual >= goal) {
        
        var extra = (actual - goal);
        var fixed = extra.toFixed(2);
        actualGoal3.innerHTML = actual + ' miles' + '<br>';
        actualGoal3.innerHTML += fixed + ' miles extra'
    }  else {
        actualGoal3.innerHTML = actual;
        // goalMiles.innerHTML = goal;
    }
    // jQuery to change text color for result nunber. Goal and Actual
    // if else statements to have different colors based on condition
$(document).ready(function() {
    if (actual >= goal) {
        $("#goalMiles3").css({
            'color': 'green'
        });
        $("#actualGoal3").css({
            'color': 'green'
        });
    } else {
        $("#goalMiles3").css({
            'color': 'red'
        });
        $("#actualGoal3").css({
            'color': 'red'
        });
    }
});
}
// function for full marathon table that gathers numbers
function full() {
    var goal = 35;
    var goalMiles = document.getElementById("goalMiles4");
    var day1 = parseFloat(document.getElementById("fullDay1").value);
    var day2 = parseFloat(document.getElementById("fullDay2").value);
    var day3 = parseFloat(document.getElementById("fullDay3").value);
    var day4 = parseFloat(document.getElementById("fullDay4").value);
    var day5 = parseFloat(document.getElementById("fullDay5").value);
    var day6 = parseFloat(document.getElementById("fullDay6").value);
    var day7 = parseFloat(document.getElementById("fullDay7").value);
    var actual = day1 + day2 + day3 + day4 + day5 + day6 + day7;
    console.log(actual);
    // if else statements working with onclick() to display message and results
    if (actual >= goal) {
        output5.innerHTML = 'Congrats you reached your weekly goal!!!';
        goalMiles.innerHTML = goal;
    } else {
        output5.innerHTML = 'Keep trying, I know you can get there.';
        goalMiles.innerHTML = goal;
    }
    if (actual >= goal) {
        
        var extra = (actual - goal);
        var fixed = extra.toFixed(2);
        actualGoal4.innerHTML = actual + ' miles' + '<br>';
        actualGoal4.innerHTML += fixed + ' miles extra'
    } else {
        actualGoal4.innerHTML = actual;
    }
        // jQuery to change text color for result nunber. Goal and Actual
    // if else statements to have different colors based on condition
$(document).ready(function() {
    if (actual >= goal) {
        $("#goalMiles4").css({
            'color': 'green'
        });
        $("#actualGoal4").css({
            'color': 'green'
        });
    } else {
        $("#goalMiles4").css({
            'color': 'red'
        });
        $("#actualGoal4").css({
            'color': 'red'
        });
    }
});
}

// function work with css file to show and hide tables
function show5K () {
    fivekSchedule.className = "fivek-training show"; //show 5k schedule
    tenkSchedule.className = "tenk-training";
    tenmilerSchedule.className = "tenmiler-schedule";
    halfSchedule.className = "half-schedule";
    fullSchedule.className = "full-schedule";
}

function show10K () {
    fivekSchedule.className = "fivek-training";
    tenkSchedule.className = "tenk-training show"; //show 10k schedule
    tenmilerSchedule.className = "tenmiler-training";
    halfSchedule.className = "half-training";
    fullSchedule.className = "full-training";
}
function show10miler () {
    fivekSchedule.className = "fivek-training";
    tenkSchedule.className = "tenk-training";
    tenmilerSchedule.className = "tenmiler-training show"; //show 10 miler schedule
    halfSchedule.className = "half-training";
    fullSchedule.className = "full-training";
}
function showHalf () {
    fivekSchedule.className = "fivek-training ";
    tenkSchedule.className = "tenk-training";
    tenmilerSchedule.className = "tenmiler-training";
    halfSchedule.className = "half-training show"; //show half marathon schedule
    fullSchedule.className = "full-training";
}
function showFull () {
    fivekSchedule.className = "fivek-training";
    tenkSchedule.className = "tenk-training";
    tenmilerSchedule.className = "tenmiler-training";
    halfSchedule.className = "half-training";
    fullSchedule.className = "full-training show"; //show full marathon schedule
}

/* event listener, waiting for a click on the variable button*/
fivekButton.addEventListener("click", show5K); 
tenkButton.addEventListener("click", show10K);
tenmilerButton.addEventListener("click", show10miler);
halfButton.addEventListener("click", showHalf);
fullButton.addEventListener("click", showFull);

