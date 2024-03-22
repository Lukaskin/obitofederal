// Función para inicializar el mapa
function initMap() {
  // Coordenadas del centro del mapa
  var myLatLng = {lat: 40.7128, lng: -74.0060};

  // Opciones del mapa
  var mapOptions = {
    center: myLatLng,
    zoom: 8 // Zoom inicial
  };

  // Crear el mapa
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  // URL del mapa de Google My Maps
  var mapUrl = 'URL_DE_TU_MAPA_DE_GOOGLE_MY_MAPS'; // Reemplazar con la URL de tu mapa de Google My Maps

  // Crear capa de mapa personalizada
  var kmlLayer = new google.maps.KmlLayer({
    url: mapUrl,
    map: map
  });
}
