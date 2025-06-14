import { createSlice } from '@reduxjs/toolkit';

interface visibilityOfModalInterface {
  visible: boolean;
}

const initialState: visibilityOfModalInterface = {
  visible: false,
};

const visibilityOfModalSlice = createSlice({
  name: 'visibilityOfModal',
  initialState,
  reducers: {
    toogle: (state) => {
      state.visible = !state.visible;
    }
  },
});

export const { toogle } = visibilityOfModalSlice.actions;
export default visibilityOfModalSlice.reducer;
