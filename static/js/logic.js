// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and ZOOM LEVEL.
// let map = L.map('mapid').setView([30, 30], 2);
    // L.map() instantiate the object with string 'mapid'
    // mpaid will reference id tag in our <div> element on the index.html
    // setView() method sets the view of the map w/ geographical center, where 
        // where the first coordinate is latitude (40.7) and the second is 
        // longitude (-94.5). We set the zoom level of "4" on a scale 0–18

//alternate way to setView as above
// let map = L.map("mapid", {
//     center: [40.7, -94.5],
//     zoom: 4
//   });

// ^ this is the same thing as below
// Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });
// This method is useful when we need to add multiple tile layers, or a 
    //background image of our map(s), which we will do later in this module

// We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}'
//^basic google map view
//dark view --> dark-v10
//google maps --> streets-v11
//night preview navigation --> navigation-preview-night-v2
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);


// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    Street: streets,
    Dark: dark
  };

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [30, 30],
    zoom: 2,
    layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

  // start of 13.5.3
  // Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/jojosaurusrex/Mapping_Earthquakes/main/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data, {
    pointToLayer: function(feature, latlng) {
        console.log(feature);
        return L.marker(latlng)
        .bindPopup("<h2> Airport Code: " + feature.properties.faa + 
        "</h2> <hr> <h4> Airport name: " + feature.properties.name + "</h4>");
      }
  }).addTo(map);
});


