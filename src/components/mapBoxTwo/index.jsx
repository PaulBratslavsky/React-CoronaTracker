import React from "react";
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

export default function MapBoxTwo({ data, allCountries }) {
  const SingleCountryView = ({ data }) => {
    const deathsPercent = (data.deaths / data.cases) * 100;
    const recoveredPercent = (data.recovered / data.cases) * 100;

    const radius = 1000000;
    return (
      <div className="map-box-two box">
        <MapContainer
          center={[data.countryInfo.lat, data.countryInfo.long]}
          zoom={4}
          scrollWheelZoom={false}
        >
          <TileLayer attribution={attribution} url={MAP_URL} />
          <Circle
            center={[data.countryInfo.lat, data.countryInfo.long]}
            radius={radius}
            pathOptions={{
              color: "#393e46",
              opacity: "0.8",
              fillOpacity: "0.5",
            }}
          />
          <Circle
            center={[data.countryInfo.lat, data.countryInfo.long]}
            radius={(recoveredPercent / 100) * radius}
            pathOptions={{
              color: "#ffd369",
              opacity: "0.8",
              fillOpacity: "0.5",
            }}
          />
          <Circle
            center={[data.countryInfo.lat, data.countryInfo.long]}
            radius={(deathsPercent / 100) * radius}
            pathOptions={{
              color: "#8a0832",
              opacity: "0.8",
              fillOpacity: "0.5",
            }}
          />
        </MapContainer>
      </div>
    );
  };

  const AllCountriesView = () => (
    <div className="map-box-two box">
      <MapContainer center={initialView} zoom={2} scrollWheelZoom={false}>
        <TileLayer attribution={attribution} url={MAP_URL} />
        {allCountries &&
          allCountries.map((country) => {
            const deathsPercent = (country.deaths / country.cases) * 100;
            const recoveredPercent = (country.recovered / country.cases) * 100;

            const radius = 200000;
            return (
              <>
                <Circle
                  center={[country.countryInfo.lat, country.countryInfo.long]}
                  radius={radius}
                  pathOptions={{
                    color: "#393e46",
                    opacity: "0.8",
                    fillOpacity: "0.5",
                  }}
                />
                <Circle
                  center={[country.countryInfo.lat, country.countryInfo.long]}
                  radius={(recoveredPercent / 100) * radius}
                  pathOptions={{
                    color: "#ffd369",
                    opacity: "0.8",
                    fillOpacity: "0.5",
                  }}
                />
                <Circle
                  center={[country.countryInfo.lat, country.countryInfo.long]}
                  radius={(deathsPercent / 100) * radius}
                  pathOptions={{
                    color: "#8a0832",
                    opacity: "0.8",
                    fillOpacity: "0.5",
                  }}
                />
              </>
            );
          })}
      </MapContainer>
    </div>
  );

  if (!data) return <Loader />;

  if (data.country) {
    return <SingleCountryView data={data} />;
  } else {
    return <AllCountriesView data={data} />;
  }
}
