import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import React from 'react'

const containerStyle = {
  width: '100%',
  height: '400px',
}

const center = {
  lat: 22.442537512468256,
  lng: 114.16693734217193,
}

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU',
  })

  const [map, setMap] = React.useState(null)

  console.log(map)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center)

    map.fitBounds(bounds)
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
    console.log(map)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={16}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  )
}

export default React.memo(Map)
