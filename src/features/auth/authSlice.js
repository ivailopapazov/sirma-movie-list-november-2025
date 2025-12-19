import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
    },
    reducers: {
        login(state, action) {
            state.user = {
                uid: action.payload.uid,
                email: action.payload.email,
                displayName: action.payload.displayName,
            };
        },
    },
});

export const authReducer = authSlice.reducer;

export const { login } = authSlice.actions;
