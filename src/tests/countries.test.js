import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../features/store';
import Countries from '../components/countries';

describe('Testing country component', () => {
  it('Test countries component', () => {
    const data = render(
      <Provider store={store}>
        <Countries />
      </Provider>,
    );
    expect(data).toMatchSnapshot();
  });
});
