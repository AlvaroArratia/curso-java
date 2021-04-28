$(document).ready(function () {
    $("#addclass").click(function () {
        $("#addclass-p").addClass("red");
    });

    $("#slidetoggle").click(function () {
        $("#hidden-img").slideToggle(500);
    });

    $("#append").click(function () {
        $("#append-p").append("<p id='new-p'>New paragraph!</p>");
    });

    $("#hide-btn").click(function () {
        $("#hide-p").hide();
    });

    $("#show-btn").click(function () {
        $("#hide-p").show();
    });

    $("#toggle-btn").click(function () {
        $("#toggle-h1").toggle();
        $("#toggle-p").toggle();
    });

    $("#slideup").click(function () {
        $("#slide-img").slideUp();
    });

    $("#slidedown").click(function () {
        $("#slidedown-img").slideDown();
    });

    $("#text-btn").click(function () {
        $("#text-h1").text("The title has changed");
    });

    $("#fadein-btn").click(function () {
        $("#fadein-img").fadeIn();
    });

    $("#fadeout-btn").click(function () {
        $("#fadeout-img").fadeOut();
    });

    $("#before-btn").click(function () {
        $("#before-p").before('<img class="m-1" src="img/download.jpg" alt="atacama">');
    });

    $("#after-btn").click(function () {
        $("#after-p").after('<img class="m-1" src="img/download.jpg" alt="atacama">');
    });

    $("#html-btn").click(function () {
        $("#html-p2").text("Paragraph content: " + $("#html-p").html());
    });

    $("#attr-btn").click(function () {
        $("#attr-p").text("Button class attribute: " + $("#attr-btn").attr("class"));
    });

    $("#val-btn").click(function () {
        $("#val-p").text("Text area value: " + $("#textarea-val").val());
    });
});