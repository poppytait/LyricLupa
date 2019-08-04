import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import SearchBarContainer from './containers/searchBar/index.jsx'
import SearchBar from './components/SearchBar/index.jsx'
import SearchResultsList from './components/SearchResultsList/index.jsx'
import MusixmatchClient from '../src/api/MusixmatchClient'
import index from "./js/index"
// require('dotenv').config()

const App = () => {
    const newMusixSearch = new MusixmatchClient()
    useEffect(() => {
        async function fetchData() {
            const searchResults = await newMusixSearch.search()
            console.log(searchResults)
        }
        fetchData()
    })

    return (
        <>
            <SearchBar />
            <SearchResultsList />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))

if (module.hot) {
    module.hot.accept()
}
