import React from 'react';
import SearchResultsList from '../searchResultsList/index.jsx'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = (props) => {
    return (
        <>
            <AppBar position='static' color='white'>
                <Toolbar>
                    <SearchIcon />
                    <InputBase
                        placeholder={props.placeholder}
                    />
                </Toolbar>
            </AppBar>
            <SearchResultsList />
        </>
    )
}

export default SearchBar;