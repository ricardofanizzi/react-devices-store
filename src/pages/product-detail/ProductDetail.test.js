import { render } from '@testing-library/react';
import React from 'react';
import ProductDetail from './ProductDetail';

describe('ProductDetail', () => {
  it('must exist', () => {
    const component = render(<ProductDetail />);
  });
});
