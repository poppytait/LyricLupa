import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchBarContainer from './containers/searchBar/index.jsx'

class App extends React.Component {
    render() {
        return (
            <>
                <SearchBarContainer />
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))

if (module.hot) {
    module.hot.accept();
} 