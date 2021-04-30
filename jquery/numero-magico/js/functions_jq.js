$(document).ready(function () {
    var magicNumber = new MagicNumber();
    $("#restart").hide();

    $("#btn-difficulty").click(function () {
        magicNumber.generateRandomNumber();
        magicNumber.setDifficulty = $("#difficulty").val();
        magicNumber.lifesDifficulties();
        $("#difficulty").attr("disabled", true);
        $("#btn-difficulty").addClass("disabled");
        $("h2").text("¡Adivina el número magico!");
        $("#lifes-info").text("Intentos: " + magicNumber.getPlayerLifes);
        console.log(magicNumber.getMagicNumber);
    });

    $("#send-num").click(function () {
        var result = magicNumber.matchNumber($("#player-num").val());
        var message = "";
        switch (result) {
            case 0:
                message += "¡Has acertado! :D";
                break;
            case 1:
                message += "¡Incorrecto! El número es mayor";
                magicNumber.substractLifes();
                $("#lifes-info").text("Intentos: " + magicNumber.getPlayerLifes);
                break;
            case 2:
                message += "¡Incorrecto! El número es menor";
                magicNumber.substractLifes();
                $("#lifes-info").text("Intentos: " + magicNumber.getPlayerLifes);
                break;
            case 3:
                message += "Has ingresado un número invalido, vuelve a intentarlo";
                break;
            default:
                message += "Error al comparar los números";
                break;
        }
        if (magicNumber.youLoose()) {
            message = "¡Has perdido! :C El número magico era el " + magicNumber.getMagicNumber;
            $("#send-num").addClass("disabled");
            $("#restart").show();
        }
        $("#num-info").text(message);
    });

    $("#restart").click(function () {
        magicNumber.resetAll();
        $("#restart").hide();
        $("h2").text("Elige la dificultad");
        $("#lifes-info").text("Intentos: " + magicNumber.getPlayerLifes);
        $("#num-info").text("");
        $("button").removeClass("disabled");
        $("#difficulty").attr("disabled", false);
    });
});