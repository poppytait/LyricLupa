import {
  SEARCH_ARTIST_BEGIN,
  SEARCH_ARTIST_SUCCESS,
  SEARCH_ARTIST_FAILURE
} from "../actions/action-types";

export function searchArtist() {
  return dispatch => {};
}

export const searchArtistBegin = () => ({
  type: SEARCH_ARTIST_BEGIN
});

export const searchArtistSuccess = artists => ({
  type: SEARCH_ARTIST_SUCCESS,
  payload: { artists }
});

export const searchArtistFailure = error => ({
  type: SEARCH_ARTIST_FAILURE,
  payload: { error }
});
