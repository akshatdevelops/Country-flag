
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';

const CountryList = ({ countryList }) => {
  const [visibleCountries, setVisibleCountries] = useState(10);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCountries((prevCount) => prevCount + 10); 
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.5 } 
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef]);

  return (
    <div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {!countryList ? (
          <Shimmer />
        ) : (
          countryList.slice(0, visibleCountries).map((country, i) => {
            const { name, population, region, capital, flags } = country;
            return (
              <div key={name.common} className="card bg-white rounded-lg shadow-md overflow-hidden">
                <Link to={`/countries/${name.common}`}>
                  <img src={flags.svg} alt={name.common} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <strong className="text-lg font-bold">{name.common}</strong>
                    <p className="text-sm text-black-600 font-serif">Population: {population}</p>
                    <p className="text-sm text-black-600 font-serif">Region: {region}</p>
                    <p className="text-sm text-black-600 font-serif">Capital: {capital}</p>
                  </div>
                </Link>
              </div>
            );
          })
        )}
        <div ref={containerRef} className="loading-placeholder"></div> 
      </section>
    </div>
  );
};

export default CountryList;
