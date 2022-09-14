import { render } from '@testing-library/react';
import React from 'react';
import Router from './Router';

describe('Router', () => {
  it('must exist', () => {
    const component = render(<Router />);
  });
});
