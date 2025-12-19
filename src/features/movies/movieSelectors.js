const getMoviesState = (state) => state.movies;

export const getAllMovies = (state) => getMoviesState(state).list;
export const getMovieById = (state, movieId) =>
    getMoviesState(state).list.find((movie) => movie.id === movieId);
