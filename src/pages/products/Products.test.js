import { render } from '@testing-library/react';
import React from 'react';
import Products from './Products';

describe('Products', () => {
  it('must exist', () => {
    const component = render(<Products />);
  });
});
