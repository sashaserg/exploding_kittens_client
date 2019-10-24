import { fork, takeLatest } from 'redux-saga/effects';
import { iAmHereSaga } from './waitingRoomSaga';
import { ACTION } from '../actions/actionTypes';

export function * rootSaga() {
  // yield fork(waitingRoomSaga);
  yield takeLatest(ACTION.I_AM_HERE, iAmHereSaga);
}