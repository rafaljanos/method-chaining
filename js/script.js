$(document).ready(function() {
    $("#button1").mouseover(function() {
        $("p").fadeToggle(`slow`);
    });
     $("#button2").mouseover(function() {
        $("p").toggle(`slow`);
    });
});