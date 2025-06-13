import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum enumTypeOfChart {
  line,
  area,
  pine,
  bar
}

interface visibilityOfModalInterface {
  typeOfChart: enumTypeOfChart;
  visible: boolean;
}

const initialState: visibilityOfModalInterface = {
  typeOfChart: enumTypeOfChart.line,
  visible: false,
};

const visibilityOfModalSlice = createSlice({
  name: 'visibilityOfModal',
  initialState,
  reducers: {
    open: (state, action: PayloadAction<enumTypeOfChart>) => {
      state.typeOfChart = action.payload;
      state.visible = true;
    },
    close: (state) => {
      state.visible = false;
    }
  },
});

export const { open, close } = visibilityOfModalSlice.actions;
export default visibilityOfModalSlice.reducer;
