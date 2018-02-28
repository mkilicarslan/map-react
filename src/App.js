import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    // Info required to create a map
    zoom: 12,
    center: {lat: 40.7347062, lng: -73.9895759},
    // Create locations manually instead of a database.
    // (Copied from Udacity Google Maps API course)
    locations: [
      {title: 'Park Ave Penthouse', location: {lat: 40.7713024, lng: -73.9632393}},
      {title: 'Chelsea Loft', location: {lat: 40.7444883, lng: -73.9949465}},
      {title: 'Union Square Open Floor Plan', location: {lat: 40.7347062, lng: -73.9895759}},
      {title: 'East Village Hip Studio', location: {lat: 40.7281777, lng: -73.984377}},
      {title: 'TriBeCa Artsy Bachelor Pad', location: {lat: 40.7195264, lng: -74.0089934}},
      {title: 'Chinatown Homey Space', location: {lat: 40.7180628, lng: -73.9961237}}
    ],
  }
  componentDidMount() {
    const { google } = window
    const { zoom, center, locations } = this.state

    // Create a new map and
    let map = new google.maps.Map(document.getElementById('map'), {
      center,
      zoom,
    });

    // Crate a marker for each item of locations array
    for (let item of locations) {
      let position = item.location
      let title = item.title
      // Marker constructor
      let marker = new google.maps.Marker({
        position,
        title,
        map
      })
    }
  }

  render() {
    return (
      <div id='app'>
        <div id='map' />
      </div>
    );
  }
}

export default App;
