import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Circle } from "react-leaflet";

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

const initialView = [34.80746, -40.4796];

function calcRadiusSize(country, casesType, caseType) {
  return Math.sqrt(country[casesType]) * caseTypeColors[caseType].multiplier;
}

const caseTypeColors = {
  cases: {
    hex: "#cc1034",
    multiplier: 800,
  },
};


export default function MapBoxTwo({ data }) {

  const SingleCountryView = ({data}) => (
    <div className="map-box-two box">
      <MapContainer center={[data.countryInfo.lat, data.countryInfo.long]} zoom={4} scrollWheelZoom={false}>
        <TileLayer attribution={attribution} url={MAP_URL} />
      </MapContainer>
    </div>
  );

  const AllCountriesView = () => (
    <div className="map-box-two box">
      <MapContainer center={initialView} zoom={2} scrollWheelZoom={false}>
        <TileLayer attribution={attribution} url={MAP_URL} />
      </MapContainer>
    </div>
  );

  if (!data) return <Loader />;

  if (data.country) {
    return <SingleCountryView data={data}/>;
  } else {
    return <AllCountriesView data={data}/>;
  }
}
