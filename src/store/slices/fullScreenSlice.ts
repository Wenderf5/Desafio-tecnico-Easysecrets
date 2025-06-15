import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { chartInterface } from './chartsSlice';

interface fullScreenInterface {
    visible: boolean;
    chart: chartInterface | undefined;
}

const initialState: fullScreenInterface = {
    visible: false,
    chart: undefined
};

const fullScreenSlice = createSlice({
    name: 'fullScreen',
    initialState,
    reducers: {
        toogle: (state) => {
            state.visible = !state.visible;
        },
        setChart: (state, action: PayloadAction<chartInterface>) => {
            state.chart = action.payload;
        }
    }
});

export const { toogle, setChart } = fullScreenSlice.actions;
export default fullScreenSlice.reducer;
