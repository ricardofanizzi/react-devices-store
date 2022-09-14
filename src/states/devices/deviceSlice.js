import { createSlice } from '@reduxjs/toolkit';

export const deviceSlice = createSlice({
  name: 'devices',
  initialState: [],
  reducers: {
    initDeviceList: (state, actions) => {
      return actions.payload;
    },
  },
});

export const { initDeviceList } = deviceSlice.actions;
export default deviceSlice.reducer;
