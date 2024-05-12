import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 }, // initialState should be an object with a 'value' property
    reducers: {
        increment: (state) => {
            state.value += 1; // Since state is an object, you should access its properties
        },
        decrement: (state) => {
            state.value -= 1; // Same here, accessing the 'value' property of state
        },
    }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
