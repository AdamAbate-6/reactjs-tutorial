import {useEffect, useState, React} from 'react'

import MovieCard from './MovieCard'

// Importing css file immediately applies it
import './App.css'
import SearchIcon from './search.svg'

//http://www.omdbapi.com/?i=tt3896198&apikey=21ffa1eb

const API_URL = 'http://www.omdbapi.com?apikey=21ffa1eb'

const movie1 = {
    "Title": "Amazing Spiderman Syndrome",
    "Year": "2012",
    "imdbID": "tt2586634",
    "Type": "movie",
    "Poster": "N/A"
}

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('Spiderman');

    const searchMovies = async (title) => {
        // `` means template string 
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies(searchTerm)
    }, [])

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img 
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length > 0
                    ? (
                        <div className="container">
                            {movies.map((movie) => (
                                <MovieCard movie={movie}/>
                            ))}
                        </div>
                    ) : (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )
            }


        </div>
    );
}

// Need to export component so can call it from somewhere else
export default App;