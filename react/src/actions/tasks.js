import * as types from './types';

export function fetchTasks() {
  return (dispatch) => {
    dispatch({
      type: types.FETCHING_TASKS
    });

    fetch('/data/tasks.json')
      .then((response) => response.json())
      .then((response) => {
        dispatch({
          type: types.FETCHING_TASKS_SUCCESS,
          data: response.data,
          dataFetched: true,
          pagination: response.pagination
        });
      });
  }
}
