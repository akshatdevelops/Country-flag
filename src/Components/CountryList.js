
import React from 'react';
import { Link } from 'react-router-dom';

const CountryList = ({ countryList }) => {
  return (
    <div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {countryList.map((country, i) => {
          const { name, population, region, capital, flags } = country;
          return (
            <div key={name.common} className="card bg-white rounded-lg shadow-md overflow-hidden">
              <img src={flags.svg} alt={name.common} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-semibold">{name.common}</h4>
                <h5>Population: {population}</h5>
                <h5>Region: {region}</h5>
                <h5>Capital: {capital}</h5>
                <Link to={`/countries/${name.common}`} className="block mt-2 text-blue-500 hover:underline">
                  Learn more
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default CountryList;


















