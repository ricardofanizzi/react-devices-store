import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    filteredProducts: [],
  },
  reducers: {
    initProductList: (state, actions) => {
      return {
        ...state,
        products: actions.payload,
        filteredProducts: actions.payload,
      };
    },

    filterProducts: (state, actions) => {
      return {
        ...state,
        filteredProducts: state.products.filter(
          (product) =>
            product.brand
              .toLowerCase()
              .includes(actions.payload.toLowerCase()) ||
            product.model.toLowerCase().includes(actions.payload.toLowerCase())
        ),
      };
    },
  },
});

export const { initProductList, filterProducts } = productSlice.actions;
export default productSlice.reducer;
