import { configureStore } from '@reduxjs/toolkit';
import modalToCreateChartIsVisibleReducer from './slices/modalToCreateChartIsVisibleSlice';
import chartsReducer from './slices/chartsSlice';
import fullScreenReducer from './slices/fullScreenSlice';

export const store = configureStore({
  reducer: {
    modalToCreateChartIsVisible: modalToCreateChartIsVisibleReducer,
    charts: chartsReducer,
    fullScreen: fullScreenReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
