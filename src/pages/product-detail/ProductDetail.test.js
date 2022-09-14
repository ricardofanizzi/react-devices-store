import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../states/store';
import ProductDetail from './ProductDetail';

describe('ProductDetail', () => {
  it('must exist', () => {
    const component = render(
      <Provider store={store}>
        <ProductDetail />
      </Provider>
    );
  });
});
