document.getElementById("container").style["background"] = "url('img/sea.jpg')";
document.getElementById("container").style["background-repeat"] = "no-repeat";
document.getElementById("container").style["background-size"] = "cover";

var heroPoints = 100;
document.getElementById("score").innerText = heroPoints;

var heroPos = {
    x: 300,
    y: 300
}

var enemies = [{
    x: 150,
    y: 50,
    bx: -33,
    by: -3
}, {
    x: 250,
    y: 50,
    bx: -123,
    by: -3
}, {
    x: 350,
    y: 50,
    bx: -33,
    by: -3
}, {
    x: 450,
    y: 50,
    bx: -123,
    by: -3
}, {
    x: 550,
    y: 50,
    bx: -33,
    by: -3
}, {
    x: 650,
    y: 50,
    bx: -123,
    by: -3
}, {
    x: 750,
    y: 50,
    bx: -33,
    by: -3
}];

function displayHero() {
    document.getElementById("hero").style["top"] = heroPos.y + "px";
    document.getElementById("hero").style["left"] = heroPos.x + "px";
}

function displayEnemies() {
    var output = "";
    for (var i = 0; i < enemies.length; i++) {
        if (i % 2 === 0) {
            output += '<div class="enemy enemy2" style="top:' + enemies[i].y + 'px; left:' + enemies[i].x +
                'px;background-position: ' + enemies[i].bx + 'px ' + enemies[i].by + 'px;"></div>';
        } else {
            output += '<div class="enemy enemy1" style="top:' + enemies[i].y + 'px; left:' + enemies[i].x +
                'px;background-position: ' + enemies[i].bx + 'px ' + enemies[i].by + 'px;"></div>';
        }
    }
    document.getElementById("enemies").innerHTML = output;
}

function moveEnemies() {
    for (var i = 0; i < enemies.length; i++) {
        enemies[i].y += 10;
    }
}

function moveBullets() {
    var bullets = document.getElementsByClassName("bullet");
    for (var i = 0; i < bullets.length; i++) {
        var topValue = parseInt(bullets[i].style["top"].split("px")[0]);
        bullets[i].style["top"] = (topValue - 10) + "px";
    }
}

function enemiesCollision() {
    for (var i = 0; i < enemies.length; i++) {
        if (heroPos.x === enemies[i].x && heroPos.y === enemies[i].y &&
            document.getElementsByClassName("enemy")[i].style["background-position"] !== "-109px -30px") {
            heroPoints -= 500;
            document.getElementById("score").innerText = heroPoints;
        }
    }
}

function bulletsCollision() {
    var bullets = document.getElementsByClassName("bullet");
    var docEnemies = document.getElementsByClassName("enemy");
    for (var j = 0; j < bullets.length; j++) {
        for (var i = 0; i < docEnemies.length; i++) {
            var topValue = parseInt(bullets[j].style["top"].split("px")[0]);
            var leftValue = parseInt(bullets[j].style["left"].split("px")[0]);
            if (enemies[i].bx !== -109 && enemies[i].by !== -30 && leftValue === enemies[i].x &&
                topValue <= enemies[i].y + 10 && topValue >= enemies[i].y - 10) {
                document.getElementById("explotion").play();
                document.getElementsByClassName("enemy")[i].style["background-position"] = -109 + "px " + -30 + "px";
                enemies[i].bx = -109;
                enemies[i].by = -30;
                heroPoints += 10;
                document.getElementById("score").innerText = heroPoints;
            }
        }
    }
}

function wallCollision() {
    for (var i = 0; i < enemies.length; i++) {
        if (enemies[i].y >= 500) {
            enemies[i].y = 50;
            if (document.getElementsByClassName("enemy")[i].style["background-position"] === "-109px -30px") {
                document.getElementById("enemies").removeChild(document.getElementsByClassName("enemy")[i]);
                enemies.splice(i, 1);
            }
        }
    }

    var bullets = document.getElementsByClassName("bullet");
    if (bullets.length >= 1) {
        for (var i = 0; i < bullets.length; i++) {
            var topValue = parseInt(bullets[i].style["top"].split("px")[0]);
            if (topValue <= 50) {
                document.getElementById("bullets").removeChild(document.getElementsByClassName("bullet")[i]);
            }
        }
    }
}

function gameLoop() {
    moveEnemies();
    moveBullets();
    displayEnemies();
    enemiesCollision();
    bulletsCollision();
    wallCollision();
}

setInterval(gameLoop, 1000);

gameLoop();

document.onkeydown = function (e) {
    if (e.key === "ArrowLeft" && heroPos.x - 10 >= 50) {
        heroPos.x -= 10;
    } else if (e.key === "ArrowRight" && heroPos.x + 10 <= 950) {
        heroPos.x += 10;
    } else if (e.key === "ArrowUp" && heroPos.y - 10 >= 50) {
        heroPos.y -= 10;
    } else if (e.key === "ArrowDown" && heroPos.y + 10 <= 500) {
        heroPos.y += 10;
    }

    displayHero();
    enemiesCollision();

    if (e.key === " ") {
        document.getElementById("bullets").innerHTML += '<div class="bullet" style="top:' + (heroPos.y - 10) +
            'px; left:' + heroPos.x + 'px;"></div>';
    }
}