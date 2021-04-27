$(document).ready(function () {
    $("#addclass").click(function () {
        $("#addclass-p").addClass("red");
    });

    $("#slidetoggle").click(function () {
        $("#hidden-img").slideToggle(500);
    });

    $("#append").click(function () {
        $("#append-p").append("<p>New paragraph!</p>");
    });
});