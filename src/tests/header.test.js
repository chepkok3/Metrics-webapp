import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Header from '../components/header';
import store from '../features/store';

describe('Header component', () => {
  it('should render header component', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});
