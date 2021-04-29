$(document).ready(function () {
    var magicNumber = new MagicNumber();
    magicNumber.generateRandomNumber();

    $("#select-difficulty").click(function () {
        magicNumber.setDifficulty = $("#difficulty").val();
        magicNumber.lifesDifficulties();
        $("span").text("intentos: " + magicNumber.getPlayerLifes);
        console.log(magicNumber);
    });

    $("#send-num").click(function () {
        if (!magicNumber.youLoose()) {
            var message = magicNumber.matchNumber($("#player-num").val());
            $("p").text(message);
            $("span").text("intentos: " + magicNumber.getPlayerLifes);
        } else {
            $("p").text("¡Has perdido!");
        }
    });
});