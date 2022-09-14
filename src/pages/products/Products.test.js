import { render } from '@testing-library/react';
import React from 'react';

import { Provider } from 'react-redux';
import { store } from '../../states/store';
import Products from './Products';

describe('Products', () => {
  it('must exist', () => {
    const component = render(
      <Provider store={store}>
        <Products />
      </Provider>
    );
  });
});
