$(document).ready(function () {
    $("#slider #img-2").hide();

    $("#nav-menu button").hover(function () {
        $(this).css("color", "rgb(239, 121, 39)");
    }, function () {
        if ($(this).hasClass("disabled")) {
            $(this).css("color", "rgb(163, 163, 163)");
        } else {
            $(this).css("color", "white");
        }

    });

    $("#buy-btn").click(function () {
        alert("Has hecho click en el boton");
    });

    $("#back-to-top").click(function () {
        $(window).scrollTop(0);
    });

    $("#slider li").click(function () {
        if ($(this).attr("id") == "img-1") {
            $("#img-1").fadeOut(1000);
            setTimeout(function () {
                $("#img-2").fadeIn(1000);
            }, 1000);
        } else if ($(this).attr("id") == "img-2") {
            $("#img-2").fadeOut(1000);
            setTimeout(function () {
                $("#img-1").fadeIn(1000);
            }, 1000);
        }
    });
});