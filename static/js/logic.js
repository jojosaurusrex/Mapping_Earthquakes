// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and ZOOM LEVEL.
let map = L.map('mapid').setView([30, 30], 2);
    // L.map() instantiate the object with string 'mapid'
    // mpaid will reference id tag in our <div> element on the index.html
    // setView() method sets the view of the map w/ geographical center, where 
        // where the first coordinate is latitude (40.7) and the second is 
        // longitude (-94.5). We set the zoom level of "4" on a scale 0–18


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
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-preview-night-v2/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    // id: 'mapbox/streets-v11',
    // // to change map's style change the map id
    // tileSize: 512, // didn't say to get rid of these two line, but I'll 
    // zoomOffset: -1, // just comment them out for now
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Start of Module 13.4.1
// Adding a marker to our simple map
// var marker = L.marker([51.5, -0.09]).addTo(map);

// //  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Adding a circle as a different type of marker
// this is a pretty tiny circle, need to zoom super close to the streets radius = 100
// radius = 100000 can be seen when page is refreshed
// L.circle([34.0522, -118.2437], {
//     radius: 300,
//     color: 'black', // stroke = circumfrence line // when both color (for stroke) and fillColor
//     //are specified is when you can have different colors for this marker
//     fillColor: 'yellow'
//  }).addTo(map);

// radius meausred in pixels instead of meters (L.circle())
    //pixel size doesn't change with zooming in or out, probably best to stick 
    //to meters w/L.circle()
// L.circleMarker([34.0522, -118.2437], {
//     radius: 300,
//     color: 'black',
//     fillColor: '#ffffa1' //yellow
// }).addTo(map);



// Starting 13.5.2


// Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "state": "California",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// Grabbing our GeoJSON data.

//using pointToLayer
// L.geoJSON(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//       console.log(feature);
//       return L.marker(latlng)
//       .bindPopup("<h2>" + feature.properties.name + "</h2> <hr> <h4>" + 
//       feature.properties.city + ", " + feature.properties.state + ", " 
//       + feature.properties.country + "</h4>");
//     }

//   }).addTo(map);

//using onEachFeature
//   L.geoJSON(sanFranAirport, {
//       onEachFeature: function(feature, layer) {
//           console.log(layer);
//           layer.bindPopup("<h2> Airport code: " + feature.properties.faa + 
//           "</h2> <hr> <h4> Airport name: " + feature.properties.name + "</h4>");
//       }
//   }).addTo(map);

  // start of 13.5.3
  // Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/jojosaurusrex/Mapping_Earthquakes/main/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data).addTo(map);
});