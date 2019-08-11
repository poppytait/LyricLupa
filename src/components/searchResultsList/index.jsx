import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { searchTrack } from '../../redux/actions/actions'

const SearchResultsList = (props) => {
  useEffect(() => {
    props.dispatch(searchTrack())
  }, [])

  const { error, loading, tracks } = props;

  if (error) return <div>Error! {error.message}</div>
  if (loading) return <div>Loading...</div>

  return (
    <>
      <div>Hiya</div>
      <ul>
        {tracks.map(({ track }) =>
          <li key={track.track_id}>{track.track_name}</li>
        )}
      </ul>
    </>
  )
}

const mapStateToProps = state => (
  state
)

export default connect(mapStateToProps)(SearchResultsList)
