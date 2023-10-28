import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import MapSearch from "./MapSearch";

const MapExample = props => {
  return (
    <Map center={{ lat: 43.615, lng: -116.2023 }} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <MapSearch />
    </Map>
  );
};

export default MapExample;
