var blockTypes = {
    0: "empty",
    1: "wall",
    2: "coin",
    3: "cherry"
}

var pacmanPos = {
    x: 1,
    y: 1
}
var pacmanLeftValue = 83;
var pacmanTopValue = 85;

var pacmanTwoPos = {
    x: 1,
    y: 5
}
var pacmanTwoLeftValue = 83;
var pacmanTwoTopValue = 425;

var pacmanLife = 5;
var pacmanPoints = 0;

var ghostPos = {
    x: 9,
    y: 5
}
var ghostLeftValue = 747;
var ghostTopValue = 425;

var world = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 2, 2, 2, 3, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 1, 2, 1, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 1, 2, 3, 2, 2, 1],
    [1, 2, 2, 3, 1, 2, 1, 2, 2, 2, 1],
    [1, 0, 2, 3, 2, 2, 2, 2, 2, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

for (var i = 1; i < world.length - 1; i++) {
    for (var j = 1; j < world[i].length - 1; j++) {
        var block = Math.floor(Math.random() * 4);
        if (block === 1) {
            block = 0;
        }
        if (world[i][j] !== 1) {
            world[i][j] = block;
        }
    }
}

function drawWorld() {
    var output = "";
    for (var row = 0; row < world.length; row++) {
        output += '<div class="row">';
        for (var i = 0; i < world[row].length; i++) {
            output += '<div class="' + blockTypes[world[row][i]] + '"></div>';
        }
        output += "</div>";
    }
    document.getElementById("container").innerHTML = output;
}

drawWorld();

document.getElementById("lifes").innerText = "Lifes: " + pacmanLife;
document.getElementById("score").innerText = "Score: " + pacmanPoints;

function displayCharacters() {
    document.getElementById("pacman").style.left = pacmanLeftValue + "px";
    document.getElementById("pacman").style.top = pacmanTopValue + "px";

    document.getElementById("pacman2").style.left = pacmanTwoLeftValue + "px";
    document.getElementById("pacman2").style.top = pacmanTwoTopValue + "px";

    document.getElementById("ghost").style.left = ghostLeftValue + "px";
    document.getElementById("ghost").style.top = ghostTopValue + "px";
}

displayCharacters();

function updatePacmanImg(pacmanDir) {
    document.getElementById("pacman").style.backgroundImage = 'url("img/pacman-' + pacmanDir + '.gif")';
    document.getElementById("pacman2").style.backgroundImage = 'url("img/pacman-' + pacmanDir + '.gif")';
}

function resetCharactersPosition() {
    pacmanLeftValue = 83;
    pacmanTopValue = 85;
    pacmanPos.x = 1;
    pacmanPos.y = 1;
    pacmanTwoLeftValue = 83;
    pacmanTwoTopValue = 425;
    pacmanTwoPos.x = 1;
    pacmanTwoPos.y = 5;
    ghostLeftValue = 747;
    ghostTopValue = 425;
    ghostPos.x = 9;
    ghostPos.y = 5;
    updatePacmanImg("right");
}

function pacmanMovement(e) {
    if (e.key == "ArrowLeft" && pacmanLeftValue - 83 >= 83 && world[pacmanPos.y][pacmanPos.x - 1] !==
        1) { // LEFT
        pacmanLeftValue = pacmanLeftValue - 83;
        pacmanPos.x--;
        updatePacmanImg("left");
    } else if (e.key == "ArrowRight" && pacmanLeftValue + 83 <= 747 && world[pacmanPos.y][pacmanPos.x + 1] !==
        1) { // RIGHT
        pacmanLeftValue = pacmanLeftValue + 83;
        pacmanPos.x++;
        updatePacmanImg("right");
    } else if (e.key == "ArrowDown" && pacmanTopValue + 85 <= 425 && world[pacmanPos.y + 1][pacmanPos.x] !==
        1) { // DOWN
        pacmanTopValue = pacmanTopValue + 85;
        pacmanPos.y++;
        updatePacmanImg("down");
    } else if (e.key == "ArrowUp" && pacmanTopValue - 85 >= 85 && world[pacmanPos.y - 1][pacmanPos.x] !==
        1) { // TOP
        pacmanTopValue = pacmanTopValue - 85;
        pacmanPos.y--;
        updatePacmanImg("up");
    }

    if (e.key == "ArrowLeft" && pacmanTwoLeftValue - 83 >= 83 && world[pacmanTwoPos.y][pacmanTwoPos.x - 1] !==
        1) { // LEFT
        pacmanTwoLeftValue = pacmanTwoLeftValue - 83;
        pacmanTwoPos.x--;
    } else if (e.key == "ArrowRight" && pacmanTwoLeftValue + 83 <= 747 && world[pacmanTwoPos.y][pacmanTwoPos.x + 1] !==
        1) { // RIGHT
        pacmanTwoLeftValue = pacmanTwoLeftValue + 83;
        pacmanTwoPos.x++;
    } else if (e.key == "ArrowDown" && pacmanTwoTopValue + 85 <= 425 && world[pacmanTwoPos.y + 1][pacmanTwoPos.x] !==
        1) { // DOWN
        pacmanTwoTopValue = pacmanTwoTopValue + 85;
        pacmanTwoPos.y++;
    } else if (e.key == "ArrowUp" && pacmanTwoTopValue - 85 >= 85 && world[pacmanTwoPos.y - 1][pacmanTwoPos.x] !==
        1) { // TOP
        pacmanTwoTopValue = pacmanTwoTopValue - 85;
        pacmanTwoPos.y--;
    }
}

function updateLifes(positionX, positionY) {
    if (positionX == ghostPos.x && positionY == ghostPos.y) {
        pacmanLife--;
        document.getElementById("lifes").innerText = "Lifes: " + pacmanLife;
        alert("Has perdido una vida");
        pacmanPoints = 0;
        document.getElementById("score").innerText = "Score: " + pacmanPoints;
        resetCharactersPosition();
    }
}

function updatePoints(positionX, positionY) {
    if (world[positionY][positionX] === 3) {
        pacmanPoints += 40;
        world[positionY][positionX] = 0;
        document.getElementById("score").innerText = "Score: " + pacmanPoints;
        drawWorld();
    }

    if (world[positionY][positionX] === 2) {
        pacmanPoints += 10;
        world[positionY][positionX] = 0;
        document.getElementById("score").innerText = "Score: " + pacmanPoints;
        drawWorld();
    }
}

document.onkeydown = function (e) {
    if (document.getElementsByClassName("cherry").length + document.getElementsByClassName("coin").length == 0) {
        alert("¡Has ganado :D! Recarga la pagina para volver a jugar.");
    } else if (pacmanLife > 0) {
        pacmanMovement(e);

        var ghostStep = Math.floor(Math.random() * 4) + 1;
        if (ghostStep === 1 && ghostLeftValue - 83 >= 83 && world[ghostPos.y][ghostPos.x - 1] !==
            1) { // LEFT
            ghostLeftValue = ghostLeftValue - 83;
            ghostPos.x--;
        } else if (ghostStep === 2 && ghostLeftValue + 83 <= 747 && world[ghostPos.y][ghostPos.x + 1] !==
            1) { // RIGHT
            ghostLeftValue = ghostLeftValue + 83;
            ghostPos.x++;
        } else if (ghostStep === 3 && ghostTopValue + 85 <= 425 && world[ghostPos.y + 1][ghostPos.x] !==
            1) { // DOWN
            ghostTopValue = ghostTopValue + 85;
            ghostPos.y++;
        } else if (ghostStep === 4 && ghostTopValue - 85 >= 85 && world[ghostPos.y - 1][ghostPos.x] !==
            1) { // TOP
            ghostTopValue = ghostTopValue - 85;
            ghostPos.y--;
        }

        updateLifes(pacmanPos.x, pacmanPos.y);
        updateLifes(pacmanTwoPos.x, pacmanTwoPos.y);

        updatePoints(pacmanPos.x, pacmanPos.y);
        updatePoints(pacmanTwoPos.x, pacmanTwoPos.y);

        displayCharacters();
    } else {
        alert("Has perdido! :C")
    }
}