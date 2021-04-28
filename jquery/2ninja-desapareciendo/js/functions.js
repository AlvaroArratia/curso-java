$(document).ready(function () {
    $("img").click(function () {
        $(this).fadeOut();
    })

    $("#restore-btn").click(function () {
        $("img").fadeIn();
    })
});