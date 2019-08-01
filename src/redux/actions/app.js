import { SET_IS_LOADING, SET_IS_NOT_LOADING, SET_IS_LOGGED_IN, SET_IS_ERROR, SET_IS_NOT_ERROR, SET_CURRENT_PAGE } from './actionTypes';

export const isLoading = () => ({
  type: SET_IS_LOADING,
});

export const isNotLoading = () => ({
  type: SET_IS_NOT_LOADING,
});

export const isLoggedIn = () => ({
  type: SET_IS_LOGGED_IN,
});

export const setIsError = () => ({
  type: SET_IS_ERROR,
});

export const setIsNotError = () => ({
  type: SET_IS_NOT_ERROR,
});

export const setCurrentPage = payload => ({
  type: SET_CURRENT_PAGE,
  payload,
});
