const mapId = 'map';

navigator.geolocation.getCurrentPosition(position => {
    let latitude = position.coords.latitude.toFixed(4);
    let longitude = position.coords.longitude.toFixed(4);
    return position;
})

const initialCoordinates = [position];
const map = L.map(mapId).setView(initialCoordinates, 13);
const MAPBOX_API = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}'
const ATTRIBUTION =
    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
const ACCESS_TOKEN =
    'pk.eyJ1IjoiY2Nhc3RpbGxvMDZtYiIsImEiOiJja2k1eXpybXU3em1mMnRsNjNqajJ0YW12In0.aFQJlFDBDQeUpLHT4EiRYg';
L.tileLayer(MAPBOX_API, {
    attribution: ATTRIBUTION,
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: ACCESS_TOKEN
}).addTo(map);

// Añadimos el marcador a nuestra posición inicial
L.marker(initialCoordinates).bindPopup("<br>Posición inicial del mapa").addTo(map);