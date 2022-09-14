import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ProductCard from './ProductCard';

describe('ProductCard', () => {
  it('must exist title', () => {
    const component = render(
      <MemoryRouter initialEntries={['/']}>
        <ProductCard />
      </MemoryRouter>
    );
  });
});
