import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Country from '../components/country';
import store from '../features/store';

describe('Testing country component', () => {
  it('renders correctly', () => {
    const data = render(
      <Provider store={store}>
        <Country />
      </Provider>,
    );
    expect(data).toMatchSnapshot();
  });
});
