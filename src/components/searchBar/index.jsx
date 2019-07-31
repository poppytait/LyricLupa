import React from 'react';
import SearchResultsList from '../searchResultsList/index.jsx'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
        }

        // this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }
    handleFilterTextChange = (event) => {
        this.setState({ filterText: event.target.value })
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
                        />
                    </Toolbar>
                </AppBar>
                <SearchResultsList />
            </>
        )
    }
}

export default SearchBar;