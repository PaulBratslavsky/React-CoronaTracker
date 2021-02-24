import React, { useState } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import './style.css'

const API_KEY = "pk.eyJ1IjoiY29kaW5nYWZ0ZXJ0aGlydHkiLCJhIjoiY2tsaWhucHliMm9yNTJvdGtsdm9ubWppciJ9.a-wIOyjXu0QaCOlaIUgaKQ"
const username = "codingafterthirty"
const styleId = "ckliha0o81jqk17mm0vpxi8d0"
const tilesize = 256

const MAP_URL = `https://api.mapbox.com/styles/v1/${username}/${styleId}/tiles/${tilesize}/{z}/{x}/{y}@2x?access_token=${API_KEY}`
const attribution = '&copy; <a href="https://www.mapbox.com/">MapBox</a> contributors'

export default function MapBox() {
  const [toggle, setToggle] = useState(false)
  const [position, setPosition] = useState([51.505, -0.09])

  const style = {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  }

  return <div className="map-box box" style={ toggle ? style : null } >
    <div>
      <button onClick={() => setToggle(prevState => !prevState)}>{toggle ? 'X' : '-'}</button>

      <MapContainer center={position} zoom={3} scrollWheelZoom={false} >
        <TileLayer
          attribution={attribution}
          url={MAP_URL}
        />
      </MapContainer>
    </div>
  </div>

}
