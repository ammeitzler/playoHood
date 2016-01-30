function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {lat: 40.737740, lng: -73.988192},
    mapTypeId: google.maps.MapTypeId.TERRAIN
  });

  // Define the LatLng coordinates for the polygon.
  var triangleCoords = [
      {lat: 40.741004, lng: -73.994158},
      {lat: 40.744800, lng: -73.991393},
      {lat: 40.742085, lng: -73.984992},
      {lat: 40.738354, lng: -73.987663}
  ];

  // Construct the polygon.
  var bermudaTriangle = new google.maps.Polygon({
    paths: triangleCoords,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  });
  bermudaTriangle.setMap(map);

  // Add a listener for the click event.
  bermudaTriangle.addListener('click', showArrays);

  infoWindow = new google.maps.InfoWindow;
}

/** @this {google.maps.Polygon} */
function showArrays(event) {
  // Since this polygon has only one path, we can call getPath() to return the
  // MVCArray of LatLngs.
  var vertices = this.getPath();

  var contentString = '<b>Bermuda Triangle polygon</b><br>' +
      'Clicked location: <br>' + event.latLng.lat() + ',' + event.latLng.lng() +
      '<br>';

  // Iterate over the vertices.
  for (var i =0; i < vertices.getLength(); i++) {
    var xy = vertices.getAt(i);
    contentString += '<br>' + 'Coordinate ' + i + ':<br>' + xy.lat() + ',' +
        xy.lng();
  }

  // Replace the info window's content and position.
  infoWindow.setContent(contentString);
  infoWindow.setPosition(event.latLng);

  infoWindow.open(map);
}

