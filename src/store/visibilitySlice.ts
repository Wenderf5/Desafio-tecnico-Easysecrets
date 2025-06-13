import { createSlice } from '@reduxjs/toolkit';

interface VisibilityState {
  visible: boolean;
}

const initialState: VisibilityState = {
  visible: false,
};

const visibilitySlice = createSlice({
  name: 'visibility',
  initialState,
  reducers: {
    toggle: (state) => {
      state.visible = !state.visible;
    },
  },
});

export const { toggle } = visibilitySlice.actions;
export default visibilitySlice.reducer;
