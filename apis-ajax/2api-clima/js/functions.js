var apiKey = "a59eaa48679f8101f21f19db52c7ad31";

$(document).ready(function () {
    $('form').submit(function () {
        var city = $("#city").val();
        $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=es&units=metric&&appid=${apiKey}`,
            function (res) {
                coordinates.lat = res.coord.lat;
                coordinates.lng = res.coord.lon;
                map.setCenter(coordinates);
                marker.setPosition(coordinates);
                $("#city-loc").text(" " + res.name + ", " + res.sys.country);
                $("#city-weather-desc").text(" " + res.weather[0].description);
                $("#city-temp").text(" " + res.main.temp + "°C");
                $("#city-temp-min").text(" " + res.main.temp_min + "°C");
                $("#city-temp-max").text(" " + res.main.temp_max + "°C");
                $("#city-hum").text(" " + res.main.humidity + "%");
            },
            'json');
        return false;
    });
});

// Esquema de response de api para el clima
/*{
    "coord": {
        "lon": -72.6,
        "lat": -38.7333
    },
    "weather": [{
        "id": 741,
        "main": "Fog",
        "description": "fog",
        "icon": "50d"
    }],
    "base": "stations",
    "main": {
        "temp": 277.15,
        "feels_like": 277.15,
        "temp_min": 277.15,
        "temp_max": 277.15,
        "pressure": 1020,
        "humidity": 100
    },
    "visibility": 10000,
    "wind": {
        "speed": 1.03,
        "deg": 0
    },
    "clouds": {
        "all": 40
    },
    "dt": 1620744689,
    "sys": {
        "type": 1,
        "id": 8527,
        "country": "CL",
        "sunrise": 1620733354,
        "sunset": 1620769864
    },
    "timezone": -14400,
    "id": 3870011,
    "name": "Temuco",
    "cod": 200
}*/