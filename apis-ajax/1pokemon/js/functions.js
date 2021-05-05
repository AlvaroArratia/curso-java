$(document).ready(function () {
    var limit = 20,
        offset = 0;
    $.get("https://pokeapi.co/api/v2/pokemon?limit=" + limit + "&offset=" + offset, function (res) {
            console.log(res.results);
            var output = '';
            for (const key in res.results) {
                var pkmName = res.results[key].name;
                var pkmNum = parseInt(key) + 1;
                    output += '<div class="box green-box">' +
                    '<span id="pkm-name">' + pkmName + '</span><br>' +
                    '<span id="pkm-num">#' + pkmNum + '</span>' +
                    '</div>';
            }
            $("#pokemons").append(output);
            limit += 20;
            offset += 20;
        },
        "json");

    $(window).scroll(function () {
        console.log($(window).scrollTop());
        console.log($(document).height());
        //console.log($("ol:last-child").offset().top);
        if ($(window).scrollTop() >= $("ol:last-child").offset()) {
            console.log("alo")
            $.get("https://pokeapi.co/api/v2/pokemon?limit=" + limit + "&offset=" + offset, function (res) {
                    console.log(res.results);
                    var output = '';
                    for (const key in res.results) {
                        var pkmName = res.results[key].name;
                        output += '<li class="list-item">' + pkmName + '</li>';
                    }
                    $("ol").append(output);
                    limit += 20;
                    offset += 20;
                },
                "json");
        }
    });


});