import { render } from '@testing-library/react';
import React from 'react';
import Breadcrumb from './Breadcrumb';

describe('Breadcrumb', () => {
  it('must exist', () => {
    const component = render(<Breadcrumb />);
  });
});
