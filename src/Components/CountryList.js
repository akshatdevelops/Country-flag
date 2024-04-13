
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
                <p className="text-sm text-gray-600 font-serif">Population: {population}</p>
                <p className="text-sm text-gray-600 font-serif">Region: {region}</p>
                <p className="text-sm text-gray-600 font-serif">Capital: {capital}</p>
                <Link
                  to={`/countries/${name.common}`}
                  className="block mt-2 text-blue-500 hover:underline text-sm"
                >
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


















