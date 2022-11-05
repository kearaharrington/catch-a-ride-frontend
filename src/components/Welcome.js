import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // for google map places autocomplete
      origin: '',
      destination: '',

      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
  
      mapCenter: {
        lat: 49.2827291,
        lng: -123.1207375
      }
    };
  }

  handleChange = origin => {
    this.setState({ origin });
  };

  handleChanged = destination => {
    this.setState({ destination });
  };
 
  handleSelect = origin => {
    this.setState({ origin });
    geocodeByAddress(origin)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log('Success', latLng);

        // update center state
        this.setState({ mapCenter: latLng });
      })
      .catch(error => console.error('Error', error));
  };
   
  handleSelected = destination => {
    this.setState({ destination });
    geocodeByAddress(destination)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log('Success', latLng);

        // update center state
        this.setState({ mapCenter: latLng });
      })
      .catch(error => console.error('Error', error));
  };
 
  render() {
    return (
        <div className='google'>

      <div id='googleMaps' className='googleMaps'>
        <PlacesAutocomplete
          value={this.state.origin}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: 'Origin',
                  className: 'location-search-input1',
                  id: "location"
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
        <PlacesAutocomplete
          value={this.state.destination}
          onChange={this.handleChanged}
          onSelect={this.handleSelected}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: 'Destination',
                  className: 'location-search-input',
                })}
              />
              <div className="autocomplete-dropdown-container2">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                  const style = suggestion.active
                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>


        <Map 
          google={this.props.google}
          initialCenter={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng
          }}
          center={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng
          }}
        >
          <Marker 
            position={{
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng
            }} />
        </Map>
      </div>
        </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyC9k9n174iTsmUe5bdFBWmRxwHvAJzFdUQ')
})(MapContainer)