var limit = 20,
    offset = 0;

function formatName(name) {
    var firstLetter = name.charAt(0).toUpperCase();
    name = firstLetter + name.slice(1);
    return name;
}

function addHtmlCss(pkmName, pkmNum) {
    $("#pokemons").append('<div id="' + pkmNum + '" class="pkm box green-box">' +
        '<span id="pkm-name">' + pkmName + '</span><br>' +
        '<span id="pkm-num">#' + pkmNum + '</span>' +
        '</div>');
    $("#" + pkmNum).css("background-image", "url('http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pkmNum + ".png')");
}

function getPokemons(lastId = 0) {
    $.get("https://pokeapi.co/api/v2/pokemon?limit=" + limit + "&offset=" + offset, function (res) {
            console.log(res.results);
            for (const key in res.results) {
                var pkmName = formatName(res.results[key].name);
                var pkmNum = parseInt(key) + 1 + lastId;
                addHtmlCss(pkmName, pkmNum);
            }
            offset += 20;
        },
        "json");
}

$(document).ready(function () {
    getPokemons();

    $(window).scroll(function () {
        if ($(window).scrollTop() >= $(document).height() - $(window).height() - 1) {
            var lastId = $("#pokemons").children().length;
            getPokemons(lastId);
        }
    });
});