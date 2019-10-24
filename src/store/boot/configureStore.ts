 
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import combinedReducers from '../reducers/rootReducer'
import { rootSaga } from '../sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware();

export const configureStore = () => {
    const middleware = [
        sagaMiddleware
    ];
    const store = createStore(combinedReducers, compose(applyMiddleware(...middleware)));
    sagaMiddleware.run(rootSaga);
    return store;
}