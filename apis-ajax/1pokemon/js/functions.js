var limit = 20,
    offset = 0;
var url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

function formatName(name) {
    var firstLetter = name.charAt(0).toUpperCase();
    name = firstLetter + name.slice(1);
    return name;
}

function addHtmlCss(pkmName, pkmId) {
    $("#pokemons").append('<a id="' + pkmId + '" class="pkm box generic-box">' +
        '<span id="pkm-name">' + pkmName + '</span><br>' +
        '<span id="pkm-num">#' + pkmId + '</span>' +
        '</a>');
    $("#" + pkmId).css("background-image", "url('http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pkmId + ".png')");
}

function getPkmTypes(pkmId) {
    $.get("https://pokeapi.co/api/v2/pokemon/" + pkmId,
        function (res) {
            console.log(res.types);
            res.types;
        },
        "json");
}

function getPokemons(lastId = 0) {
    $.get(url,
        function (res) {
            console.log(res.results);
            url = res.next;
            for (const key in res.results) {
                var pkmName = formatName(res.results[key].name);
                var pkmId = parseInt(key) + 1 + lastId;
                addHtmlCss(pkmName, pkmId);
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

    $("#pokemons").on("click", "a.pkm", function () {
        console.log("alo");
    });
});