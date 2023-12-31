import React from 'react';
import ReactDOM from 'react-dom';

const mapStyles = {
    map: {
        position: 'absolute',
        width: '85%',
        height: '80%'
    }
};


// CurrentLocation.defaultProps = {
//     zoom: 13,
//     initialCenter: {
//         lat: 13.7812438,
//         lng: 100.4853644
//     },
//     centerAroundCurrentLocation: false,
//     visible: true
// };
export class CurrentLocation extends React.Component {


    constructor(props) {
        super(props);

        const { lat, lng } = this.props.initialCenter;

        this.state = {
            currentLocation: {
                lat: lat,
                lng: lng
            }
        };
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google) {
            this.loadMap();
        }
        if (prevState.currentLocation !== this.state.currentLocation) {
            this.recenterMap();
        }
    }

    recenterMap() {
        const map = this.map;
        const current = this.state.currentLocation;
        const google = this.props.google;
        const maps = google.maps;

        if (map) {
            let center = new maps.LatLng(current.lat, current.lng);
            map.panTo(center);
        }
    }
    componentDidMount() {
        if (this.props.centerAroundCurrentLocation) {
            if (navigator && navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(pos => {
                    const coords = pos.coords;
                    this.setState({
                        currentLocation: {
                            lat: coords.latitude,
                            lng: coords.longitude
                        }
                    });
                });
            }
        }
        this.loadMap();
    }

    loadMap() {
        if (this.props && this.props.google) {
            // checks if google is available
            const { google } = this.props;
            const maps = google.maps;

            const mapRef = this.refs.map;

            // reference to the actual DOM element
            const node = ReactDOM.findDOMNode(mapRef);

            let { zoom } = this.props;
            const { lat, lng } = this.state.currentLocation;
            const center = new maps.LatLng(lat, lng);

            const mapConfig = Object.assign(
                {},
                {
                    center: center,
                    zoom: zoom,
                    // streetView: true,
                    streetViewControl: false,
                    scaleControl: true,
                    fullscreenControl: false,
                    styles: [{
                        featureType: "poi.business",
                        elementType: "labels",
                        stylers: [{
                            visibility: "off"
                        }]
                    }],
                    gestureHandling: "greedy",
                    disableDoubleClickZoom: true,
                    // minZoom: 11,
                    // maxZoom: 18,
                    mapTypeControl: true,
                    mapTypeId: maps.MapTypeId.SATELLITE,
                    mapTypeControlOptions: {
                        style: maps.MapTypeControlStyle.HORIZONTAL_BAR,
                        position: maps.ControlPosition.BOTTOM_CENTER,
                        mapTypeIds: [
                            maps.MapTypeId.ROADMAP,
                            maps.MapTypeId.SATELLITE,
                            maps.MapTypeId.HYBRID
                        ]
                    },
                    zoomControl: true,
                    clickableIcons: false
                }
            );

            // maps.Map() is constructor that instantiates the map
            this.map = new maps.Map(node, mapConfig);
        }
    }

    renderChildren() {
        const { children } = this.props;

        if (!children) return;

        return React.Children.map(children, c => {
            if (!c) return;

            return React.cloneElement(c, {
                map: this.map,
                google: this.props.google,
                mapCenter: this.state.currentLocation,
                // mapTypeId: this.state.MapTypeId.HYBRID 
            });
        });
    }

    render() {
        const style = Object.assign({}, mapStyles.map);

        return (
            <div>
                <div style={style} ref="map">
                    Loading map...
                </div>
                {this.renderChildren()}
            </div>
        );
    }
}
CurrentLocation.defaultProps = {
    zoom: 13,
    initialCenter: {
        lat: 13.7812438,
        lng: 100.4853644
    },
    centerAroundCurrentLocation: false,
    visible: true
};

export default CurrentLocation;