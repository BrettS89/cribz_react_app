import { ON_LOGIN } from './actionTypes';

export const login = payload => ({
  type: ON_LOGIN,
  payload,
});

export const resetStore = () => ({
  type: 'RESET',
});
