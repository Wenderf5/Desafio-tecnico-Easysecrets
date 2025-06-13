import { createSlice, PayloadAction } from '@reduxjs/toolkit';

enum typeOfChart {
  line,
  area,
  pine,
  bar
}

interface visibilityOfModalInterface {
  typeOfChart: typeOfChart;
  visible: boolean;
}

const initialState: visibilityOfModalInterface = {
  typeOfChart: typeOfChart.line,
  visible: false,
};

const visibilityOfModalSlice = createSlice({
  name: 'visibilityOfModal',
  initialState,
  reducers: {
    open: (state, action: PayloadAction<typeOfChart>) => {
      state.typeOfChart = action.payload;
      state.visible = true;
    },
    close: (state) => {
      state.visible = false;
    }
  },
});

export const { open } = visibilityOfModalSlice.actions;
export default visibilityOfModalSlice.reducer;
