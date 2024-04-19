

import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Head from './Components/Head';

import CountryList from './Components/CountryList';
import Country from './Components/Country';
import Filterfeature from './Fliterfeature';
import Parentnotes from './Components/Parentnotes';






function App() {
  const [countryList, setCountryList] = useState([]);
  const [filteredCountryList, setFilteredCountryList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch('https://restcountries.com/v3.1/all');
        const json = await res.json();
        setCountryList(json);
        setFilteredCountryList(json);
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    };

    getData();
  }, []);

  return (
    <div className="App">
      
      <BrowserRouter>
      <Head/>
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                
                <Filterfeature
                  countryList={countryList}
                  setFilteredCountryList={setFilteredCountryList}
                />
                <CountryList countryList={filteredCountryList} />
              </React.Fragment>
            }
          />
          
          <Route path="/countries/:name" element={<Country/>} />
          <Route path='/feedback' element={<Parentnotes/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


















