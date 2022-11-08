// let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }

// window.initMap = initMap;

function initMap() {
  // const map = new google.maps.Map(document.getElementById("map"), {
  //   zoom: 13,
  //   center: { lat: 34.04924594193164, lng: -118.24104309082031 },
  // });

  //get latlng of tokyo
  const myLatlng_tokyo = { lat: 36, lng: 140 };

  //create google map
  const map = new google.maps.Map(document.getElementById("map"), {
    center: myLatlng_tokyo,
    zoom: 8,
  });

  const trafficLayer = new google.maps.TrafficLayer();

  trafficLayer.setMap(map);

  //// add latlng infowindows at user's location of mouse click on google maps = done
  // Configure the click listener.
  map.addListener("click", (mapsMouseEvent) => {
    // Create a new InfoWindow.
    let infoWindow = new google.maps.InfoWindow({
      position: mapsMouseEvent.latLng,
    });
    infoWindow.setContent(
      JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
    );
    infoWindow.open(map);
  });


  const  list_locations1 = [{ lat: 35, lng: 140 }, { lat: 37, lng: 140 }, { lat: 36, lng: 139 }, { lat: 36, lng: 141 }];

  //// add list of markers = done
  // Loop locations to map
  for (var i = 0; i < list_locations1.length; i++) {
    var latLng = new google.maps.LatLng(list_locations1[i].lat, list_locations1[i].lng);
    // add marker
    var marker = new google.maps.Marker({
        position: latLng,
        map: map
    });
    console.log("New map marker added, lat: " + list_locations1[i].lat + " lng: " + list_locations1[i].lng);
  }

  ////add marker by user's location of mouse click
  ////store markers in array
  //https://developers.google.com/maps/documentation/javascript/examples/marker-remove


  // make a list of latlng from markers

  // delete markers = ip
}
  

window.initMap = initMap;
