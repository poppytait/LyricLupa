import React, { useState } from 'react';
import SearchResultsList from '../searchResultsList/index.jsx'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';


const SearchBar = props => {
    const [searchValue, setSearchValue] = useState('');

    const handleOnChange = e => {
        setSearchValue(e.target.value)
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        props.search(searchValue)
        resetInputField();
    }

    const resetInputField = () => {
        setSearchValue('');
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
    );
}


export default SearchBar;