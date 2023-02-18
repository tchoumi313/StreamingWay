import React from "react";
import { useEffect, useState } from "react";
import "./MovieCard";
import "./App.css";
//import "./assets/css/bootstrap-reboot.min.css";
import searchIcoN from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "https://www.omdbapi.com?apikey=f953d2be";

const App = () => {
  const [movies, setMovies] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    //`${API_URL}&s=${title}`
    const response = await fetch("https://www.omdbapi.com?apikey=f953d2be&s=thor");
    const data = await response.json();

    console.log(data.Search);
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("thor");
  }, []);

  return (
    <>
      <div className="app">
        <div>
          <h1>StreamingWay</h1>
        </div>

        <div className="search">
          <input
            placeholder="Search for Movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <img
            src={searchIcoN}
            alt="Search"
            onClick={() => searchMovies(searchTerm)}
          ></img>
        </div>

        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h1>No Movies</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
