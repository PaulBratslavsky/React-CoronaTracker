import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import InfoBox from "./components/infoBox";
import Table from "./components/table";
import Graph from "./components/graph";
import Map from "./components/map";
import Loader from "./components/loader";
import Card from "./components/card";
import AsideHeader from "./components/asideHeader"
import { useFetchData } from './hooks/useFetchData'
import { convertNumber } from './utils/convertNumber'

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
  console.log(data)
  return (
    <div className="app">
      <Header setSelectedCountry={setSelectedCountry} />
      {data ? (
        <div className="app__grid">
          <aside className="box">
            <AsideHeader data={data} />  
            <Table />
            <Graph />
          </aside>
          <main className="main_grid">
            <Card title="Coronavirus Cases">
              <InfoBox title="Today" content={convertNumber(data.todayCases)} />
              <InfoBox title="Total" content={convertNumber(data.cases)} />
            </Card>
            <Card title="Coronavirus Recovered">
              <InfoBox title="Today" content={convertNumber(data.todayRecovered)} />
              <InfoBox title="Total" content={convertNumber(data.recovered)} />
            </Card>
            <Card title="Coronavirus Deaths">
              <InfoBox title="Today" content={convertNumber(data.todayDeaths)} />
              <InfoBox title="Total" content={convertNumber(data.deaths)} />
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
