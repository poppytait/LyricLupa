import { SEARCH_TRACK_BEGIN, SEARCH_TRACK_SUCCESS, SEARCH_TRACK_FAILURE } from '../actions/action-types'

const initialState = {
    tracks: [],
    loading: false,
    error: null
}

export default function trackReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_TRACK_BEGIN:
            return {
                ...state,
                loading: true,
                error: null,
            }

        case SEARCH_TRACK_SUCCESS:
            return {
                ...state,
                tracks: action.payload.tracks,
                loading: false,
                error: null,
            }

        case SEARCH_TRACK_FAILURE:
            return {
                ...state,
                tracks: [],
                loading: false,
                error: action.payload.error,
            }

        default:
            return state;
    }
}