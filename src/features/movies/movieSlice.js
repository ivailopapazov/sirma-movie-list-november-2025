import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
    name: 'movies',
    initialState: { list: [] },
    reducers: {},
});

export const movieReducer = movieSlice.reducer;
