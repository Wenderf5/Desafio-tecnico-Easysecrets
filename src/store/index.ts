import { configureStore } from '@reduxjs/toolkit';
import visibilityOfModalReducer from './slices/visibilityOfModalSlice';
import chartsReducer from './slices/chartsSlice';

export const store = configureStore({
  reducer: {
    visibilityOfModal: visibilityOfModalReducer,
    charts: chartsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
