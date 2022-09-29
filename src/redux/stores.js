import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {RootReducer} from './rootReducer';
export const Store = createStore(RootReducer, applyMiddleware(thunk));
