import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React, { useEffect } from 'react';
import jsonData from './JSON.json'

// const mapContainerStyle = {
//   width: '100%',
//   height: '400px',
// };

// const defaultCenter = {
//   lat: -23.647945404052734,
//   lng: -46.57420349121094, // maua location 
// };

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
      });
      // Load GeoJSON data from the prop
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
    <div id="map" style={{ width: '100%', height: '400px' }}></div>
  );
};

export default GoogleMapComponent;