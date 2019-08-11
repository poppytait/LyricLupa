import React, { useState } from 'react'

const SearchBar = props => {
  const [searchValue, setSearchValue] = useState('')

  const handleOnChange = e => {
    setSearchValue(e.target.value)
  }

  const handleOnSubmit = e => {
    e.preventDefault()
    props.search(searchValue)
    resetInputField()
  }

  const resetInputField = () => {
    setSearchValue('')
  }

  return (
    <form className="search">
      <input
        type='text'
        onChange={handleOnChange}
        value={searchValue}
      />
      <input
        type='submit'
        onSubmit={handleOnSubmit}
        value='SEARCH'
      />
    </form>
  )
}

export default SearchBar
