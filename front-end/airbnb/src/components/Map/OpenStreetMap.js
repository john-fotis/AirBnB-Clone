import React, { Component } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

const MapWrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
`;

class OpenStreetMap extends Component {

  componentDidMount(){
    this.map = L.map('map', {
      center: [38.25,24],
      zoom: 6,
      zoomControl: false
    });

      
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
  }


  render() { 
    return ( 
      <MapWrapper width={this.props.width} height={this.props.height} id='map' />
     );
  }
}
 
export default OpenStreetMap;