import React, { useState, useEffect } from 'react';
import {
  MenuItem,
  FormControl,
  Select,
  CardContent,
  Card
} from '@material-ui/core';
import InfoBox from './InfoBox'
import Map from './Map'
import Table from './Table'
import './App.css';
import { sortData } from './utils.js'
import LineGraph from "./LineGraph"

function App() {
  //state = how to write a variable in react
  const [countries, setCountries] = useState({});
  const [country, setCountry] = useState(['worldwide']);
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState({});

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
    .then((response => response.json()))
    .then((data) => {
      setCountryInfo(data);
    });
  }, [])

  useEffect(() => {
    //the code inside here will run once when the app components loads and not again, anytime variables in second argument changes then the useEffect piece of code runs again
    const getCountriesData = async () => {
      //async --> send a request, wait for it, do something with the info
      await fetch ('https://disease.sh/v3/covid-19/countries')
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => (
          {
            name: country.country, //United States, United States of America, France
            value: country.countryInfo.iso2, //UK, USA, FR
          }));

          const sortedData = sortData(data);
          setTableData(data);
          setCountries(countries);
      });
    };

    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);

    const url = countryCode === 'worldwide' ? 'https://disease.sh/v3/covid-19/all' : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    
    await fetch(url)
    .then(response => response.json())
    .then(data => {
      setCountry(countryCode);
      setCountryInfo(data);
    })
  };

  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>Lets build a covid19 tracker!!</h1>
          <FormControl className="app_dropdown">
            <Select variant="outlined" onChange={onCountryChange} value={country}>
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {/* Loop through all countries and display the dropdown */}
              {countries.map((country) => (
                  <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="app__stats">
          <InfoBox title="Coronavirus Cases" cases={countryInfo.todayCases} total={countryInfo.cases}/>
          <InfoBox title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered}/>
          <InfoBox title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths}/>
        </div>

        {/* Table */}

        {/* Graph */}


        {/* Map */}
        <Map></Map>
      </div>

        <Card className="app__right">
          <CardContent>
            <h3></h3>
          </CardContent>
        </Card>

    </div>
    
  );
}

export default App;
