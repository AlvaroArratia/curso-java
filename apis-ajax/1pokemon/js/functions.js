var limit = 20,
    offset = 0;
var url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

function formatNameText(name) {
    var firstLetter = name.charAt(0).toUpperCase();
    name = firstLetter + name.slice(1);
    return name;
}

function getPkmInfo(pkmId) {
    $.get("https://pokeapi.co/api/v2/pokemon/" + pkmId,
        function (res) {
            console.log(res);
            var pkmName = formatNameText(res.name);
            $("#pkm-name").text(pkmName + " #" + pkmId);
            $("#pkm-img").attr("src", "http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pkmId + ".png");
            $("#pkm-info1").text(res.abilities[0].ability.name);
        },
        "json");
}

function getPkmTypes() {
    $.get("https://pokeapi.co/api/v2/type?limit=20&offset=0",
        function (res) {
            console.log(res);
            for (const key in res.results) {
                var typeName = formatNameText(res.results[key].name);
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
                var pkmName = formatNameText(res.results[key].name);
                var pkmId = parseInt(key) + 1 + lastId;
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
    //$("#pkm-content").hide();
    $(".menu").hide();
    getPokemons();

    $(window).scroll(function () {
        if ($(window).scrollTop() >= $(document).height() - $(window).height() - 1) {
            var lastId = $("#pokemons").children().length;
            getPokemons(lastId);
        }
    });

    $(".menu-btn").click(function () {
        if ($(".menu-btn").text() === "-") {
            $(".menu-btn").text("+");
        } else {
            $(".menu-btn").text("-");
        }
        $(".menu").slideToggle(1000);
    });

    $("#pokemons").on("click", "a.pkm", function () {
        //$("#pkm-content").slideUp(1000);
        //$("#pkm-content").slideDown(1000);
        getPkmInfo(parseInt($(this).attr("id")));
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
        $("#pokemons a").fadeOut();
        setTimeout(function () {
            $("#pokemons").empty();
        }, 1000);
        setTimeout(function () {
            getPkmTypes();
        }, 1000);
    });

    $("#pkms-btn").click(function () {
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