import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MyMap.css';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

class MyMap extends Component {
  render() {
    const center = [51.505, -0.09];
    const zoom = 13;
    const {markers} = this.props;
    const map = (
      <Map center={center} zoom={zoom}>
        {/* <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        /> */}
        <TileLayer
          url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
        />
        {/* <Marker position={position}>
          <Popup>
            <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
          </Popup>
        </Marker> */}
        {markers.map((position, idx) =>
          <Marker key={`marker-${idx}`} position={position}>
            <Popup>
              <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
            </Popup>
          </Marker>
        )}
      </Map>
    );

    return (
      map
    );
  }
}

MyMap.propTypes = {
  markers: PropTypes.array.isRequired
};

export default MyMap;
