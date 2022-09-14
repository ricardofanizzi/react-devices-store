import { render } from '@testing-library/react';
import React from 'react';
import DeviceList from './DeviceList';

describe('DeviceList', () => {
  it('must exist', () => {
    const component = render(<DeviceList />);
  });
});
