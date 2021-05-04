function random_color() {
    var rgb = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    color = '#';
    for (var i = 0; i < 6; i++) {
        x = Math.floor((Math.random() * 16));
        color += rgb[x];
    }
    return color;
}

$(document).ready(function () {
    $("#large_box").click(function () {
        $("#large_box").children().css("background-color", random_color());
    });

    $(".side_box").click(function (event) {
        $(this).siblings().css("background-color", random_color());
        event.stopPropagation();
    });

    $(".middle_box").click(function (event) {
        $(".middle_box").parent().css("background-color", random_color());
        event.stopPropagation();
    });
});