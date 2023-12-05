import React, { useEffect} from 'react';
import coordinates from './coordinates.json';
import './GoogleMapComponent.css';
import { Loader } from "@googlemaps/js-api-loader"
import SelectBlockButton from "./SelectBlockButton";

const GoogleMapComponent = ({textLanguage}) => {

  let currentInfoWindow = null;
  let clickedFeatureIds = null;

  let map;
  useEffect(() => { // initialize mapp
    const loader = new Loader({
      apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      version: 'weekly',
    });

    loader.load().then(async () => {
      const { Map } = await window.google.maps.importLibrary('maps');

      map = new Map(document.getElementById('map'), {
        center: { lat: -23.648163, lng: -46.573078 },
        zoom: 16.8,
      });

      map.data.addGeoJson(coordinates);
      map.data.addListener('click', handleFeatureClick);
    });
  }, []);

  const getFeatureDataByLetter = (letter) => {
    return coordinates.features.find((feature) => feature.properties.letter === letter);
  };

  function presentBlockPopup(featureId, rooms, position) {
    let description = `<p>No Rooms</p>`;

    if (rooms !== undefined) {
      let roomsArray = rooms.split(',').map(room => room.trim());
      roomsArray.sort((a, b) => a.localeCompare(b));
      description = `<p><br>${roomsArray.join('<br>')}<br></p>`;
    }

    if (clickedFeatureIds === featureId) {
      return;
    }

    clickedFeatureIds = featureId;

    if (currentInfoWindow) {
      currentInfoWindow.close();
    }

    const infoWindow = new window.google.maps.InfoWindow({
      content: description,
      position: position,
    });

    infoWindow.addListener('closeclick', () => {
      clickedFeatureIds = null;
      currentInfoWindow = null;
    });

    infoWindow.open(map);
    currentInfoWindow = infoWindow;
  } //ok

  function handleFeatureClick(event) {

    const featureId = event.feature.getProperty('letter');

    let rooms;
    if (textLanguage === "EN"){
      rooms = event.feature.getProperty('roomsEN');
    }
    else{
      rooms = event.feature.getProperty('roomsPT');
    }
    presentBlockPopup(featureId, rooms, event.latLng)
  }

  const calculatePolygonCenter = (feature) => {
    const coordinates = feature.geometry.coordinates[0]; // Assuming the first array is the exterior ring

    let totalLat = 0;
    let totalLng = 0;

    for (let i = 0; i < coordinates.length; i++) {
      totalLat += coordinates[i][1]; // Assuming coordinates[i] is [lng, lat]
      totalLng += coordinates[i][0]; // Assuming coordinates[i] is [lng, lat]
    }

    const centerX = totalLng / coordinates.length;
    const centerY = totalLat / coordinates.length;

    return { lat: centerY, lng: centerX };
  };

  const emulateClick = (letter) => {
    if (map) {
      let feature = getFeatureDataByLetter(letter);

      if (feature) {
        const geometry = feature.geometry; // Get the geometry of the feature

        if (geometry.type === 'Polygon' || geometry.type === 'MultiPolygon') {

          let popUpPoint = calculatePolygonCenter(feature);

          if (textLanguage === "EN")
          {
            presentBlockPopup(feature.properties.letter, feature.properties.roomsEN, popUpPoint);

          }
          else{
            presentBlockPopup(feature.properties.letter, feature.properties.roomsPT, popUpPoint);
          }
          if (map && popUpPoint) {
            map.panTo(popUpPoint); // Pan the map to the center of the popup
            map.setZoom(18); // Set the zoom level to zoom in on the location
          }
        }
      }
    }
  };

  return (
    <>
      <SelectBlockButton emulateClick = {emulateClick} textLanguage={textLanguage}/>
      <div id='map'> </div>
    </>
  )
};

export default GoogleMapComponent;
