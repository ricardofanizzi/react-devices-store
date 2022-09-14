import { render, screen } from '@testing-library/react';
import React from 'react';
import Header from './Header';

describe('Header', () => {
  it('must exist title', () => {
    const component = render(<Header />);
    expect(screen.getAllByText(/Device Store/i));
  });
});
