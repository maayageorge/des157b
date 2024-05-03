(function(){
    'use strict';

    // add your script here
    var map = L.map('map').setView([38.546, -121.744], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

    var marker = L.marker([38.546722,  -121.761501]).addTo(map);

    var circle = L.circle([38.539226, -121.753270], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 700
    }).addTo(map);

    var polygon = L.polygon([
        [38.548503, -121.747000],
        [38.547496, -121.746549],
        [38.548596, -121.746130]
    ]).addTo(map);

    marker.bindPopup("Trader Joe's").openPopup();
    circle.bindPopup("UC Davis");
    polygon.bindPopup("Central Park");

    var popup = L.popup()
    .setLatLng([38.554, -121.744])
    .setContent("I am a standalone popup.")
    .openOn(map);

    function onMapClick(e) {
        alert("You clicked the map at " + e.latlng);
    }
    
    map.on('click', onMapClick);

    var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }

    map.on('click', onMapClick);

    
}());