import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    initProductList: (state, actions) => {
      return actions.payload;
    },
  },
});

export const { initProductList } = productSlice.actions;
export default productSlice.reducer;
