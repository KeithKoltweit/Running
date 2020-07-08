/* jQuery, waits for a click and then class and id will fadein or out based on the button/text clicked */

$(document).ready(function() {
    $(".summerBtn").click(function() {
        $("#fullGear").fadeOut();
        $(".summerGear").fadeIn(2000);
        $(".winterGear").fadeOut();
        $(".raceGear").fadeOut();
       });
    $(".winterBtn").click(function() {
        $("#fullGear").fadeOut();
        $(".summerGear").fadeOut();
        $(".winterGear").fadeIn(2000);
        $(".raceGear").fadeOut();
    })
    $(".raceBtn").click(function() {
        $("#fullGear").fadeOut();
        $(".summerGear").fadeOut();
        $(".winterGear").fadeOut();
        $(".raceGear").fadeIn(2000);
    })
});