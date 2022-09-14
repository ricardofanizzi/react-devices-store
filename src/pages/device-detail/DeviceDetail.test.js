import { render } from '@testing-library/react';
import React from 'react';
import DeviceDetail from './DeviceDetail';

describe('DeviceDetail', () => {
  it('must exist', () => {
    const component = render(<DeviceDetail />);
  });
});
