import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
    name: 'movies',
    initialState: { list: [] },
    reducers: {
        getAll(state, action) {
            state.list = Object.keys(action.payload).map(key => ({ id: key, ...action.payload[key] }));
        },
    },
});

export const movieReducer = movieSlice.reducer;
export const movieActions = movieSlice.actions;
