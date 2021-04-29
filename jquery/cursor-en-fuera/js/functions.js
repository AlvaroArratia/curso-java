$(document).ready(function () {
    $("img").hover(function () {
        $(this).attr("src", "img/download-volteada.jpg");
    },function () {
        $(this).attr("src", "img/download.jpg");
    });
});