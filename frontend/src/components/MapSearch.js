import React, { Component } from "react";
import { withLeaflet, MapControl } from "react-leaflet";
import { OpenStreetMapProvider, GeoSearchControl } from "leaflet-geosearch";

import './../MapSearch.css';

class MapSearch extends MapControl {
  constructor(props) {
    super(props);
  }

  createLeafletElement(opts) {
    const searchControl = new GeoSearchControl({
      provider: new OpenStreetMapProvider(),
      style: 'bar',
      position: 'topright',
      showMarker: false,
      showPopup: false,
      autoClose: false,
      retainZoomLevel: false,
      animateZoom: true,
      keepResult: false,
      searchLabel: 'Enter Address',
    });

    return searchControl;
  }

  componentDidMount() {
    const { map } = this.props.leaflet;
    map.addControl(this.leafletElement);
  }
}

export default withLeaflet(MapSearch);
