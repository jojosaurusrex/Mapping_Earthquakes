// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);
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
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
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
