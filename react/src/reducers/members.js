import { FETCHING_MEMBERS, FETCHING_MEMBERS_SUCCESS, FETCHING_MEMBERS_FAILURE } from '../actions/types';

const initialState = {
    data: [],
    pagination: {},
    dataFetched: false,
    isFetching: false,
    error: false
}

export default function contactReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING_MEMBERS:
            return {
                ...state,
                isFetching: true
            }
        case FETCHING_MEMBERS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                data: action.data
            }
        case FETCHING_MEMBERS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default:
            return state
    }
}
