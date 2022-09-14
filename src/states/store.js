import { configureStore } from '@reduxjs/toolkit';
import productReducer from './products/productSlice';
import shoppingCartReducer from './shoppingCart/shoppingCartSlice';

export const store = configureStore({
  reducer: { products: productReducer, shoppingCart: shoppingCartReducer },
});
