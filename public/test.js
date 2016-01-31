var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.737333, lng: -73.992685},
      zoom: 12
    });

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


var triangleCoords3 = [
    {lat: 40.724291, lng: -73.992659},
    {lat: 40.734299, lng: -73.989724},
    {lat: 40.726691, lng: -73.971653},
    {lat: 40.718848, lng: -73.973506}
];
     // Construct the polygon.
  var bermudaTriangle = new google.maps.Polygon({
    paths: triangleCoords,
    strokeColor: '#6da89d',
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: '#8bd5c8',
    fillOpacity: 0.35,
    id: 1, 
  });
  bermudaTriangle.setMap(map);

  var bermudaTriangle2 = new google.maps.Polygon({
     paths: triangleCoords2,
     strokeColor: '#6da89d',
     strokeOpacity: 0.8,
     strokeWeight: 3,
     fillColor: '#8bd5c8',
     fillOpacity: 0.35,
     id: 2,
   });
  bermudaTriangle2.setMap(map);

  var bermudaTriangle3 = new google.maps.Polygon({
  paths: triangleCoords3,
  strokeColor: '#6da89d',
  strokeOpacity: 0.8,
  strokeWeight: 3,
  fillColor: '#8bd5c8',
  fillOpacity: 0.35,
  id: 3,
});
bermudaTriangle3.setMap(map);

   // Add a listener for the click event.
  bermudaTriangle.addListener('click', showArrays);

  bermudaTriangle2.addListener('click', showArrays);

  bermudaTriangle3.addListener('click', showArrays);

  infoWindow = new google.maps.InfoWindow;
}

/** @this {google.maps.Polygon} */
function showArrays(event) {
  // Since this polygon has only one path, we can call getPath() to return the
  // MVCArray of LatLngs.
  var vertices = this.getPath();
  console.log('THIS', this.id);

  
  // var contentString = '<b>Flatiron District </b><br>' +
  //     'Clicked location: <br>' + event.latLng.lat() + ',' + event.latLng.lng() +
  //     '<br>';

  //var contentString = "<iframe src='https://embed.spotify.com/?uri=spotify:user:spotifycommunity:playlist:6JZYbH5F02DSJcJkkvKAPw' frameborder='0' allowtransparency='true' width='300' height='315'></iframe>"
  //setPlaylist()

  var contentString = setPlaylist(this.id);
  console.log('contentString', contentString);

  // Iterate over the vertices.
  // for (var i =0; i < vertices.getLength(); i++) {
  //   var xy = vertices.getAt(i);
  //   contentString += '<br>' + 'Coordinate ' + i + ':<br>' + xy.lat() + ',' +
  //       xy.lng();
  // }
  var request = new XMLHttpRequest();
  request.open('GET', '/areas/' + this.id, true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      var resp = request.responseText;
      var updatedUrl = 'https://embed.spotify.com/?uri=spotify:' + JSON.parse(resp).playlistId;
      console.log(JSON.parse(resp).playlistId);
      // document.querySelectorAll('iframe')[0].setAttribute('src', updatedUrl);
      // Replace the info window's content and position.
      var contentString = "<iframe src=" + updatedUrl  + " frameborder='0' allowtransparency='true' width='300' height='315'></iframe>"


      infoWindow.setContent(contentString);
      infoWindow.setPosition(event.latLng);

      infoWindow.open(map);

    } else {
      // We reached our target server, but it returned an error

    }
  };

  request.onerror = function() {
    // There was a connection error of some sort
    console.log('there was an error');
  };

  request.send();  

}



function setPlaylist(id){
  console.log('noice')
  var request = new XMLHttpRequest();
  request.open('GET', '/areas/' + id, true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      var resp = request.responseText;
      var updatedUrl = 'https://embed.spotify.com/?uri=spotify:' + JSON.parse(resp).playlistId;
      console.log(JSON.parse(resp).playlistId);
      // document.querySelectorAll('iframe')[0].setAttribute('src', updatedUrl);
      
    } else {
      // We reached our target server, but it returned an error

    }
  };

  request.onerror = function() {
    // There was a connection error of some sort
    console.log('there was an error');
  };

  request.send();  
}

document.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll( 'button' ), function ( a ) {
    a.addEventListener( 'click', function () {
        // code here
        console.log(a.getAttribute('data-id'));
        var playlistId = a.getAttribute('data-id');
        setPlaylist(playlistId);
    }, false );
  });


});


// navigator.geolocation.getCurrentPosition(function(position) {
//   do_something(position.coords.latitude, position.coords.longitude);
// });

