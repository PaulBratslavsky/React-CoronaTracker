import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import InfoBox from "./components/infoBox";
import Table from "./components/table";
import Graph from "./components/graph";
import Map from "./components/map";
import Loader from "./components/loader";
import Card from "./components/Card";
import { useFetchData } from './hooks/useFetchData'

const QUERY_BASE = "https://disease.sh/v3/covid-19/";

function App() {
  let query;
  const [selectedCountry, setSelectedCountry] = useState();
   
  if (selectedCountry) {
    query = selectedCountry === 'All' 
    ? QUERY_BASE + selectedCountry
    : QUERY_BASE + 'countries/' + selectedCountry
  }
      
  const { data, error } = useFetchData(query);

  return (
    <div className="app">
      <Header setSelectedCountry={setSelectedCountry} />
      {data ? (
        <div className="app__grid">
          <aside className="box">
              <h1>{data.country || "All Countries"}</h1>
              { data.country && 
                <img
                className="flag"
                src={data.countryInfo.flag}
                alt={`${data.country} flag.`}
              />
              }
            <Table />
            <Graph />
          </aside>
          <main className="main_grid">
            <Card title="Coronavirus Cases">
              <InfoBox title="Today" content={data.todayCases} />
              <InfoBox title="Total" content={data.cases} />
            </Card>
            <Card title="Coronavirus Recovered">
              <InfoBox title="Today" content={data.todayRecovered} />
              <InfoBox title="Total" content={data.recovered} />
            </Card>
            <Card title="Coronavirus Deaths">
              <InfoBox title="Today" content={data.todayDeaths} />
              <InfoBox title="Total" content={data.deaths} />
            </Card>
            <Map />
          </main>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
