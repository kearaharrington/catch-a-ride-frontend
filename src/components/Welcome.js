import React, { useState, useRef } from 'react'
// import {
//   Box,
//   Button,
//   ButtonGroup,
//   Flex,
//   HStack,
//   IconButton,
//   Input,
//   SkeletonText,
//   Text,
// } from '@chakra-ui/react'
import { GoogleMap, 
        useLoadScript, 
        useJsApiLoader,
        Autocomplete,
        DirectionsRenderer,
        DistanceMatrixService
        } from '@react-google-maps/api';


const { NEXT_PUBLIC_GOOGLE_MAPS_API_KEY } = process.env;

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function MyComponent() {

    const [map, setMap] = useState(/** @type google.maps.Map */ (null))
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')



  const originRef = useRef()
  const destinationRef = useRef()
  
  async function calculateRoute() {
    if (originRef.current.value === '' || destinationRef.current.value === '') {
      return
    }
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
    //   travelMode: google.maps.TravelMode.DRIVING,
    })
    setDirectionsResponse(results)
    setDistance(results.routes[0].legs[0].distance.text)
    setDuration(results.routes[0].legs[0].duration.text)
  }


    function clearRoute() {
    setDirectionsResponse(null)
    setDistance('')
    setDuration('')
    originRef.current.value = ''
    destinationRef.current.value = ''
  }

  function onLoad (autocomplete) {
    console.log('autocomplete: ', autocomplete)

    this.autocomplete = autocomplete
  }

   function onPlaceChanged () {
    if (this.autocomplete !== null) {
      console.log(this.autocomplete.getPlace())
    } else {
      console.log('Autocomplete is not loaded yet!')
    }
  }

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBXJf6sxZQ2XT882KUJYqVh1qfxiyZSGkg" // ,
    // ...otherOptions
  })

  function RenderMap(){
    const onMapLoad = React.useCallback(
        function onMapLoad (mapInstance) {
            return center;
          // do something with map Instance
        }
      )
    return (
        <div className='mapContainer'>
        <div className='controls'>
            <h1> Search Map </h1>
            <input placeholder='Type Origin'></input>
            <input placeholder='Type Destination'></input>
            <button type='submit'>Search</button>
        </div>
        <div className='map'>
          <GoogleMap
            onLoad={onMapLoad}
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            options={{
                streetViewControl: false,
                fullscreenControl: false,
              }}
          >
            { /* Child components, such as markers, info windows, etc. */ }
          {/* <Box flexGrow={1}> */}
                <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                  <input type='text' placeholder='Origin' />
                </Autocomplete>
              {/* </Box> */}
          </GoogleMap>
      
        </div>
        </div>
      )
  }
  RenderMap();
 
}

export default React.memo(MyComponent)
