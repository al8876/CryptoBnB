import * as types from './types';

export function fetchMembers() {
    return (dispatch) => {
        dispatch({
            type: types.FETCHING_MEMBERS
        });

        fetch('/data/members.json')
            .then((response) => response.json())
            .then((response) => {
                dispatch({
                    type: types.FETCHING_MEMBERS_SUCCESS,
                    data: response.data,
                    dataFetched: true,
                    pagination: response.pagination
                });
            });
    }
}
