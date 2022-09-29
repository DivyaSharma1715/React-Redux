import {combineReducers} from 'redux';
import UserDataReducer from './reducers';

const RootReducer = combineReducers({
  UserDataReducer,
});
export {RootReducer};
