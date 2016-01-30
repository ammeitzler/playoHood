var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.737333, lng: -73.992685},
    zoom: 12
  });

  var rectangle = new google.maps.Rectangle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    map: map,
    bounds: {
      north: 40.737333,
      south: -73.992685,
      east: 40.737333,
      west: -73.992685
    }
  });




}