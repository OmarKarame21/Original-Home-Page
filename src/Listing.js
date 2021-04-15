import React, { useState, useEffect } from "react";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
//var distance = require("google-distance-matrix");

export default function Listing1({ data, index, placePin, setValues }) {
  //useEffect(() => {
  //placePin({ lat: 0, lng: 0 });
  //}, []);

  //distance.key("AIzaSyC44LmEfw4hs78DkfdGjAnAXbL6PO8-AUQ");
  //var origins = ["San Francisco CA"];
  //var destinations = ["New York NY", "41.8337329,-87.7321554"];

  //distance.matrix(origins, destinations, function (err, distances) {
  // if (!err) console.log(distances);
  //});

  useEffect(() => {
    geocodeByAddress(data.location)
      .then((results) => getLatLng(results[0]))
      .then(
        ({ lat, lng }) => placePin({ lat: lat, lng: lng })
        //console.log("Successfully got latitude and longitude", { lat, lng })
      );
  }, []);

  //console.log(data);
  //funct1();
  //console.log(data.location);
  //async function funct1() {
  //const results = await getGeocode(data.location);
  //const { lat, lng } = await getLatLng(results[0]);
  //console.log({ lat, lng });
  //}

  return (
    <div>
      <p>Title: {data.title}</p>
      <p>Description: {data.description} </p>
      <p>Location: {data.location} </p>
      <p>Price: {data.price} </p>
      <br></br>
    </div>
  );
}
