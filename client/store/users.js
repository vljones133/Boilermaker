import axios from 'axios';

const SET_USERS = 'SET_USERS';
const CREATE_USER = 'CREATE_USER';
const DELETE_USER = 'DELETE_USER';

export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});

const createUser = (user) => {
  return {
    type: CREATE_USER,
    user,
  };
};

const deleteUser = (user) => {
  return {
    type: DELETE_USER,
    user,
  };
};

export const fetchUsers = () => async (dispatch) => {
  const usersResponse = await axios.get('/api/users');
  dispatch(setUsers(usersResponse.data));
};

export const createUserThunk = (user, history) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`/api/users`, user);
      dispatch(createUser(response.data));
      history.push('/users');
    } catch (err) {
      console.log(err.response);
    }
  };
};

export const deleteUserThunk = (id, history) => {
  return async (dispatch) => {
    try {
      const { data: user } = await axios.delete(`/api/users/${id}`);
      dispatch(deleteUser(user));
      history.push('/users');
    } catch (err) {
      console.log(err.response);
    }
  };
};

export default function usersReducer(users = [], action) {
  switch (action.type) {
    case SET_USERS:
      return action.users;
    case CREATE_USER:
      return [...users, action.user];
    case DELETE_USER:
      return users.filter((user) => user.id !== action.user.id);
    default:
      return users;
  }
}
