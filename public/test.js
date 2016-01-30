function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {lat: 40.737740, lng: -73.988192},
    mapTypeId: google.maps.MapTypeId.TERRAIN
  });

  // Define the LatLng coordinates for the polygon.
  var triangleCoords = [
      {lat: 40.741004, lng: -73.994158},
      {lat: 40.744800, lng: -73.991393},
      {lat: 40.742085, lng: -73.983372},
      {lat: 40.738882, lng: -73.985217},
      {lat: 40.739492, lng: -73.986826},
      {lat: 40.738354, lng: -73.987663}
  ];

  var triangleCoords2 = [
     {lat: 40.728328, lng: -74.0026868},
     {lat: 40.725222, lng: -73.995894},
     {lat: 40.718983, lng: -74.001418},
     {lat: 40.721956, lng: -74.005499}
 ];

  // Construct the polygon.
  var bermudaTriangle = new google.maps.Polygon({
    paths: triangleCoords,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    id: 1, 
  });
  bermudaTriangle.setMap(map);

var bermudaTriangle2 = new google.maps.Polygon({
   paths: triangleCoords2,
   strokeColor: '#FF0000',
   strokeOpacity: 0.8,
   strokeWeight: 3,
   fillColor: '#FF0000',
   fillOpacity: 0.35,
   id: 2,
 });
bermudaTriangle2.setMap(map);


  function clickCallback(event){
    console.log(this);
  }

  // Add a listener for the click event.
  bermudaTriangle.addListener('click', showArrays);

  bermudaTriangle2.addListener('click', showArrays2);

  infoWindow = new google.maps.InfoWindow;
}

/** @this {google.maps.Polygon} */
function showArrays(event) {
  // Since this polygon has only one path, we can call getPath() to return the
  // MVCArray of LatLngs.
  var vertices = this.getPath();

  // var contentString = '<b>Flatiron District </b><br>' +
  //     'Clicked location: <br>' + event.latLng.lat() + ',' + event.latLng.lng() +
  //     '<br>';

  var contentString = "<iframe src='https://embed.spotify.com/?uri=spotify:user:spotifycommunity:playlist:6JZYbH5F02DSJcJkkvKAPw' frameborder='0' allowtransparency='true' width='300' height='315'></iframe>"

  // Iterate over the vertices.
  // for (var i =0; i < vertices.getLength(); i++) {
  //   var xy = vertices.getAt(i);
  //   contentString += '<br>' + 'Coordinate ' + i + ':<br>' + xy.lat() + ',' +
  //       xy.lng();
  // }

  // Replace the info window's content and position.
  infoWindow.setContent(contentString);
  infoWindow.setPosition(event.latLng);

  infoWindow.open(map);
}


function showArrays2(event) {
 // Since this polygon has only one path, we can call getPath() to return the
 // MVCArray of LatLngs.
 var vertices = this.getPath();

 var contentString = '<b>SoHo</b><br>' +
     'Clicked location: <br>' + event.latLng.lat() + ',' + event.latLng.lng() +
     '<br>';

   // // Iterate over the vertices.
   // for (var i =0; i < vertices.getLength(); i++) {
   //   var xy = vertices.getAt(i);
   //   contentString += '<br>' + 'Coordinate ' + i + ':<br>' + xy.lat() + ',' +
   //       xy.lng();
   // }

 // Replace the info window's content and position.
 infoWindow.setContent(contentString);
 infoWindow.setPosition(event.latLng);

 infoWindow.open(map);
}

