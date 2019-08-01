import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import { myCribs } from '../selectors';
import * as actionTypes from '../actions/actionTypes';
import * as cribsActions from '../actions/cribz';
import * as appActions from '../actions/app';
import { apiGetMyCribs, apiAddCrib, apiDeleteCrib } from '../../utils/apiCalls';

export default [
  getMyCribsWatcher,
  addCribWatcher,
  deleteCribWatcher,
];

function * getMyCribsWatcher() {
  yield takeLatest(actionTypes.GET_MY_CRIBS, getMyCribsHandler);
}

function * addCribWatcher() {
  yield takeLatest(actionTypes.ADD_CRIB, addCribHandler);
}

function * deleteCribWatcher() {
  yield takeLatest(actionTypes.DELETE_CRIB, deleteCribHandler);
}

function * getMyCribsHandler() {
  try {
    yield put(appActions.isLoading());
    const { cribs } = yield call(apiGetMyCribs);
    if (cribs === undefined) throw new Error('wtf');
    yield put(cribsActions.setMyCribs(cribs));
    yield put(appActions.isNotLoading());
  } catch(e) {
    yield put(appActions.isNotLoading());
    yield put(appActions.setIsError());
    console.log('getMyCribsHandler error: ', e);
  }
}

function * addCribHandler({ payload }) {
  try {
    yield put(appActions.isLoading());
    const { crib } = yield call(apiAddCrib, JSON.stringify(payload));
    if (!crib) throw new Error('no crib')
    yield put(cribsActions.setOneCrib(crib));
    yield put(appActions.isNotLoading());
  } catch(e) {
    yield put(appActions.isNotLoading());
    yield put(appActions.setIsError());
    console.log('addCribHandler error', e);
  }
}

function * deleteCribHandler({ payload }) {
  try {
    yield put(appActions.isLoading());
    const { message } = yield call(apiDeleteCrib, JSON.stringify(payload));
    if (message !== 'crib deleted') throw new Error('error');
    const myCribsState = yield select(myCribs);
    const filteredCribs = myCribsState.filter(c => c.id !== payload._id);
    yield put(cribsActions.setMyCribs(filteredCribs));
    yield put(appActions.isNotLoading());
  } catch(e) {
    yield put(appActions.isNotLoading());
    yield put(appActions.setIsError());
    console.log('deleteCribHandler error', e);
  }
}
