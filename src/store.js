import { configureStore } from '@reduxjs/toolkit'
import { movieReducer } from './features/movies/movieSlice'
import { authReducer } from './features/auth/authSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        movies: movieReducer,
    },
})
