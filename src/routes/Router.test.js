import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Router from './Router';

describe('Router', () => {
  it('must exist', () => {
    const component = render(
      <MemoryRouter initialEntries={['/']}>
        <Router />
      </MemoryRouter>
    );
  });
});
