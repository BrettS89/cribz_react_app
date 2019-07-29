import { combineReducers } from 'redux';
import appReducer from './app';
import cribsReducer from './cribz';

export default combineReducers({
  app: appReducer,
  cribs: cribsReducer,
});
