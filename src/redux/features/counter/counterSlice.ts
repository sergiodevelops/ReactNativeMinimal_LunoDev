

interface CounterState {
    value: number;
    status: 'idle' | 'loading' | 'failed';
}


const initialState: CounterState = {
    value: 0,
    status: 'idle',
};



// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});

export const { increment, decrement } = counterSlice.actions;

export const selectCount = (state: CounterState) => state.value;

export default counterSlice.reducer;