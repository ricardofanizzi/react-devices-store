import { render } from '@testing-library/react';
import React from 'react';
import ProductList from './ProductList';

describe('ProductList', () => {
  it('must exist', () => {
    const component = render(<ProductList />);
  });
});
