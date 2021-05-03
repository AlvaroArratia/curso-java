function random_color() {
    var rgb = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    color = '#' //this is what we'll return!
    for (var i = 0; i < 6; i++) {
        x = Math.floor((Math.random() * 16))
        color += rgb[x];
    }
    return color;
}

$(document).ready(function () {
    $(".side_box").click(function (event) {
        $(".side_box").siblings().css("background-color", random_color());
        event.stopPropagation();
    });

    $(".middle_box").click(function (event) {
        $(".middle_box").parent().css("background-color", random_color());
        event.stopPropagation();
    });

    $("#large_box").click(function () {
        $("#large_box").children().css("background-color", random_color());
    });
});

/*
* {
    font-family: sans-serif;
}

.container {
    display: flex;
    flex-direction: column;
    min-width: 390px;

    h2,
    h1,
    h3 {
        text-align: center;
    }

    #large_box {
        display: flex;
        justify-content: space-around;
        border-radius: 30px;
        margin: 0px auto;
        margin-top: 30px;
        background-color: lightblue;
        width: 80%;
        height: 300px;

        div {
            border-radius: 20px;
            background-color: blue;
            width: 350px;
            margin: 60px 20px 60px 20px;
        }
    }
}
*/