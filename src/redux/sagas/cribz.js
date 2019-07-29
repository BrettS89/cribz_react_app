import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import * as cribsActions from '../actions/cribz';
import * as appActions from '../actions/app';
import { apiGetMyCribs, apiAddCrib } from '../../utils/apiCalls';

export default [
  getMyCribsWatcher,
  addCribWatcher,
];

function * getMyCribsWatcher() {
  yield takeLatest(actionTypes.GET_MY_CRIBS, getMyCribsHandler);
}

function * addCribWatcher() {
  yield takeLatest(actionTypes.ADD_CRIB, addCribHandler);
}

function * getMyCribsHandler() {
  try {
    yield put(appActions.isLoading());
    const { cribs } = yield call(apiGetMyCribs);
    yield put(cribsActions.setMyCribs(cribs));
    yield put(appActions.isNotLoading());
  } catch(e) {
    yield put(appActions.isNotLoading());
    console.log('getMyCribsHandler error: ', e);
  }
}

function * addCribHandler({ payload }) {
  try {
    yield put(appActions.isLoading());
    const { crib } = yield call(apiAddCrib, JSON.stringify(payload));
    console.log(crib);
    yield put(cribsActions.setOneCrib(crib));
    yield put(appActions.isNotLoading());
  } catch(e) {
    yield put(appActions.isNotLoading());
    console.log('addCribHandler error', e);
  }
}
