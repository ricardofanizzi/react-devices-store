import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { store } from './states/store';

describe('App', () => {
  it('must exist instance of header component', () => {
    const component = render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
  });
});
