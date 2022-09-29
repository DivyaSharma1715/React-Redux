import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
// import {fetchListing} from './actions';
import {RootReducer} from './rootReducer';
export const Store = createStore(RootReducer, applyMiddleware(thunk));
// Store.dispatch(fetchListing());
