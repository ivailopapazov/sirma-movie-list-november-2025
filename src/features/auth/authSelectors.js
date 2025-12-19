export const getAuthState = (state) => state.auth;

export const getIsAuthenticated = (state) => !!getAuthState(state).user;
export const getUser = (state) => getAuthState(state).user;
