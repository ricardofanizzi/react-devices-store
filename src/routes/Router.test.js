import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../states/store';
import Router from './Router';

describe('Router', () => {
  it('must exist', () => {
    const component = render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={store}>
          <Router />
        </Provider>
      </MemoryRouter>
    );
  });
});
