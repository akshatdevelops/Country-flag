
import React from 'react';
import { Link } from 'react-router-dom';

const CountryList = ({ countryList }) => {
  return (
    <div>
      <section className='grid'>
        {countryList.map((country, i) => {
          const { name, population, region, capital, flags } = country;
          return (
            <div key={name.common} className="card">
              <img src={flags.svg} alt={name.common} />
              <div className="card-text">
                <h4>Name: {name.common}</h4>
                <h5>Population: {population}</h5>
                <h5>Region: {region}</h5>
                <h5>Capital: {capital}</h5>
                <Link to={`/countries/${name.common}`} style={{ color: 'white' }}>
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
