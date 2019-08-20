import {
  SEARCH_ARTIST_BEGIN,
  SEARCH_ARTIST_SUCCESS,
  SEARCH_ARTIST_FAILURE
} from "../actions/action-types";
import MusixmatchClient from "../../api/MusixmatchClient";


const client = new MusixmatchClient();

export function searchArtist(query) {
  return dispatch => {
    dispatch(searchArtistBegin());
    return client
      .search(query)
      .then(artistList => {
        dispatch(searchArtistSuccess(artistList))
        return artistList;
      })
      .catch(error => dispatch(searchArtistFailure(error)));
  };
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
