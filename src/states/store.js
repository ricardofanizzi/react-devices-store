import { configureStore } from '@reduxjs/toolkit';
import deviceReducer from './devices/deviceSlice';
import shoppingCartReducer from './shoppingCart/shoppingCartSlice';

export const store = configureStore({
  reducer: { devices: deviceReducer, shoppingCart: shoppingCartReducer },
});
