import React, { useState, useEffect } from 'react'
import { GoogleMap, useLoadScript,  DirectionsRenderer  } from '@react-google-maps/api';
import "./MauaLocation.css";

const MauaLocation = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyDNxjbfEj7qqrgZ8NqJW-CgJsaPqZaUFV4",
    });

    const center = {
      lat: -23.647945404052734,
      lng: -46.57420349121094,
    };

    const [directions, setDirections] = useState(null);

    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const userLocation = { lat: latitude, lng: longitude };

            const directionsService = new window.google.maps.DirectionsService();
            const request = {
            origin: userLocation,
            destination: center,
            travelMode: "DRIVING",
            };
            directionsService.route(request, (response, status) => {
              if (status === 'OK') {
                setDirections(response);
              } else {
                console.error('Error calculating the route:', status);
              }
            });
          },
          (error) => {
            console.error('Error getting current location:', error);
          }
        );


      }
    }, []);
    
    if (loadError) {
        return <div>Error loading maps</div>;
    };
    
    if (!isLoaded) {
        return <div>Loading maps</div>;
    };
    
    return (
    <div className="google-maps">
      <h1>Where is Mauá?</h1>
      <div className="location-container">
        <GoogleMap
          mapContainerClassName="map-container"
          zoom={17.5}
          center={center}
        >
          {directions && (
          <DirectionsRenderer
            options={{
              directions: directions,
            }}
          />
        )}
        </GoogleMap>
        <div class="address-box">
          <h2>Address: </h2>
          <p>Praça Mauá, 1 - Mauá, São Caetano do Sul - SP, 09580-900, Brazil</p>
        </div>
      </div>
    </div>
  )
}

export default MauaLocation