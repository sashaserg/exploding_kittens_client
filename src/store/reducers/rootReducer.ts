
import { combineReducers } from 'redux';

import { waitingRoomReducer } from './waitingRoomReducer'

const appReducer = combineReducers({
    waitingRoomReducer,
});

const rootReducer = (state: any, action: any) => {
    return appReducer(state, action);
};

export default rootReducer;