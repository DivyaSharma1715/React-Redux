export const ADD_USER = 'ADD_USER';
export const DEL_USER = 'DEL_USER';
export const ADD = 'ADD';
export const SUB = 'SUB';
export const FETCH_USER_LIST = 'FETCH_USER_LIST';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';
export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
import axios from 'axios';

export const addUser = (firstName, lastName, id) => {
  console.log(firstName, lastName);
  return {
    type: ADD_USER,
    payload: {
      new: {
        id: id,
        firstName: firstName,
        lastName: lastName,
      },
    },
  };
};
export const deleteUser = index => {
  console.log('action', index);
  return {
    type: DEL_USER,
    payload: index,
  };
};
export const add = val => {
  return {
    type: ADD,
    payload: val,
  };
};
export const sub = val => {
  return {
    type: SUB,
    payload: val,
  };
};
export const fetchUserList = users => {
  return {
    type: FETCH_USER_LIST,
    payload: users,
  };
};
export const fetchUserUnsuccess = message => {
  return {
    type: FETCH_USER_ERROR,
    payload: message,
  };
};
export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};
export const fetchListing = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const users = response.data;
        // console.log('users', users);
        dispatch(fetchUserList(users));
      })
      .catch(error => {
        const errorMessage = error.message;
        dispatch(fetchUserUnsuccess(errorMessage));
      });
  };
};
