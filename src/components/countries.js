import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCountries } from '../features/countries/countrySlice';
import styles from '../styles/countries.module.css';

const Countries = () => {
  const { countries, loading, error } = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  const { alpha3Code } = useParams();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const countrySelected = countries.find(
    (country) => country.alpha3Code === alpha3Code,
  );

  if (loading) return <p>Loading...</p>;
  if (error) {
    return (
      <p>
        Error:
        {error.message}
      </p>
    );
  }
  if (!countrySelected) return <p>Country not found</p>;

  return (
    <div>
      <div className={styles['country-selected-details']}>
        <div className={styles.title__name}>
          <img
            src={countrySelected.flag}
            alt={countrySelected.name}
            className={styles['country-flag']}
          />
          <h1>{countrySelected.name}</h1>
        </div>
      </div>
      <div className={styles['country-info']}>
        <h2 className={styles['country-details']}>Country Statistics</h2>
      </div>
      <ul className={styles.content}>
        <li>
          <strong>Timezone:</strong>
          {' '}
          {countrySelected.timezones}
        </li>
        <li>
          <strong>Capital:</strong>
          {' '}
          {countrySelected.capital}
        </li>
        <li>
          <strong>Population:</strong>
          {' '}
          {countrySelected.population
            && countrySelected.population.toLocaleString()}
        </li>
        <li>
          <strong>Area:</strong>
          {' '}
          {countrySelected.area && countrySelected.area.toLocaleString()}
          sq. km.
        </li>
        <li>
          <strong>Languages:</strong>
          {' '}
          {countrySelected.languages
            .map((language) => language.name)
            .join(', ')}
        </li>
        <li>
          <strong>Currencies:</strong>
          {' '}
          {countrySelected.currencies
            .map((currency) => currency.name)
            .join(', ')}
        </li>
        <li>
          <strong>Regional Blocks:</strong>
          {' '}
          {countrySelected.regionalBlocs.map((block) => block.name).join(', ')}
        </li>
        <li>
          <strong>Calling Codes:</strong>
          {' '}
          {countrySelected.callingCodes.join(', ')}
        </li>
        <li>
          <strong>Native Name:</strong>
          {' '}
          {countrySelected.nativeName}
        </li>
      </ul>
    </div>
  );
};

export default Countries;
