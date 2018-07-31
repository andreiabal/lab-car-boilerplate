var map;
var mapMobile;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 3
  });

  mapMobile = new google.maps.Map(document.getElementById('map-mobile'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 3
  });
}




















