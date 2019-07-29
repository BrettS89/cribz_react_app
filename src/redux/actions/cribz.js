import { GET_MY_CRIBS, SET_MY_CRIBS, ADD_CRIB, SET_ONE_CRIB } from './actionTypes';

export const getMyCribs = () => ({
  type: GET_MY_CRIBS,
});

export const setMyCribs = payload => ({
  type: SET_MY_CRIBS,
  payload,
});

export const addCrib = payload => ({
  type: ADD_CRIB,
  payload,
});

export const setOneCrib = payload => ({
  type: SET_ONE_CRIB,
  payload,
});
