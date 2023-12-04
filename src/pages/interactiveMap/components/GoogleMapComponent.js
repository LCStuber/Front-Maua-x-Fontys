import React, { useEffect, useRef } from 'react';
import coordinates from './coordinates.json';
import './GoogleMapComponent.css';

import { Loader } from "@googlemaps/js-api-loader"

const GoogleMapComponent = () => {
  // // const mapRef = useRef(null);


  // // let map;

  // // async function initMap() {
  // //   // const { Map } = await window.google.maps.importLibrary("maps");

  // //   map = await new window.google.maps.Map(document.getElementById("map"), {
  // //     center: { lat: -34.397, lng: 150.644 },
  // //     zoom: 8,
  // //   });
  // // }

  // // initMap();

  // // var script = document.createElement('script');
  // // script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&callback=initMap`;
  // // script.async = true;

  // // // Attach your callback function to the `window` object
  // // window.initMap = initMap
  // // document.head.appendChild(script);

  // var map;

  // function initMap() {
  //   // var c = new window.google.maps.LatLng(54.8867537, -1.557352);
  //   // var mapOptions = {
  //   //   zoom: 7,
  //   //   center: c
  //   // };
  //   // map = new window.google.maps.Map(document.getElementById('map'), mapOptions);

  //   map = new window.google.maps.Map(document.getElementById('map'));
  // }

  // function loadScript() {
  //   var script = document.createElement('script');
  //   // script.type = 'text/javascript';
  //   script.src = 'https://maps.googleapis.com/maps/api/js?v=3' +
  //     `&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&callback=initMap`;
  //   // script.defer = true;
  //   document.body.appendChild(script);
  // }

  // window.onload = loadScript;

  // // initialize();




  // useEffect(() => {
  //   initMap();
  //   // initMap();

  // //   let map;
  // //   // let currentInfoWindow = null;

  // //   function initMap() {
  // //     map = new window.google.maps.Map(document.getElementById('map'));
  // //     console.log("checkpoint 1");
  // //     map.data.addGeoJson(jsonData);

  // //     const clickedFeatureIds = new Set();

  // //   //   // map.data.addListener('click', handleFeatureClick);
  // //   //   // function handleFeatureClick(event) {
  // //   //   //   const featureId = event.feature.getProperty('letter');
  // //   //   //   const roomsEN = event.feature.getProperty('roomsEN');
  // //   //   //   let description = `<p>No Rooms</p>`;

  // //   //   //   if (roomsEN !== undefined) {
  // //   //   //     let roomsArray = roomsEN.split(',').map(room => room.trim());
  // //   //   //     roomsArray.sort((a, b) => a.localeCompare(b));
  // //   //   //     description = `<p><br>${roomsArray.join('<br>')}<br></p>`;
  // //   //   //   }

  // //   //   //   if (clickedFeatureIds.has(featureId)) {
  // //   //   //     return;
  // //   //   //   }

  // //   //   //   if (currentInfoWindow) {
  // //   //   //     currentInfoWindow.close();
  // //   //   //   }

  // //   //   //   const infoWindow = new window.google.maps.InfoWindow({
  // //   //   //     content: description,
  // //   //   //     position: event.latLng,
  // //   //   //   });

  // //   //   //   infoWindow.addListener('closeclick', () => {
  // //   //   //     clickedFeatureIds.delete(featureId);
  // //   //   //     currentInfoWindow = null;
  // //   //   //   });

  // //   //   //   infoWindow.open(map);
  // //   //   //   currentInfoWindow = infoWindow;
  // //   //   //   clickedFeatureIds.add(featureId);
  // //   //   // }
  // //   //   // console.log('Map created');
  // //   //   // mapRef.current = map;

  // //   // }
  // //   // window.initMap = initMap;

  // //   const script = document.createElement('script');
  // // script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&callback=initMap`;
  // //   script.defer = true;

  // //   document.head.appendChild(script);
  // //   return () => {
  // //     document.head.removeChild(script);
  // //   };



  // }, []);

  let currentInfoWindow = null;
  let clickedFeatureIds = null;
  let map;

  const getFeatureDataByLetter = (letter) => {
    return coordinates.features.find((feature) => feature.properties.letter === letter);
  };

  function presentBlockPopup(featureId, roomsEN, position) {
    let description = `<p>No Rooms</p>`;

    if (roomsEN !== undefined) {
      let roomsArray = roomsEN.split(',').map(room => room.trim());
      roomsArray.sort((a, b) => a.localeCompare(b));
      description = `<p><br>${roomsArray.join('<br>')}<br></p>`;
    }

    if (clickedFeatureIds == featureId) {
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
    const roomsEN = event.feature.getProperty('roomsEN');

    presentBlockPopup(featureId, roomsEN, event.latLng)
  }

  const calculatePolygonCenter = (coordinates) => {
    let minX, maxX, minY, maxY;
    // Initialize min and max values with the first coordinate
    [minX, maxX] = [maxX] = coordinates[0];
    [minY, maxY] = [maxY] = coordinates[0];

    // Loop through all coordinates to find the min and max values of x and y
    for (let i = 1; i < coordinates.length; i++) {
      const [x, y] = coordinates[i].map(parseFloat);
      minX = Math.min(minX, x);
      maxX = Math.max(maxX, x);
      minY = Math.min(minY, y);
      maxY = Math.max(maxY, y);
    }

    // Calculate the center point
    const centerX = (minX + maxX) / 2;
    const centerY = (minY + maxY) / 2;

    return { lat: centerY, lng: centerX }; // Note the lat/lng order
  };

  const emulateClickInRegionA = () => {
    if (map) {
      let feature = getFeatureDataByLetter('A');

      console.log(feature);

      if (feature) {
        const geometry = feature.geometry; // Get the geometry of the feature

        if (geometry.type === 'Polygon' || geometry.type === 'MultiPolygon') {
          const bounds = new window.google.maps.LatLngBounds();
          
          let center = calculatePolygonCenter(geometry.coordinates);
          console.log("OOO")
          presentBlockPopup(feature.properties.letter, feature.properties.roomsEN, center);

          // geometry.coordinates.forEach((path) => {
          //   path.forEach((latLng) => bounds.extend(latLng));
          // });

          // const center = bounds.getCenter(); // Get the center of the feature

          // const clickEvent = new window.MouseEvent('click', {
          //   bubbles: true,
          //   cancelable: true,
          //   clientX: center.lng(),
          //   clientY: center.lat(),
          // });

          // // Dispatch a click event at the center of the feature
          // document.getElementById('map').dispatchEvent(clickEvent);
        }
      }
    }
  };

  useEffect(() => {
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

  return (
    <>
      <button onClick={emulateClickInRegionA}>Emulate Click in Region A</button>
      <div id='map'> </div>
    </>
    
  )

};


export default GoogleMapComponent;
