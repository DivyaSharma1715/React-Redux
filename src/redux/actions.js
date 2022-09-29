export const ADD_USER = 'ADD_USER';
export const DEL_USER = 'DEL_USER';
export const ADD = 'ADD';
export const SUB = 'SUB';

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
