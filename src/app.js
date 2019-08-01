import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchBarContainer from './containers/searchBar/index.jsx'
import SearchBar from './components/SearchBar/index.jsx'
import SearchResultsList from './components/SearchResultsList/index.jsx'

const App = () => {
    const [loading, setLoading] = useState(false);
    const [song, setSong] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    const MUSIC_API_URL = 'https://api.musixmatch.com/ws/1.1/'

    const search = searchValue => {
        setLoading(true);
        setErrorMessage(null);


        fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.Response === "True") {
                    setMovies(jsonResponse.Search);
                    setLoading(false);
                } else {
                    setErrorMessage(jsonResponse.Error);
                    setLoading(false);
                }
            });
    };
};


useEffect(() => {
    fetch(MUSIC_URL_API)
        .then(res => res.json())
        .then(jsonResponse => {
            setMusic(jsonResponse.SearchBar);
            setLoading(false);
        })
},
    []);


return (
    <>
        <SearchBar />
        <SearchResultsList />
    </>
)
    }


ReactDOM.render(<App />, document.getElementById('app'))

if (module.hot) {
    module.hot.accept();
} 