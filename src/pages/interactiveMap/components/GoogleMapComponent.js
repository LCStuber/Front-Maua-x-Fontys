import React, {useEffect, useState} from 'react';
import coordinates from './coordinates.json';
import './GoogleMapComponent.css';
import { Loader } from "@googlemaps/js-api-loader"
import SelectBlockButton from "./SelectBlockButton";
import ActivitiesMonitor from "./ActivitiesMonitor";

const GoogleMapComponent = ({textLanguage}) => {

  let currentInfoWindow = null;
  let clickedFeatureIds = null;

  let map;

  const [selectedLetter, setSelectedLetter] = useState([]);
  const receiveSelectedLetter = (letter) => {
    setSelectedLetter(...[letter])
  };

  useEffect(() => { // initialize map
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

  function getFeatureDataByLetter(letter) {
    return coordinates.features.find((feature) => feature.properties.letter === letter);
  }
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
  }
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
  function calculatePolygonCenter(feature){
    const coordinates = feature.geometry.coordinates[0];

    let totalLat = 0;
    let totalLng = 0;

    for (let i = 0; i < coordinates.length; i++) {
      totalLat += coordinates[i][1];
      totalLng += coordinates[i][0];
    }

    const centerX = totalLng / coordinates.length;
    const centerY = totalLat / coordinates.length;

    return { lat: centerY, lng: centerX };
  }
  function emulateClick(letter){
    if (map) {
      let feature = getFeatureDataByLetter(letter);

      if (feature) {
        const geometry = feature.geometry;

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
            map.panTo(popUpPoint);
            map.setZoom(18);
          }
        }
      }
    }
  }
  return (
      <>
        <SelectBlockButton emulateClick = {emulateClick} textLanguage={textLanguage} receiveSelectedLetter={receiveSelectedLetter}/>
        <div id='map'></div>
        <ActivitiesMonitor textLanguage={textLanguage} selectedLetter={selectedLetter}/>
      </>
  )
};

export default GoogleMapComponent;
