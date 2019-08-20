import React, { useEffect } from "react";
import { connect } from "react-redux";
import { searchTrack } from "../../redux/actions/searchTrackActions";

const SearchResultsList = ({ error, loading, tracks, dispatch }) => {
  // if (error) return <div>Error! {error.message}</div>
  // if (loading) return <div>Loading...</div>

  return (
    <>
      <ul>
        {tracks.map(({ track }) => (
          <li key={track.track_id}>{track.track_name}</li>
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = state => state.trackReducer;

export default connect(mapStateToProps)(SearchResultsList);
