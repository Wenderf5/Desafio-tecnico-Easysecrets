import { configureStore } from '@reduxjs/toolkit';
import visibilityOfModalReducer from './slices/visibilityOfModalSlice';

export const store = configureStore({
  reducer: {
    visibilityOfModal: visibilityOfModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
