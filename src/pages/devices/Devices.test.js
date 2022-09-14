import { render } from '@testing-library/react';
import React from 'react';
import Devices from './Devices';

describe('Devices', () => {
  it('must exist', () => {
    const component = render(<Devices />);
  });
});
