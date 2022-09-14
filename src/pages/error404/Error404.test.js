import { render } from '@testing-library/react';
import React from 'react';
import Error404 from './Error404';

describe('Error404', () => {
  it('must exist', () => {
    const component = render(<Error404 />);
  });
});
