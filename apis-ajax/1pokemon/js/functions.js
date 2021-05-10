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
        '<span class="pkm-name">' + pkmName + '</span><br>' +
        '<span class="pkm-num">#' + pkmId + '</span>' +
        '</a>');
    $("#" + pkmId).css("background-image", "url('http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pkmId + ".png')");
}

function getPkmInfo(pkmId) {
    $.get("https://pokeapi.co/api/v2/pokemon/" + pkmId,
        function (res) {
            console.log(res.types);
            res.types;
        },
        "json");
}

function getPkmTypes() {
    $.get("https://pokeapi.co/api/v2/type",
        function (res) {
            console.log(res.results);
            for (const key in res.results) {
                var typeName = formatName(res.results[key].name);
                var typeId = parseInt(key) + 1;
                $("#pokemons").append('<a id="' + typeId + '" class="type box generic-box">' +
                    '<div class="pkm-text"><span class="pkm-name">' + typeName + '</span><br>' +
                    '<span class="pkm-num">#' + typeId + '</span></div>' +
                    '</a>');
            }
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
                //addHtmlCss(pkmName, pkmId);
                $("#pokemons").append('<a id="' + pkmId + '" class="pkm box generic-box">' +
                    '<span class="pkm-name">' + pkmName + '</span><br>' +
                    '<span class="pkm-num">#' + pkmId + '</span>' +
                    '</a>');
                $("#" + pkmId).css("background-image", "url('http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pkmId + ".png')");
            }
            offset += 20;
        },
        "json");
}

$(document).ready(function () {
    var scrollContent = true;
    getPokemons();

    $(window).scroll(function () {
        if ($(window).scrollTop() >= $(document).height() - $(window).height() - 1 && scrollContent) {
            var lastId = $("#pokemons").children().length;
            getPokemons(lastId);
        }
    });

    $("#pokemons").on("click", "a.pkm", function () {
        console.log("alo");
    });

    $(".menu button").click(function () {
        if (!$(this).hasClass("inactive-box")) {
            $(".menu button").attr("disabled", false);
            $(".menu button").removeClass("inactive-box");
            $(this).attr("disabled", true);
            $(this).addClass("inactive-box");
        }
    });

    $("#types-btn").click(function () {
        scrollContent = false;
        $("#pokemons a").fadeOut();
        setTimeout(function () {
            $("#pokemons").empty();
        }, 1000);
        setTimeout(function () {
            getPkmTypes();
        }, 1000);
    });

    $("#pkms-btn").click(function () {
        scrollContent = true;
        url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
        $("#pokemons a").fadeOut();
        setTimeout(function () {
            $("#pokemons").empty();
        }, 1000);
        setTimeout(function () {
            getPokemons();
        }, 1000);
    });
});