// Initialize and add the map
function initMap() {
    // Map options
    const mapOptions = {
      zoom: 15,
      center: { lat: -34.397, lng: 150.644 }, // Default center point
    };
  
    // Create map object
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
  
    // Try HTML5 geolocation to find real-time location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
  
          // Create a marker at the user's current location
          const marker = new google.maps.Marker({
            position: pos,
            map: map,
          });
  
          // Set the map's center to the user's location
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, map.getCenter());
    }
  }
  
  // Handle geolocation errors
  function handleLocationError(browserHasGeolocation, pos) {
    alert(
      browserHasGeolocation
        ? 'Error: The Geolocation service failed.'
        : "Error: Your browser doesn't support geolocation."
    );
  }
  
  // Load the map after the page has loaded
  window.onload = initMap;
  