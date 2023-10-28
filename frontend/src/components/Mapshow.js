import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './Mapsub';


const apiKey = 'AIzaSyAw0nLxD9NsQiJKwFKM38AODUypI8f5FdI';

const mapStyles = {
  width: '100%',
  height: '100%'
};

// const itemsx = [
//   {
//     latLong: {
//       lat: -34.397, lng: 150.644
//     },
//     image_address: 'ddddd',
//   },
//   {
//     latLong: {
//       lat: 34.397, lng: 150.644
//     },
//     image_address: 'ddfeeefefddd',
//   },
// ];


export class MapContainer extends Component {
  // state = {
  //   showingInfoWindow: false,  // Hides or shows the InfoWindow
  //   activeMarker: {},          // Shows the active marker upon click
  //   selectedPlace: {},
  //   items: []          // Shows the InfoWindow to the selected place upon a marker
  // };
  constructor(props) {
    super(props)

    this.state = {
      showingInfoWindow: false,  // Hides or shows the InfoWindow
      activeMarker: {},          // Shows the active marker upon click
      selectedPlace: {},
      items: []          // Shows the InfoWindow to the selected place upon a marker
    };
  }
  componentDidMount() {
    fetch("http://localhost:3333/tableimg")
      .then(res => res.json())
      .then(
        (result) => {
          const sortedItems = result.sort((a, b) => new Date(b.Date) - new Date(a.Date));
          this.setState({
            items: sortedItems
          });
        }
      )
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  // }
  render() {

    const { items } = this.state;

    console.log(items)

    if (items.length === 0) {
      return (
        <div>
          <h1> ไม่พบข้อมูล </h1>
        </div>
      );
    }
    return (
      <>
        <CurrentLocation
          centerAroundCurrentLocation
          google={this.props.google}
          zoom={13}
        >
          {
            this.state.items.map((row, index) => (
              <Marker position={
                {
                  lat: row.latLong.lat, lng: row.latLong.lng
                }
              }
                onClick={this.onMarkerClick} name={<div dangerouslySetInnerHTML={{ __html: row.image_address }} />} />

            ))
          }
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h6>{this.state.selectedPlace.name}</h6>
            </div>
          </InfoWindow>
        </CurrentLocation>
      </>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: apiKey
})(MapContainer);