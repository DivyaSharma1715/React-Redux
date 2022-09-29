import {ADD, ADD_USER, DEL_USER, SUB} from './actions';
const initialState = {
  userName: [],
  counter: 0,
};
const UserDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        userName: [
          ...state.userName,
          {
            id: action.payload.new.id,
            firstName: action.payload.new.firstName,
            lastName: action.payload.new.lastName,
          },
        ],
      };
    case DEL_USER:
      return {
        ...state,
        userName: state.userName.filter(item => {
          return item.id !== action.payload;
        }),
      };
    case ADD:
      return {...state, counter: state.counter + 1};
    case SUB:
      return {...state, counter: state.counter - 1};
    default:
      return state;
  }
};
export default UserDataReducer;
