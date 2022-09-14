import { render } from '@testing-library/react';
import React from 'react';

import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('must exist instance of header component', () => {
    const component = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
  });
});
