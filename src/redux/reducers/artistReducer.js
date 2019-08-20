import {
  SEARCH_ARTIST_BEGIN,
  SEARCH_ARTIST_SUCCESS,
  SEARCH_ARTIST_FAILURE
} from "../actions/action-types";

const initialState = {
  artists: [],
  loading: false,
  error: null
};

export default function artistReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_ARTIST_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case SEARCH_ARTIST_SUCCESS:
      return {
        ...state,
        artists: action.payload.artists,
        loading: false,
        error: null
      };

    case SEARCH_ARTIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };

    default:
      return state;
  }
}
