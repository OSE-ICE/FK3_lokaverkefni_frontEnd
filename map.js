// Get the screen width
var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

// Set the zoom level based on the screen width
var zoomLevel = screenWidth < 600 ? 5 : 6;

var map = L.map('mapid').setView([64.963051, -19.020835], zoomLevel);

// Function to navigate to the routes page with a specific route ID
function navigateToRoute(routeId) {
    window.location.href = `routes.html?#route-${routeId}`;
}

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);

var marker1 = L.marker([64.9223, -23.2667]).addTo(map);
marker1.bindTooltip('Kirkjufellshringur', {permanent: false, direction: 'top'});
marker1.on('click', function() {
    navigateToRoute('26');
});

var marker2 = L.marker([63.9828, -19.0668]).addTo(map);
marker2.bindTooltip('Landmannalaugar - Hrafntinnusker - Skalli', {permanent: false, direction: 'top'});
marker2.on('click', function() {
    navigateToRoute('27');
});

var marker3 = L.marker([64.2093, -21.7129]).addTo(map);
marker3.bindTooltip('Esjan', {permanent: false, direction: 'top'});
marker3.on('click', function() {
    navigateToRoute('28');
});

var marker4 = L.marker([64.0209, -21.2120]).addTo(map);
marker4.bindTooltip('Reykjadalur blá leið', {permanent: false, direction: 'top'});
marker4.on('click', function() {
    navigateToRoute('29');
});


