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

var marker1 = L.marker([64.07326994463801, -21.766959987580776]).addTo(map);
marker1.bindTooltip('Heiðmörk', {permanent: false, direction: 'top'});
marker1.on('click', function() {
    navigateToRoute('18');
});

