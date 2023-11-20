import React, { useEffect } from 'react';
import jsonData from './coordinates.json'
import "./GoogleMapComponent.css"

const GoogleMapComponent = () => {
  useEffect(() => {
    let map;

    function initMap() {
      map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 16.8,
        center: {
          lng: -46.573049,
          lat: -23.649001,

        },
        mapTypeId: 'terrain',
        disableDefaultUI: true,
        zoomControl: true,
        gestureHandling: 'cooperative',
      });
      
      map.data.addGeoJson(jsonData);
      
      
    }

    window.initMap = initMap;

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&callback=initMap&v=weekly`;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    // <LoadScript
    //   googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"
    // >
    //   <GoogleMap
    //     mapContainerStyle={mapContainerStyle}
    //     center={defaultCenter}
    //     zoom={15}
    //   >
    //     <Marker position={defaultCenter} />
    //   </GoogleMap>
    // </LoadScript>
    <div id="map"></div>
  );
};

export default GoogleMapComponent;