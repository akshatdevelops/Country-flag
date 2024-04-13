


import React, { useState } from 'react';

const FilterFeature = ({ countryList, setFilteredCountryList }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    const filteredCountries = countryList.filter((country) =>
      country.name.common.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCountryList(filteredCountries);
  };

  const handleRegionFilter = (e) => {
    const region = e.target.value;
    setSelectedRegion(region);

    if (region === 'Filter By Region') {
      setFilteredCountryList(countryList);
    } else {
      const filteredCountries = countryList.filter((country) => country.region === region);
      setFilteredCountryList(filteredCountries);
    }
  };

  return (
    <div>
      <section className="filter flex flex-col md:flex-row items-center justify-between">
        <form className="form-control mb-2 md:mb-0" autoComplete='off'>
          <input
            type="search"
            name="search"
            value={searchQuery}
            onChange={handleSearch}
            id="search"
            placeholder="🔍Search for country"
            className="bg-white rounded-lg shadow-md p-2 w-full"
          />
        </form>

        <div>
          <select
            name="select"
            id="select"
            className="select bg-white rounded-lg shadow-md p-2"
            value={selectedRegion}
            onChange={handleRegionFilter}
          >
            <option value="Filter By Region">Filter by Region</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Americas">Americas</option>
            <option value="Africa">Africa</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </section>
    </div>
  );
};

export default FilterFeature;
