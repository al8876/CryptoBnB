import { FETCHING_TASKS, FETCHING_TASKS_SUCCESS, FETCHING_TASKS_FAILURE } from '../actions/types';

const initialState = {
    data: [],
    pagination: {},
    dataFetched: false,
    isFetching: false,
    error: false
}

export default function tasksReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING_TASKS:
            return {
                ...state,
                isFetching: true
            }
        case FETCHING_TASKS_SUCCESS:
            return {
                ...state,
            isFetching: false,
            dataFetched: true,
                data: action.data
            }
        case FETCHING_TASKS_FAILURE:
            return {
                ...state,
            isFetching: false,
                error: true
            }
        default:
            return state
    }
}
