let coordinates = {
    lat: -38.7333,
    lng: -72.6
};

let map, marker, infoWindow;

// Initialize and add the map
function initMap() {
    // The map, centered at coordinates
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: coordinates,
    });
    // The marker, positioned at coordinates
    marker = new google.maps.Marker({
        position: coordinates,
        map: map,
    });

    infoWindow = new google.maps.InfoWindow();
    const locationButton = document.createElement("button");
    locationButton.textContent = "Pan to Current Location";
    locationButton.classList.add("custom-map-control-button");
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
    locationButton.addEventListener("click", () => {
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    infoWindow.setPosition(pos);
                    infoWindow.setContent("Ubicacion actual.");
                    infoWindow.open(map);
                    map.setCenter(pos);
                    map.setZoom(pos);
                    marker.setPosition(pos);
                },
                () => {
                    handleLocationError(true, infoWindow, map.getCenter());
                }
            );
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }
    });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation ?
        "Error: The Geolocation service failed." :
        "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
}