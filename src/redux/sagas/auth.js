import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import * as authActions from '../actions/auth';
import * as appActions from '../actions/app';
import { apiLogin } from '../../utils/apiCalls';

export default [
  loginWatcher,
  logoutWatcher,
];

function * loginWatcher() {
  yield takeLatest(actionTypes.ON_LOGIN, loginHandler);
}

function * logoutWatcher() {
  yield takeLatest(actionTypes.ON_LOGOUT, logoutHandler);
}

function * loginHandler({ payload: { credentials, navigate } }) {
  try {
    yield put(appActions.isLoading());
    const { access_token } = yield call(apiLogin, credentials);
    if (!access_token) throw new Error('login error');
    localStorage.setItem('token', access_token);
    yield put(appActions.isLoggedIn());
    navigate();
    yield put(appActions.isNotLoading());
  } catch(e) {
    yield put(appActions.isNotLoading());
    console.log('loginHandler error: ', e);
  }
}

function * logoutHandler() {
  try {
    yield localStorage.clear();
    yield put(authActions.resetStore());
  } catch(e) {
    console.log('logoutHandler error: ', e);
  }
}
