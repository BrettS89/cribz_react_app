import { SET_MY_CRIBS, SET_ONE_CRIB } from '../actions/actionTypes';

const INITIAL_STATE = {
  myCribs: [],
};

export default function(state = INITIAL_STATE, { type, payload }) {
  switch(type) {

    case SET_MY_CRIBS:
      return {
        ...state,
        myCribs: payload,
      };

    case SET_ONE_CRIB:
      return {
        ...state,
        myCribs: [payload, ...state.myCribs],
      }

    default:
      return state;
  }
}
