import { SET_IS_LOADING, SET_IS_NOT_LOADING, SET_IS_LOGGED_IN } from '../actions/actionTypes';

const INITIAL_STATE = {
  isLoading: false,
  isLoggedIn: false,
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

    default:
      return state;
  }
}
