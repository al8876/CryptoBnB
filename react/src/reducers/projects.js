import { FETCHING_PROJECTS, FETCHING_PROJECTS_SUCCESS, FETCHING_PROJECTS_FAILURE } from '../actions/types';

const initialState = {
    data: [],
    pagination: {},
    dataFetched: false,
    isFetching: false,
    error: false
}

export default function contactReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING_PROJECTS:
            return {
                ...state,
                isFetching: true
            }
        case FETCHING_PROJECTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                data: action.data
            }
        case FETCHING_PROJECTS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default:
            return state
    }
}
