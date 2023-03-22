import reducer, { fetchCountries } from '../features/countries/countrySlice';

describe(' tests countries reducer', () => {
  test('return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      loading: false,
      error: null,
      countries: [],
    });
  });

  test('should handle fetch countries pending state', () => {
    const previousState = {
      loading: false,
      error: null,
      countries: [],
    };
    const action = { type: fetchCountries.pending.toString() };
    expect(reducer(previousState, action)).toEqual({
      loading: true,
      error: null,
      countries: [],
    });
  });

  test('should handle fetch countries fulfilled state', () => {
    const previousState = {
      loading: true,
      error: null,
      countries: [],
    };
    const action = {
      type: fetchCountries.fulfilled.toString(),
      payload: [{ name: 'Germany' }, { name: 'Korea' }],
    };
    expect(reducer(previousState, action)).toEqual({
      loading: false,
      error: null,
      countries: [{ name: 'Germany' }, { name: 'Korea' }],
    });
  });

  test('should handle fetch countries rejected state', () => {
    const previousState = {
      loading: true,
      error: null,
      countries: [],
    };
    const action = {
      type: fetchCountries.rejected.toString(),
      error: 'An error occurred!',
    };
    expect(reducer(previousState, action)).toEqual({
      loading: false,
      error: 'An error occurred!',
      countries: [],
    });
  });
});
