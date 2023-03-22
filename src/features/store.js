import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countries/countrySlice';

const Store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});
export default Store;
