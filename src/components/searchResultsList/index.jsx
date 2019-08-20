import React, { useEffect } from "react";
import { connect } from "react-redux";
import { searchTrack } from "../../redux/actions/actions";

const SearchResultsList = ({ error, loading, tracks, dispatch }) => {
  // useEffect(() => {
  //   props.dispatch(searchTrack())
  // }, [])

  // console.log(props)

  // const { error, loading, tracks } = props;

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

const mapStateToProps = state => state;

export default connect(mapStateToProps)(SearchResultsList);
// export default SearchResultsList;
