import { FETCHING_CONTACTS, FETCHING_CONTACTS_SUCCESS, FETCHING_CONTACTS_FAILURE } from '../actions/types';

const initialState = {
    data: [],
    pagination: {},
    dataFetched: false,
    isFetching: false,
    error: false
}

export default function contactReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING_CONTACTS:
            return {
                ...state,
                isFetching: true
            }
        case FETCHING_CONTACTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                data: action.data
            }
        case FETCHING_CONTACTS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default:
            return state
    }
}
