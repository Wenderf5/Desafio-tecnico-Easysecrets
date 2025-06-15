import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface data {
    produto: string,
    vendas: {
        mes: string,
        quantidade: number
    }[]
}

export interface chartInterface {
    id: string,
    chartName: string,
    data: data[]
}

const initialState: chartInterface[] = []

const chatsSlice = createSlice({
    name: "chatsSlice",
    initialState: initialState,
    reducers: {
        addChart: (state, action: PayloadAction<chartInterface>) => {
            state.push(action.payload);
        },
        deleteChart: (state, action: PayloadAction<string>) => {
            const chartIndex = state.findIndex((chart) => chart.id === action.payload);
            state.splice(chartIndex, 1);
        }
    }
});

export const { addChart, deleteChart } = chatsSlice.actions;
export default chatsSlice.reducer;