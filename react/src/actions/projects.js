import * as types from './types';

export function fetchProjects() {
    return (dispatch) => {
        dispatch({
            type: types.FETCHING_PROJECTS
        });

        fetch('/data/projects.json')
            .then((response) => response.json())
            .then((response) => {
                dispatch({
                    type: types.FETCHING_PROJECTS_SUCCESS,
                    data: response.data,
                    dataFetched: true,
                    pagination: response.pagination
                });
            });
    }
}
