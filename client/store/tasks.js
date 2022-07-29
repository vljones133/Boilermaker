import axios from 'axios';

const SET_TASKS = 'SET_TASKS';
const CREATE_TASK = 'CREATE_TASK';
const DELETE_TASK = 'DELETE_TASK';

export const setTasks = (tasks) => ({
  type: SET_TASKS,
  tasks,
});

const createTask = (task) => {
  return {
    type: CREATE_TASK,
    task,
  };
};

const deleteTask = (task) => {
  return {
    type: DELETE_TASK,
    task,
  };
};

export const fetchTasks = () => async (dispatch) => {
  const tasksResponse = await axios.get('/api/tasks');
  dispatch(setTasks(tasksResponse.data));
};

export const createTaskThunk = (task, history) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`/api/tasks`, task);
      dispatch(createTask(response.data));
      history.push('/tasks');
    } catch (err) {
      console.log(err.response);
    }
  };
};

export const deleteTaskThunk = (id, history) => {
  return async (dispatch) => {
    try {
      const { data: task } = await axios.delete(`/api/tasks/${id}`);
      dispatch(deleteTask(task));
      history.push('/tasks');
    } catch (err) {
      console.log(err.response);
    }
  };
};

export default function tasksReducer(tasks = [], action) {
  switch (action.type) {
    case SET_TASKS:
      return action.tasks;
    case CREATE_TASK:
      return [...tasks, action.task];
    case DELETE_TASK:
      return tasks.filter((task) => task.id !== action.task.id);
    default:
      return tasks;
  }
}
