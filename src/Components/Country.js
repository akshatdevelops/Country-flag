
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Country = () => {
  const [country, setCountry] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    const getCountryDetail = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const json = await res.json();
        if (json && json.length > 0) {
          setCountry(json[0]);
        } else {
          console.error('Country data not found');
          setCountry(null);
        }
      } catch (error) {
        console.error('Error fetching country details:', error);
        setCountry(null);
      }
    };

    getCountryDetail();
  }, [name]);

  return (
    <div>
      <Link to="/" className="block mb-4 text-blue-500 hover:underline">
        Back
      </Link>
      {country ? (
        <div>
          <h2 className="text-2xl font-semibold">{country.name.common}</h2>
          <p>Capital: {country.capital}</p>
          <p>Population: {country.population}</p>
          <p>Region: {country.region}</p>
        </div>
      ) : (
        <p>Loading country details...</p>
      )}
    </div>
  );
};

export default Country;

















