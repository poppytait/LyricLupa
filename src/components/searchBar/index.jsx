import React from 'react';
import SearchResultsList from '../searchResultsList/index.jsx'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button'


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
        }
    }
    handleFilterTextChange = (event) => {
        this.setState({ filterText: event.target.value })
    }

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
    }
}

export default SearchBar;