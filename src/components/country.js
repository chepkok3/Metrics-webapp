import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import { fetchCountries } from '../features/countries/countrySlice';
import styles from '../styles/country.module.css';

function Country() {
  const { countries, loading, error } = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  useEffect(() => {
    setFilteredCountries(
      countries.filter((country) => country.name.toLowerCase().includes(searchTerm.toLowerCase())),
    );
  }, [countries, searchTerm]);

  if (loading) return <h2>Loading...</h2>;
  if (error) {
    return (
      <p>
        Error:
        {error.message}
      </p>
    );
  }

  return (
    <>
      <div className={styles['search-field']}>
        <input
          type="text"
          className={styles['search-entry']}
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search for a country..."
        />
      </div>
      <div className={styles['countries-container']}>
        {filteredCountries.map((country) => (
          <div className={styles['country-content']} key={country.alpha3Code}>
            <Link to={`/countries/${country.alpha3Code}`}>
              <img
                src={country.flag}
                alt={country.name}
                className={styles.flag}
              />
              <BsArrowRightCircle className={styles.icon} />
              <div className={styles['country-info']}>
                <h3 className={styles['country-name']}>{country.name}</h3>
                <p className={styles['country-timezone']}>{country.capital}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Country;
