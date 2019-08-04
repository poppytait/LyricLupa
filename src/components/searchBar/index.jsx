import React, { useState } from 'react';
import SearchResultsList from '../searchResultsList/index.jsx'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button'


<<<<<<< HEAD
const SearchBar = props => {
    const [searchValue, setSearchValue] = useState('');

    const handleOnChange = e => {
        setSearchValue(e.target.value)
=======
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
        }
>>>>>>> c0de5988261e249b4aae81fa13333e143143b30f
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        props.search(searchValue)
        resetInputField();
    }

<<<<<<< HEAD
    const resetInputField = () => {
        setSearchValue('');
=======
    handleOnClick = (event) => {
        console.log('submitted')
    }

    render() {
        return (
            <>
                <AppBar position='static' color=''>
                    <Toolbar>
                        <SearchIcon />
                        <InputBase
                            placeholder={this.props.placeholder}
                            value={this.state.filterText}
                            onChange={this.handleFilterTextChange}
                            onSubmit={this.handleOnSubmit}
                        />
                        <Button color='primary' onClick={this.handleOnClick}>Search</Button>
                    </Toolbar>
                </AppBar>
                <SearchResultsList />
            </>
        )
>>>>>>> c0de5988261e249b4aae81fa13333e143143b30f
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