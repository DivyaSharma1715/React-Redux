import {
  ADD,
  ADD_USER,
  DEL_USER,
  FETCH_USER_ERROR,
  FETCH_USER_LIST,
  FETCH_USER_REQUEST,
  SUB,
} from './actions';
const initialState = {
  userName: [],
  counter: 0,
  loading: false,
  users: [],
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
    case FETCH_USER_LIST:
      return {
        loading: false,
        users: action.payload,
        error: '',
      };
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_ERROR:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default UserDataReducer;
