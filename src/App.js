import React, { Component } from 'react';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import './App.css';

import 'leaflet/dist/leaflet.css';

import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadownUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13,
    }
  }
  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map className="map" center={position} zoom={this.state.zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    );
  }
}