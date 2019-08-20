import {
  SEARCH_TRACK_BEGIN,
  SEARCH_TRACK_SUCCESS,
  SEARCH_TRACK_FAILURE
} from "./action-types";
import MusixmatchClient from "../../api/MusixmatchClient";

const client = new MusixmatchClient();

export function searchTrack(query) {
  return dispatch => {
    dispatch(searchTrackBegin());
    return client
      .search(query)
      .then(trackList => {
        dispatch(searchTrackSuccess(trackList));
        return trackList;
      })
      .catch(error => dispatch(searchTrackFailure(error)));
  };
}

export const searchTrackBegin = () => ({
  type: SEARCH_TRACK_BEGIN
});

export const searchTrackSuccess = tracks => ({
  type: SEARCH_TRACK_SUCCESS,
  payload: { tracks }
});

export const searchTrackFailure = error => ({
  type: SEARCH_TRACK_FAILURE,
  payload: { error }
});
