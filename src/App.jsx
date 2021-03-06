import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import InfoBox from "./components/infoBox";
import Table from "./components/table";
import Graph from "./components/graph";
import MapBoxTwo from "./components/mapBoxTwo";
import Loader from "./components/loader";
import SmallImage from "./components/smallImage";
import AsideHeader from "./components/asideHeader";
import { useFetchData } from "./hooks/useFetchData";
import { convertNumber } from "./utils/convertNumber";
import MyCard from "./components/myCard";

const QUERY_BASE = "https://disease.sh/v3/covid-19/";

const TableColumn = (props) => <div {...props} />;

function App() {
  let query;
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [allCountries, setAllCountries] = useState([]);

  if (selectedCountry) {
    query =
      selectedCountry === "All"
        ? QUERY_BASE + selectedCountry
        : QUERY_BASE + "countries/" + selectedCountry;
  }

  const { data } = useFetchData(query);

  return (
    <div className="app">
      <Header
        setSelectedCountry={setSelectedCountry}
        selectedCountry={selectedCountry}
        setAllCountries={setAllCountries}
      />
      {data ? (
        <div className="app__grid">
          <aside className="box aside">
            <AsideHeader data={data} />
            <Graph data={data} />
            {selectedCountry === "All" && (
              <Table
                sourceData={allCountries}
                onClick={(country) => setSelectedCountry(country)}
              >
                <TableColumn source="id" label="#" index />
                <TableColumn source="country" label="Country" />
                <TableColumn source="population" label="Population" number />
                <TableColumn source="cases" label="Cases" number />
                <TableColumn source="deaths" label="Deaths" number />
                <TableColumn source="recovered" label="Recovered" number />
                <TableColumn
                  source="countryInfo"
                  label="Flag"
                  render={(data) => <SmallImage src={data} alt="flag" />}
                />
              </Table>
            )}
          </aside>
          <MyCard title="Coronavirus Cases" className="card1">
            <InfoBox title="Today" content={convertNumber(data.todayCases)} />
            <InfoBox title="Total" content={convertNumber(data.cases)} />
          </MyCard>
          <MyCard title="Coronavirus Recovered" className="card2">
            <InfoBox
              title="Today"
              content={convertNumber(data.todayRecovered)}
            />
            <InfoBox title="Total" content={convertNumber(data.recovered)} />
          </MyCard>
          <MyCard title="Coronavirus Deaths" className="card3">
            <InfoBox title="Today" content={convertNumber(data.todayDeaths)} />
            <InfoBox title="Total" content={convertNumber(data.deaths)} />
          </MyCard>
          <div className="map-container map">
            <MapBoxTwo data={data} allCountries={allCountries} />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
