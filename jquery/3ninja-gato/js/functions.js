$(document).ready(function () {
    $("img").click(function () {
        var src = $(this).attr("src");
        $(this).attr("src", $(this).attr("data-alt-src"));
        $(this).attr("data-alt-src", src);
    });
});