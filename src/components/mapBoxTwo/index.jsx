import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "./style.css";
import Loader from "../loader";

const API_KEY =
  "pk.eyJ1IjoiY29kaW5nYWZ0ZXJ0aGlydHkiLCJhIjoiY2tsaWhucHliMm9yNTJvdGtsdm9ubWppciJ9.a-wIOyjXu0QaCOlaIUgaKQ";
const username = "codingafterthirty";
const styleId = "ckliha0o81jqk17mm0vpxi8d0";
const tilesize = 256;

const MAP_URL = `https://api.mapbox.com/styles/v1/${username}/${styleId}/tiles/${tilesize}/{z}/{x}/{y}@2x?access_token=${API_KEY}`;
const attribution =
  '&copy; <a href="https://www.mapbox.com/">MapBox</a> contributors';

export default function MapBoxTwo({ data }) {
  const [center, setCenter] = useState(null);

  useEffect(() => {
    if (data.country === undefined) {
      setCenter({ lat: 34.80746, lng: -40.4796 });
    }

    if (data.country !== undefined) {
      const { countryInfo } = data;
      const newObject = Object.assign(
        {},
        { lat: countryInfo.lat, lng: countryInfo.long }
      );
      setCenter(newObject);
    }
  }, [data]);

  if (!center) return <Loader />;

  console.log(data.country, "show me", center);

  return (
    <div className="map-box-two box">
      {data.country ? <h1>{data.country}</h1>  : <h1>ALL</h1>}
      <MapContainer
        center={center}
        zoom={data.country ? 5 : 2}
        scrollWheelZoom={false}
      >
        <TileLayer attribution={attribution} url={MAP_URL} />
      </MapContainer>
    </div>
  );
}
