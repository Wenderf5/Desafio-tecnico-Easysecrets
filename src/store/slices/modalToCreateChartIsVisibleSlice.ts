import { createSlice } from '@reduxjs/toolkit';

const initialState: boolean = false;

const modalToCreateChartIsVisibleSlice = createSlice({
  name: 'modalToCreateChartIsVisible',
  initialState,
  reducers: {
    toogle: (state) => {
      return !state;
    }
  }
});

export const { toogle } = modalToCreateChartIsVisibleSlice.actions;
export default modalToCreateChartIsVisibleSlice.reducer;
