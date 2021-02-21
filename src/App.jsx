import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import InfoBox from "./components/infoBox";
import Table from "./components/table";
import Graph from "./components/graph";
import Map from "./components/map";
import Loader from "./components/loader";
import Card from "./components/Card";

function App() {
  const [selectedCountry, setSelectedCountry] = useState();

  if (setSelectedCountry === undefined) return <h2>loading</h2>;

  console.log("Country I Need", selectedCountry);

  return (
    <div className="app">
      <Header setSelectedCountry={setSelectedCountry} />
      {selectedCountry !== undefined ? (
        <div className="app__grid">
          <aside className="box">
            <h1>{selectedCountry.country}</h1>
            <img
              class="flag"
              src={selectedCountry.countryInfo.flag}
              alt={`${selectedCountry.country} flag.`}
            />
          </aside>
          <main>
            <Card title="Coronavirus Cases">
              <InfoBox title="Today" content={selectedCountry.todayCases} />
              <InfoBox title="Total" content={selectedCountry.cases} />
            </Card>
            <Card title="Coronavirus Recovered">
              <InfoBox title="Today" content={selectedCountry.todayRecovered} />
              <InfoBox title="Total" content={selectedCountry.recovered} />
            </Card>
            <Card title="Coronavirus Deaths">
              <InfoBox title="Today" content={selectedCountry.todayDeaths} />
              <InfoBox title="Total" content={selectedCountry.deaths} />
            </Card>
            <Table />
            <Graph />
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
