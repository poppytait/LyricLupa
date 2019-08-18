import React, { useState, useEffect } from 'react'
import { searchTrack } from '../../redux/actions/actions'
import { connect } from 'react-redux'

const SearchBar = props => {
  const [searchValue, setSearchValue] = useState('')

  // useEffect(() => {
  //   props.dispatch(searchTrack())
  //   console.log(props)
  //   console.log('big ole treat')
  // }, [])

  const { error, loading, tracks } = props;
  if (error) return <div>Error! {error.message}</div>
  if (loading) return <div>Loading...</div>

  const handleOnChange = e => {
    setSearchValue(e.target.value)
  }

  const handleOnSubmit = (e, props) => {
    e.preventDefault()
    console.log('return of the lights')
    resetInputField()
  }

  const resetInputField = () => {
    setSearchValue('')
  }

  const dispatchSearchTrack = () => {
    console.log(searchValue)
    const results = props.dispatch(searchTrack(searchValue))
    console.log(results)
  }

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input
          type='text'
          onChange={handleOnChange}
          value={searchValue}
        />
        <input
          type='submit'
          value='SEARCH'
        />
        <input
          type='button'
          value='redux'
          onClick={dispatchSearchTrack}
        />
      </form>

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

export default connect(mapStateToProps)(SearchBar)
