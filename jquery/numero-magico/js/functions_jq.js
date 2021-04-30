$(document).ready(function () {
    var magicNumber = new MagicNumber();
    $("#restart").hide();
    $("p").hide();
    $("#send-num").hide();
    $("#player-num").hide();

    $("#btn-difficulty").click(function () {
        magicNumber.generateRandomNumber();
        magicNumber.setDifficulty = $("#difficulty").val();
        magicNumber.lifesDifficulties();
        $("#difficulty").fadeOut();
        $("#btn-difficulty").fadeOut();
        $("#lifes-info").fadeIn();
        $("#send-num").fadeIn();
        $("#player-num").fadeIn();
        $("h2").text("¡Adivina el número magico!");
        $("#lifes-info").text("Intentos: " + magicNumber.getPlayerLifes);
        console.log(magicNumber.getMagicNumber);
    });

    $("#send-num").click(function () {
        $("#num-info span").fadeOut();
        var result = magicNumber.matchNumber($("#player-num").val());
        var message = "",
            removeClass = "",
            addClass = "";
        switch (result) {
            case 0:
                message = "¡Has acertado! :D";
                removeClass = "alert-danger";
                addClass = "alert-success";
                break;
            case 1:
                message = "¡Incorrecto! El número es mayor";
                removeClass = "alert-success";
                addClass = "alert-success";
                magicNumber.substractLifes();
                $("#lifes-info").text("Intentos: " + magicNumber.getPlayerLifes);
                break;
            case 2:
                message = "¡Incorrecto! El número es menor";
                removeClass = "alert-success";
                addClass = "alert-success";
                magicNumber.substractLifes();
                $("#lifes-info").text("Intentos: " + magicNumber.getPlayerLifes);
                break;
            case 3:
                message = "Has ingresado un número invalido, vuelve a intentarlo";
                removeClass = "alert-success";
                addClass = "alert-success";
                break;
            default:
                message = "Error al comparar los números";
                removeClass = "alert-success";
                addClass = "alert-success";
                break;
        }
        if (magicNumber.youLoose()) {
            $("#num-info span").text("¡Has perdido! :C El número magico era el " + magicNumber.getMagicNumber);
            $("#num-info span").fadeIn();
            $("#send-num").addClass("disabled");
            $("#restart").fadeIn();
        } else {
            $("#num-info span").text(message);
            $("#num-info").removeClass(removeClass);
            $("#num-info").addClass(addClass);
            $("#num-info span").fadeIn();
            $("#num-info").fadeIn();
        }

    });

    $("#restart").click(function () {
        magicNumber.resetAll();
        $("#restart").fadeOut();
        $("h2").text("Elige la dificultad");
        $("#lifes-info").text("Intentos: " + magicNumber.getPlayerLifes);
        $("#num-info").text("");
        $("#difficulty").fadeIn();
        $("#btn-difficulty").fadeIn();
        $("#send-num").removeClass("disabled");

        $("p").fadeOut();
        $("#send-num").fadeOut();
        $("#player-num").fadeOut();
    });
});