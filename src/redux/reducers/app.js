import { SET_IS_LOADING, SET_IS_NOT_LOADING, SET_IS_LOGGED_IN, SET_IS_ERROR, SET_IS_NOT_ERROR, SET_CURRENT_PAGE } from '../actions/actionTypes';

const INITIAL_STATE = {
  isLoading: false,
  isLoggedIn: false,
  isError: false,
  currentPage: null,
};

export default function(state = INITIAL_STATE, { type, payload }) {
  switch(type) {

    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case SET_IS_NOT_LOADING:
      return {
        ...state,
        isLoading: false,
      };

    case SET_IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: true,
      };

    case SET_IS_ERROR:
      return {
        ...state,
        isError: true,
      };

    case SET_IS_NOT_ERROR:
      return {
        ...state,
        isError: false,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload,
      };

    default:
      return state;
  }
}
