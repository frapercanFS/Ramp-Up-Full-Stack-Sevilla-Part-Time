//Obetener ubicacion

//  console.log(`${position.coords.latitude}, ${position.coords.longitude}`)

//Otra
let miUbicacion = [];
navigator.geolocation.watchPosition(position => {
    let latitud = position.coords.latitude;
    let longitud = position.coords.longitude;
    miUbicacion.push(latitud, longitud)
    console.log(latitud, longitud)


    const mapId = 'map';
    // Plaza Sol en Madrid [lat, lng]
    const map = L.map(mapId).setView(miUbicacion, 13);
    const MAPBOX_API = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}'
    const ATTRIBUTION =
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
    // Este token será el que obtengamos en la web de Mapbox
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

    L.marker(miUbicacion).addTo(map);
    // Ejemplo añadiendo otras coordenadas:
    const ubicacionDestino = [37.3754863, -6]
    L.marker(ubicacionDestino).addTo(map);
}, error => {
    console.warn(`Error! - ${error}`);

});