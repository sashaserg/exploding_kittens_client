import { take, call, put } from 'redux-saga/effects';
import { createWaitingRoomChannel } from '../channels/waitingRoom';
import { GameSocketEmitter } from '../../api/GameSocketApi';
import { iAmHere } from '../actions/actionCreator';

// export function * waitingRoomSaga() {
//   const channel = yield call(createWaitingRoomChannel);

//   while (true) {
//     const action = yield take(channel);
//     console.log({ action });
    
//     yield put(action);
//   }
// }

export function * iAmHereSaga({ playerName } : ReturnType<typeof iAmHere>) {
  GameSocketEmitter.iAmHere(playerName);
};