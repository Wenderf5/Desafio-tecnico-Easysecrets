import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface data {
    produto: string,
    vendas: {
        mes: string,
        quantidade: number
    }[]
}

export interface chartInterface {
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
        }
    }
});

export const { addChart } = chatsSlice.actions;
export default chatsSlice.reducer;