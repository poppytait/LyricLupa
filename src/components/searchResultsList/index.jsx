import React, { useEffect } from "react";
import { connect } from "react-redux";

const SearchResultsList = ({ error, loading, tracks, searchCategory }) => {
  if (error) return <div>Error! {error.message}</div>;
  if (loading) return <div>Loading...</div>;

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

const mapStateToProps = state => {
  return {
    tracks: state.tracks.tracks,
    searchCategory: state.searchCategory.searchCategory
  };
};

export default connect(mapStateToProps)(SearchResultsList);
