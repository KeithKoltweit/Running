// validations for contact us form
/* if else statements check the name and email fields, if not filled in a message shows up */
function validateForm() {
    var nameInput = document.form.name.value;
    var emailInput = document.form.email.value;

    if (nameInput == '' || nameInput == null) {
        document.getElementById('error').innerHTML = 'Please enter your full name.';
    } else {
        document.getElementById('error').innerHTML = '';
    }
    if (emailInput == '' || emailInput == null) {
        document.getElementById('error1').innerHTML = ' Please enter a valid email address. ';
    } else {
        document.getElementById('error1').innerHTML = '';

    }
}

//  Jquery option to change form input color
//  also form validation with color on blur
$(document).ready(function () {
    $("#nameinput").focus(function () {
        $(this).css("background-color", "yellow"); //changes input field when hovered to yellow
    });
    $("#nameinput").blur(function () {
        var nameInput = document.form.name.value;
        if (nameInput == '') {
            $(this).css("background-color", "rgb(245, 113, 104)"); //Changes input field to lightblue without focus
        } else {
            $(this).css("background-color", "rgb(110, 207, 110)");
        }
    });
});

$(document).ready(function () {
    $("#emailinput").focus(function () {
        $(this).css("background-color", "yellow"); //changes input field when hovered to yellow
    });
    $("#emailinput").blur(function () {
        var emailInput = document.form.email.value;
        if (emailInput == '') {
            $(this).css("background-color", "rgb(245, 113, 104)"); //Changes input field to lightblue without focus
        } else {
            $(this).css("background-color", "rgb(110, 207, 110)");
        }
    });
});