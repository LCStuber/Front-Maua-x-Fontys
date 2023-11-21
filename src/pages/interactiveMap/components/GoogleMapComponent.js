import React, { useEffect } from 'react';
import jsonData from './coordinates.json';
import "./GoogleMapComponent.css";

const GoogleMapComponent = () => {
  useEffect(() => {
    let map;
    let infoWindowOpen = false;
    function initMap() {
      map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 16.8,
        center: {
          lng: -46.573078,
          lat: -23.648163
        },
        mapTypeId: 'terrain',
        disableDefaultUI: true,
        zoomControl: true,
        gestureHandling: 'cooperative',
      });

      map.data.addGeoJson(jsonData);

      const clickedFeatureIds = new Set();

      map.data.addListener('click', handleFeatureClick);

      function handleFeatureClick(event) {
        const featureId = event.feature.getProperty('letter');

        if (!clickedFeatureIds.has(featureId) && !infoWindowOpen) {
          clickedFeatureIds.add(featureId);

          const roomsEN = event.feature.getProperty('roomsEN');
          let description = `No Rooms`;

          if (roomsEN !== undefined) {
            let roomsArray = roomsEN.split(',').map(room => room.trim());
            roomsArray.sort((a, b) => a.localeCompare(b));

            description = `<p><br>${roomsArray.join('<br>')}<br></p>`;
          }

          const infoWindow = new window.google.maps.InfoWindow({
            content: description,
            position: event.latLng,
          });

          infoWindow.addListener('closeclick', () => {
            clickedFeatureIds.delete(featureId);
            infoWindowOpen = false;
          });

          infoWindow.open(map);
          infoWindowOpen = true;
        }
      }
      console.log("Map created");
    }

    window.initMap = initMap;

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&callback=initMap&v=weekly&libraries=geometry,places`;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div id="map"></div>
  );
};

export default GoogleMapComponent;
