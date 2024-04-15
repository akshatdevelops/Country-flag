


import React, { useState } from 'react';
import { Menu } from '@headlessui/react';

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
          <Menu as="div" className="relative">
            <Menu.Button className="select bg-white rounded-lg shadow-md p-2">
              {selectedRegion || "Filter By Region"}⬇️
            </Menu.Button>
            <Menu.Items className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-blue-500 text-white' : 'text-gray-900'
                    } group flex rounded-lg items-center w-full px-2 py-2 text-sm`}
                    onClick={() => handleRegionFilter({ target: { value: 'Filter By Region' } })}
                  >
                    Filter By Region
                  </button>
                  
                
                )}
              </Menu.Item>
              
              
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-blue-500 text-white' : 'text-gray-900'
                    } group flex rounded-lg items-center w-full px-2 py-2 text-sm`}
                    onClick={() => handleRegionFilter({ target: { value: 'Asia' } })}
                  >
                    Asia
                  </button>
                  
                
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-blue-500 text-white' : 'text-gray-900'
                    } group flex rounded-lg items-center w-full px-2 py-2 text-sm`}
                    onClick={() => handleRegionFilter({ target: { value: 'Europe' } })}
                  >
                    Europe
                  </button>
                  
                
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-blue-500 text-white' : 'text-gray-900'
                    } group flex rounded-lg items-center w-full px-2 py-2 text-sm`}
                    onClick={() => handleRegionFilter({ target: { value: 'Africa' } })}
                  >
                    Africa
                  </button>
                  
                
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-blue-500 text-white' : 'text-gray-900'
                    } group flex rounded-lg items-center w-full px-2 py-2 text-sm`}
                    onClick={() => handleRegionFilter({ target: { value: 'America' } })}
                  >
                    America
                  </button>
                  
                
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-blue-500 text-white' : 'text-gray-900'
                    } group flex rounded-lg items-center w-full px-2 py-2 text-sm`}
                    onClick={() => handleRegionFilter({ target: { value: 'Oceania' } })}
                  >
                    Oceania
                  </button>
                  
                
                )}
              </Menu.Item>
        
            </Menu.Items>
          </Menu>
        </div>
      </section>
    </div>
  );
};

export default FilterFeature;
