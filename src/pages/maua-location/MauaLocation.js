import React, { useState, useEffect } from 'react'
import { GoogleMap, useLoadScript,  DirectionsRenderer  } from '@react-google-maps/api';
import "./MauaLocation.css";

const MauaLocation = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

    const center = {
      lat: -23.647945404052734,
      lng: -46.57420349121094,
    };

    const [directions, setDirections] = useState(null);

    const getUserLocation = () => {
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
    }

    useEffect(() => {
      if (isLoaded) {
        getUserLocation();
      }
    }, [isLoaded]);
    
    if (loadError) {
        return <div>Erro ao carregar mapa</div>;
    };
    
    if (!isLoaded) {
        return <div>Carregando Mapa</div>;
    };
    
    return (
    <div className="google-maps">
      <h1>Onde é a Mauá?</h1>
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
        <div className="left-container">
          <div className="address-box">
            <h2>Endereço: </h2>
            <p>Praça Mauá, 1 - Mauá, São Caetano do Sul - SP, 09580-900, Brazil</p>
          </div>
          <div className="path-button-container">
            {// Removido-24-01
            /* <button className="path-button" onClick={getUserLocation}>Mostrar Rota</button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MauaLocation