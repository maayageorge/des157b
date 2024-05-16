(function() {
    'use strict';

    AOS.init();

    var map = L.map('map').setView([38.546, -121.744], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 25,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var markers = [];

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            var markerdata = data;

            Object.keys(markerdata).forEach(function(key) {
                var markerinfo = markerdata[key];
                var coordinates = markerinfo.coordinates.split(',').map(Number);
                var marker = L.marker(coordinates).addTo(map);
                markers.push(marker);

                marker.bindPopup(markerinfo.name);
            });

            function displayPopup(markerinfo) {
                var popupContent = `
                    <div id="item" data-aos="fade-down" data-aos-duration="1200">
                        <img src="${markerinfo.img}" class="titleimg">
                        <div class="info">
                            <h3>${markerinfo.name}</h3>
                            <p><strong>Dish:</strong> ${markerinfo.item}</p>
                            <p><strong>Address:</strong> ${markerinfo.location}</p>
                        </div>
                    </div>
                `;
                document.querySelector('#container').innerHTML = popupContent;
            }

            markers.forEach(function(marker, index) {
                marker.addEventListener('click', function() {
                    var markerinfo = markerdata[Object.keys(markerdata)[index]];
                    displayPopup(markerinfo);
                });
            });
        })

        .catch(error => console.error('Error fetching data:', error));

})();