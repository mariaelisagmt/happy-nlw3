//Map
const map = L.map('mapid').setView([-3.6876675,-40.3582159], 15);

//create and add tilteLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//Create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

const popup = L.popup ({
    closeButton: false,
    className: 'map-popoup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanages"><img src="./public/images/arrow-white.svg"></a>');



L.marker([-3.6876675,-40.3582159], {icon: icon})
.addTo(map)
.bindPopup(popup);

