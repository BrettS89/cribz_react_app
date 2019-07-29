import { SET_IS_LOADING, SET_IS_NOT_LOADING, SET_IS_LOGGED_IN } from './actionTypes';

export const isLoading = () => ({
  type: SET_IS_LOADING,
});

export const isNotLoading = () => ({
  type: SET_IS_NOT_LOADING,
});

export const isLoggedIn = () => ({
  type: SET_IS_LOGGED_IN,
});
