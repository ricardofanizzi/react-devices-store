import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
  it('must exist title', () => {
    const component = render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getAllByText(/Device Store/i));
  });
});
